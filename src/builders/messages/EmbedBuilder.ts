import { parse } from "valibot";
import { normalizeArray } from "#builders/functions/normalizeArray.js";
import {
	EmbedAuthorSchema,
	EmbedColorSchema,
	EmbedDescriptionSchema,
	EmbedFieldsSchema,
	EmbedFooterSchema,
	EmbedImageSchema,
	EmbedSchema,
	EmbedThumbnailSchema,
	EmbedTimestampSchema,
	EmbedTitleSchema,
	EmbedURLSchema,
} from "#builders/schemas/messages/EmbedSchema.js";
import type { RestOrArray } from "#builders/types/Common.js";
import type { Embed, EmbedAuthor, EmbedField, EmbedFooter } from "#types/index.js";
import type { EmbedAuthorBuilder } from "./EmbedAuthorBuilder.js";
import type { EmbedFieldBuilder } from "./EmbedFieldBuilder.js";
import type { EmbedFooterBuilder } from "./EmbedFooterBuilder.js";

/**
 * An utility class for building embeds.
 * @group Builders/Messages
 * @public
 */
export class EmbedBuilder {
	/** The object containing the data of the embed. */
	private readonly __data__: Partial<Embed> = {};

	/**
	 * Adds fields to the embed.
	 * @param fields - The fields of the embed to add.
	 */
	addFields(...fields: RestOrArray<AllowedEmbedField>): this {
		const normalizedFields = normalizeArray(...fields);
		const validatedFields = parse(EmbedFieldsSchema, normalizedFields) ?? [];

		this.__data__.fields ??= [];
		this.__data__.fields.push(...validatedFields);

		return this;
	}

	/**
	 * Sets the author of the embed.
	 * @param author - The author of the embed.
	 */
	setAuthor(author: AllowedEmbedAuthor): this {
		this.__data__.author = parse(EmbedAuthorSchema, author);

		return this;
	}

	/**
	 * Sets the color of the embed.
	 * @param color - The color of the embed.
	 */
	setColor(color: AllowedEmbedColor): this {
		this.__data__.color = parse(EmbedColorSchema, color);

		return this;
	}

	/**
	 * Sets the description of the embed.
	 * @param description - The description of the embed.
	 */
	setDescription(description: string): this {
		this.__data__.description = parse(EmbedDescriptionSchema, description);

		return this;
	}

	/**
	 * Sets the footer of the embed.
	 * @param footer - The footer of the embed.
	 */
	setFooter(footer: AllowedEmbedFooter): this {
		this.__data__.footer = parse(EmbedFooterSchema, footer);

		return this;
	}

	/**
	 * Sets the image of the embed.
	 * @param imageURL - The URL of the image of the embed.
	 */
	setImage(imageURL: AllowedEmbedImageURL): this {
		this.__data__.image = parse(EmbedImageSchema, imageURL);

		return this;
	}

	/**
	 * Sets the thumbnail of the embed.
	 * @param thumbnailURL - The URL of the thumbnail of the embed.
	 */
	setThumbnail(thumbnailURL: AllowedEmbedThumbnailURL): this {
		this.__data__.thumbnail = parse(EmbedThumbnailSchema, thumbnailURL);

		return this;
	}

	/**
	 * Sets the timestamp of the embed.
	 * @param timestamp - The timestamp of the embed.
	 */
	setTimestamp(timestamp: AllowedEmbedTimestamp = new Date().toISOString()): this {
		this.__data__.timestamp = parse(EmbedTimestampSchema, timestamp);

		return this;
	}

	/**
	 * Sets the title of the embed.
	 * @param title - The title of the embed.
	 */
	setTitle(title: string): this {
		this.__data__.title = parse(EmbedTitleSchema, title);

		return this;
	}

	/**
	 * Sets the URL of the embed.
	 * @param url - The URL of the embed.
	 */
	setURL(url: AllowedEmbedURL): this {
		this.__data__.url = parse(EmbedURLSchema, url);

		return this;
	}

	/**
	 * Converts the {@link EmbedBuilder | `EmbedBuilder`} instance into a
	 * {@link Embed | `Embed`} object.
	 * @returns The {@link Embed | `Embed`} object.
	 */
	toJSON(): Embed {
		const { __data__: data } = this;
		const validatedData = parse(EmbedSchema, data);

		return validatedData;
	}
}

/**
 * Represents an author that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedAuthor = EmbedAuthorBuilder | EmbedAuthor;

/**
 * Represents a color that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedColor = number | string;

/**
 * Represents a field that can be added or set to an embed builder.
 * @public
 */
export type AllowedEmbedField = EmbedFieldBuilder | EmbedField;

/**
 * Represents a footer that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedFooter = EmbedFooterBuilder | EmbedFooter;

/**
 * Represents an image URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedImageURL = URL | string;

/**
 * Represents a thumbnail URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedThumbnailURL = URL | string;

/**
 * Represents a timestamp that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedTimestamp = Date | string;

/**
 * Represents a URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedURL = URL | string;
