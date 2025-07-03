import type { APISticker, APIStickerPack } from "../payloads/Stickers.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#list-sticker-packs
 */
export interface RESTGetStickerPacks {
	sticker_packs: APIStickerPack[];
}

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
