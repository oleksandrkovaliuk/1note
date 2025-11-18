import { mutation, query } from "../_generated/server";
import { ConvexError, v } from "convex/values";
import { GREETING_DOCUMENT_CONTENT } from "../lib/consts";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) return [];

    const [byOwner, byReaders, byWriters] = await Promise.all([
      ctx.db
        .query("documents")
        .filter((q) => q.eq(q.field("rights.owner"), identity.tokenIdentifier))
        .collect(),
      ctx.db
        .query("documents")
        .filter((q) =>
          q.eq(q.field("rights.readers"), [identity.tokenIdentifier]),
        )
        .collect(),
      ctx.db
        .query("documents")
        .filter((q) =>
          q.eq(q.field("rights.writers"), [identity.tokenIdentifier]),
        )
        .collect(),
    ]);

    const docs = [...byOwner, ...byReaders, ...byWriters];

    const map = Array.from(
      new Map(docs.map((item) => [item._id, item])).values(),
    );

    return map;
  },
});

export const get = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    console.log(identity);
    if (!identity) {
      throw new Error("Sorry but you don't have permission to view this page.");
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new Error("Document not found.");
    }

    const isUserAllowedToView = document.rights.readers.includes(
      identity.tokenIdentifier,
    );

    if (!isUserAllowedToView) {
      throw new Error("Sorry but you don't have permission to view this page.");
    }

    return ctx.db.get(args.id);
  },
});

export const put = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Sorry but you don't have permission to view this page.");
    }

    return ctx.db.insert("documents", {
      content: JSON.stringify(GREETING_DOCUMENT_CONTENT),
      updated_at: Date.now() / 1000,
      rights: {
        owner: identity.tokenIdentifier,
        readers: [identity.tokenIdentifier],
        writers: [identity.tokenIdentifier],
      },
    });
  },
});

export const patch = mutation({
  args: {
    id: v.id("documents"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError({
        message: "You are not allowed to write to this document.",
      });
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError({
        message: "Document not found.",
      });
    }

    const isUserAllowedToWrite = document.rights.writers.includes(
      identity.tokenIdentifier,
    );

    if (!isUserAllowedToWrite) {
      throw new ConvexError({
        message: "You are not allowed to write to this document.",
      });
    }

    return ctx.db.patch(args.id, {
      content: args.content,
      updated_at: Date.now() / 1000,
    });
  },
});
