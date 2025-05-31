import type { APISoundboardSound } from "../payloads/soundboard.js";
import type { AudioDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export interface RESTCreateGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name: string;
  sound: AudioDataUri;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
 */
export interface RESTListGuildSoundboardSounds {
  items: APISoundboardSound[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound-json-params
 */
export interface RESTModifyGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name?: string;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface RESTSendSoundboardSoundJSONParams {
  sound_id: Snowflake;
  /**
   * @remarks
   * - This field is required to play sounds from different guilds.
   */
  source_guild_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTCreateGuildSoundboardSound = APISoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteGuildSoundboardSound = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
 */
export type RESTGetGuildSoundboardSound = APISoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
 */
export type RESTListDefaultSoundboardSounds = APISoundboardSound[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTModifyGuildSoundboardSound = APISoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export type RESTSendSoundboardSound = undefined;
