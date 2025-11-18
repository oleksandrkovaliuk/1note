import { defineTable } from "convex/server";
import { v } from "convex/values";

export const documents = defineTable({
  content: v.string(),
  updated_at: v.number(),
  rights: v.object({
    owner: v.string(),
    readers: v.array(v.string()),
    writers: v.array(v.string()),
  }),
})
  .index("by_owner", ["rights.owner"])
  .index("by_readers", ["rights.readers"])
  .index("by_writers", ["rights.writers"]);
