import type { APISoundboardSound } from "#payloads";
import type { AudioDataUri, Nullable, Snowflake } from "#shared";

/**
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export interface RESTCreateGuildSoundboardSoundJSONParams {
  emoji_id?: Nullable<Snowflake>;
  emoji_name?: Nullable<string>;
  name: string;
  sound: AudioDataUri;
  volume?: Nullable<number>;
}

/**
 * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
 */
export interface RESTListGuildSoundboardSounds {
  items: APISoundboardSound[];
}

/**
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound-json-params
 */
export interface RESTModifyGuildSoundboardSoundJSONParams {
  emoji_id?: Nullable<Snowflake>;
  emoji_name?: Nullable<string>;
  name?: string;
  volume?: Nullable<number>;
}

/**
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
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTCreateGuildSoundboardSound = APISoundboardSound;

/**
 * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteGuildSoundboardSound = undefined;

/**
 * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
 */
export type RESTGetGuildSoundboardSound = APISoundboardSound;

/**
 * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
 */
export type RESTListDefaultSoundboardSounds = APISoundboardSound[];

/**
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTModifyGuildSoundboardSound = APISoundboardSound;

/**
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export type RESTSendSoundboardSound = undefined;
