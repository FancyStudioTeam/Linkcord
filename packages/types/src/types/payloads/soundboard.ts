import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-soundboard-sound-structure
 */
export interface APISoundboard {
  available: boolean;
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
  guild_id?: Snowflake;
  name: string;
  sound_id: Snowflake;
  user?: APIUser;
  volume: number;
}
