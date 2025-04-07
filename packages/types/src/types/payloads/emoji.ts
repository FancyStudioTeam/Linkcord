import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * Represents a Discord emoji structure.
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  /** Whether the emoji is animated. */
  animated?: boolean;
  /**
   * Whether the emoji can be used.
   * @remarks This may be `false` due to the loss of Server Boosts.
   */
  available?: boolean;
  /** The id of the emoji. */
  id: Nullable<Snowflake>;
  /** Whether the emoji is managed. */
  managed?: boolean;
  /**
   * The name of the emoji.
   * @remarks This may be `null` for reaction emoji objects.
   */
  name: Nullable<string>;
  /** Whether the emoji must be wrapped in colons. */
  require_colons?: boolean;
  /** The list of role ids that can use the emoji. */
  roles?: Snowflake[];
  /** The user who created the emoji. */
  user?: APIUser;
}

/**
 * Represents a Discord partial emoji structure.
 * @remarks
 * - This is not documented in the Discord API documentation.
 * - Commontly used in components and polls.
 */
export interface APIPartialEmoji extends Partial<Pick<APIEmoji, "animated" | "id" | "name">> {}
