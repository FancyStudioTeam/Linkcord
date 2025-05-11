import type { APISticker, APIStickerPack } from "#payloads";
import type { Nullable } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params
 */
export interface RESTCreateGuildStickerFormParams {
  description: string;
  file: unknown;
  name: string;
  tags: string;
}

export interface RESTModifyGuildStickerJSONParams
  extends Partial<Omit<RESTCreateGuildStickerFormParams, "description" | "file">> {
  description?: Nullable<string>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#list-sticker-packs
 */
export interface RESTListStickerPacks {
  sticker_packs: APIStickerPack[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker
 */
export type RESTCreateGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#delete-guild-sticker
 */
export type RESTDeleteGuildSticker = undefined;

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
 * @see https://discord.com/developers/docs/resources/sticker#list-guild-stickers
 */
export type RESTListGuildStickers = APISticker[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker
 */
export type RESTModifyGuildSticker = APISticker;
