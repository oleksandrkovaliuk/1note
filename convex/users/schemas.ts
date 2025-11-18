import { defineTable } from "convex/server";
import { v } from "convex/values";

export const users = defineTable({
  clerk_id: v.string(),
  name: v.string(),
  email: v.string(),
  picture: v.string(),
}).index("by_clerk_id", ["clerk_id"]);
