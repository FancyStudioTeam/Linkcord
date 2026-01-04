/**
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params
 */
export interface RawCreateGuildStickerOptions {
	description: string;
	file: unknown;
	name: string;
	tags: string;
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export interface RawEditGuildStickerOptions {
	description?: string | null;
	name?: string;
	tags?: string;
}
