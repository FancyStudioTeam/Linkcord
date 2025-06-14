import type { APISticker, APIStickerPack } from "../payloads/sticker.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#list-sticker-packs
 */
export interface RESTGetStickerPacks {
  sticker_packs: APIStickerPack[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export interface RESTPatchGuildStickerJSONParams {
  description?: string | null;
  name?: string;
  tags?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params
 */
export interface RESTPostGuildStickerFormParams {
  description: string;
  file: unknown;
  name: string;
  tags: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#delete-guild-sticker
 */
export type RESTDeleteGuildSticker = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#get-guild-sticker
 */
export type RESTGetGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#list-guild-stickers
 */
export type RESTGetGuildStickers = APISticker[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#get-sticker
 */
export type RESTGetSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#get-sticker-pack
 */
export type RESTGetStickerPack = APIStickerPack;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export type RESTPatchGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker
 */
export type RESTPostGuildSticker = APISticker;
