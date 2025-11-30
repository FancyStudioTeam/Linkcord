import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { StickerFormatType, StickerType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
 */
export interface APISticker {
	available?: boolean;
	description: string | null;
	format_type: StickerFormatType;
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	pack_id?: Snowflake;
	sort_value?: number;
	tags: string;
	type: StickerType;
	user?: APIUser;
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
 */
export interface APIStickerItem {
	format_type: StickerFormatType;
	id: Snowflake;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
 */
export interface APIStickerPack {
	banner_asset_id?: Snowflake;
	cover_sticker_id?: Snowflake;
	description: string;
	id: Snowflake;
	name: string;
	sku_id: Snowflake;
	stickers: APISticker[];
}
