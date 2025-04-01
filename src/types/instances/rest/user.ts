import type { Nullable } from "#types";

/**
 * https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface EditCurrentUser {
  avatar?: Nullable<string>;
  banner?: Nullable<string>;
  username?: string;
}
