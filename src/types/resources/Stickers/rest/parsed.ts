/**
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params
 */
export interface CreateGuildStickerOptions {
	description: string;
	file: unknown;
	name: string;
	tags: string;
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export interface EditGuildStickerOptions {
	description?: string | null;
	name?: string;
	tags?: string;
}
