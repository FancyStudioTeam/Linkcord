import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-example-default-soundboard-sound
 */
export interface APIDefaultSoundboardSound {
  /**
   * @remarks
   * - This field may be `false` if the guild at which the soundboard sound
   *   belongs lost Server Boosts which increase the soundboard sound limit.
   */
  available: boolean;
  emoji_id: Snowflake | null;
  emoji_name: string | null;
  name: string;
  sound_id: string;
  /**
   * @remarks
   * - This field is a double value between `0` and `1`. Example: `0.75`.
   */
  volume: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-example-guild-soundboard-sound
 */
export interface APIGuildSoundboardSound extends Omit<APIDefaultSoundboardSound, "sound_id"> {
  guild_id: Snowflake;
  sound_id: Snowflake;
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-soundboard-sound-structure
 */
export type APISoundboardSound = APIDefaultSoundboardSound | APIGuildSoundboardSound;
