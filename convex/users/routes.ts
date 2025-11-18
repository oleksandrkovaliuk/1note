import { mutation } from "../_generated/server";

export const sync = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) return;

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerk_id", identity.tokenIdentifier),
      )
      .unique();

    const picture = identity?.pictureUrl
      ? identity?.pictureUrl
      : identity?.profileUrl || "";

    return !user
      ? await ctx.db.insert("users", {
          picture,
          email: identity.email!,
          name: identity?.name || "",
          clerk_id: identity.tokenIdentifier,
        })
      : await ctx.db.patch(user._id, {
          picture,
          name: identity?.name || "",
        });
  },
});
