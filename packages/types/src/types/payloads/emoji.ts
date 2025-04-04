import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  animated?: boolean;
  available?: boolean;
  id: Nullable<Snowflake>;
  managed?: boolean;
  name: Nullable<string>;
  require_colons?: boolean;
  roles?: Snowflake[];
  user?: APIUser;
}
