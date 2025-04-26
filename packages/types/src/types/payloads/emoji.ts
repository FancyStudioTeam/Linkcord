import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  animated?: boolean;
  /**
   * @remarks
   * - This field may be `false` if the guild at which the emoji belongs lost
   *   Server Boosts.
   */
  available?: boolean;
  id: Nullable<Snowflake>;
  managed?: boolean;
  /**
   * @remarks
   * - This field may be `null` for reaction emoji objects.
   */
  name: Nullable<string>;
  require_colons?: boolean;
  roles?: Snowflake[];
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 * @remarks
 * - This type is not documented by Discord.
 * - Partial structures may be incorrectly implemented here due lack of
 *   documentation.
 */
export interface APIPartialEmoji extends Partial<Pick<APIEmoji, "animated" | "id" | "name">> {}
