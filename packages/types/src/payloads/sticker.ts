import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
 */
export interface APISticker {
  /**
   * @remarks
   * - This field value may be `false` if the guild at which the sticker belongs
   *   lost Server Boosts which increase the sticker limit.
   */
  available?: boolean;
  description: string | null;
  format_type: StickerFormatTypes;
  guild_id?: Snowflake;
  id: Snowflake;
  name: string;
  pack_id?: Snowflake;
  sort_value?: number;
  /**
   * @remarks
   * - This field is a comma separated list of keywords for standard stickers.
   * - The Discord client will use a generated name from an emoji as the value
   *   for this field when creating or modifying a guild sticker.
   */
  tags: string;
  type: StickerTypes;
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
 */
export interface APIStickerItem {
  format_type: StickerFormatTypes;
  id: Snowflake;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
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
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
export enum StickerFormatTypes {
  APng = 2,
  Gif = 4,
  Lottie = 3,
  Png = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export enum StickerTypes {
  Guild = 2,
  Standard = 1,
}
