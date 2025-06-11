import type { APIDefaultSoundboardSound, APIGuildSoundboardSound } from "../payloads/soundboard.js";
import type { AudioDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
 */
export interface RESTGetGuildSoundboardSounds {
  items: APIGuildSoundboardSound[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound-json-params
 */
export interface RESTPatchGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name?: string;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface RESTPostChannelSoundboardSoundJSONParams {
  sound_id: Snowflake;
  source_guild_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export interface RESTPostGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name: string;
  sound: AudioDataUri;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteGuildSoundboardSound = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
 */
export type RESTGetDefaultSoundboardSounds = APIDefaultSoundboardSound[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
 */
export type RESTGetGuildSoundboardSound = APIGuildSoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTPatchGuildSoundboardSound = APIGuildSoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export type RESTPostChannelSoundboardSound = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTPostGuildSoundboardSound = APIGuildSoundboardSound;
