import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  animated?: boolean;
  /**
   * @remarks
   * - This field value may be `false` if the guild at which the emoji belongs
   *   lost Server Boosts which increase the emoji limit.
   */
  available?: boolean;
  id: Snowflake | null;
  managed?: boolean;
  /**
   * @remarks
   * - This field value may be `null` for reaction emoji objects.
   */
  name: string | null;
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
