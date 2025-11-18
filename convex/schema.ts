import { defineSchema } from "convex/server";
import { users } from "./users/schemas";
import { documents } from "./documents/schemas";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  users,
  documents,
});
