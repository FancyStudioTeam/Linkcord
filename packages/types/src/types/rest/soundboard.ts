import type { APISoundboardSound } from "#types/payloads";
import type { Nullable } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound-json-params
 */
export interface RESTCreateGuildSoundboardSoundJSONParams {
  emoji_id?: Nullable<string>;
  emoji_name?: Nullable<string>;
  name: string;
  sound: string;
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
export interface RESTModifyGuildSoundboardSoundJSONParams {
  emoji_id?: Nullable<string>;
  emoji_name?: Nullable<string>;
  name: string;
  volume: Nullable<number>;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface RESTSendSoundboardSoundJSONParams {
  channel_id: string;
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
