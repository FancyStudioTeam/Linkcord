import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * Represents a Discord soundboard sound structure.
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-soundboard-sound-structure
 */
export interface APISoundboardSound {
  /**
   * Whether the sounboard sound can be used.
   * @remarks This may be `false` due to the loss of Server Boosts.
   */
  available: boolean;
  /** The id of the custom emoji of the soundboard sound. */
  emoji_id: Nullable<Snowflake>;
  /** The unicode character of the soundboard sound. */
  emoji_name: Nullable<string>;
  /** The id of the guild where the soundboard sound was created. */
  guild_id?: Snowflake;
  /** The name of the soundboard sound. */
  name: string;
  /** The id of the soundboard sound. */
  sound_id: Snowflake;
  /** The user who created the soundboard sound. */
  user?: APIUser;
  /**
   * The volume of the soundboard sound.
   * @remarks This is a double value from 0 to 1.
   */
  volume: number;
}
