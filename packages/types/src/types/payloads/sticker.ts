import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
 */
export interface APISticker {
  available?: boolean;
  description: Nullable<string>;
  format_type: StickerFormatTypes;
  guild_id?: Snowflake;
  id: Snowflake;
  name: string;
  pack_id?: Snowflake;
  sort_value?: number;
  tags: string;
  type: StickerTypes;
  user?: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
 */
export interface APIStickerItem {
  format_type: StickerFormatTypes;
  id: Snowflake;
  name: string;
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
 */
export interface APIStickerPack {
  banner_asset_id?: string;
  cover_sticker_id?: Snowflake;
  description: string;
  id: Snowflake;
  name: string;
  sku_id: Snowflake;
  stickers: APISticker[];
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
export enum StickerFormatTypes {
  APng = 2,
  Gif = 4,
  Lottie = 3,
  Png = 1,
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export enum StickerTypes {
  Guild = 2,
  Standard = 1,
}
