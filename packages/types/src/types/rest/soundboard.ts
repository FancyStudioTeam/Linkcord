import type { APISoundboardSound } from "#types/payloads";
import type { AudioData, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound-json-params
 */
export interface RESTCreateGuildSoundboardSoundJSONParams {
  emoji_id?: Nullable<string>;
  emoji_name?: Nullable<string>;
  name: string;
  sound: AudioData;
  volume?: Nullable<number>;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
 */
export interface RESTListGuildSoundboardSounds {
  items: APISoundboardSound[];
}

/**
 * https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound-json-params
 */
export interface RESTModifyGuildSoundboardSoundJSONParams
  extends Partial<Pick<RESTCreateGuildSoundboardSoundJSONParams, "emoji_id" | "emoji_name" | "name" | "volume">> {
  name?: string;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface RESTSendSoundboardSoundJSONParams {
  sound_id: Snowflake;
  source_guild_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTCreateGuildSoundboardSound = APISoundboardSound;

/**
 * https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteGuildSoundboardSound = undefined;

/**
 * https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
 */
export type RESTListDefaultSoundboardSounds = APISoundboardSound[];

/**
 * https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTModifyGuildSoundboardSound = APISoundboardSound;

/**
 * https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export type RESTSendSoundboardSound = undefined;
