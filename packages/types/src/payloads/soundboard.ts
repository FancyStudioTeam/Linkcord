import type { Nullable, Snowflake } from "#shared";
import type { APIUser } from "./user.js";

/**
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-soundboard-sound-structure
 */
export interface APISoundboardSound {
  /**
   * @remarks
   * - This field may be `false` if the guild at which the soundboard sound
   *   belongs lost Server Boosts.
   */
  available: boolean;
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
  guild_id?: Snowflake;
  name: string;
  sound_id: Snowflake;
  user?: APIUser;
  /**
   * @remarks
   * - This field is a double value between `0` and `1`. Example: `0.75`.
   */
  volume: number;
}
