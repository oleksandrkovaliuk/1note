/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as convex_client from "../convex-client.js";
import type * as documents_routes from "../documents/routes.js";
import type * as documents_schemas from "../documents/schemas.js";
import type * as lib_consts from "../lib/consts.js";
import type * as users_routes from "../users/routes.js";
import type * as users_schemas from "../users/schemas.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "convex-client": typeof convex_client;
  "documents/routes": typeof documents_routes;
  "documents/schemas": typeof documents_schemas;
  "lib/consts": typeof lib_consts;
  "users/routes": typeof users_routes;
  "users/schemas": typeof users_schemas;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
