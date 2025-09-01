import { parse } from "valibot";
import { normalizeArray } from "#builders/functions/normalizeArray.js";
import { EmbedFieldSchema } from "#builders/schemas/messages/EmbedFieldSchema.js";
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
import type {
	AllowedEmbedAuthor,
	AllowedEmbedColor,
	AllowedEmbedField,
	AllowedEmbedFooter,
	AllowedEmbedImageURL,
	AllowedEmbedThumbnailURL,
	AllowedEmbedTimestamp,
	AllowedEmbedURL,
} from "#builders/types/index.js";
import type { Embed } from "#types/index.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link Embed | `Embed`} objects. */
export class EmbedBuilder extends BaseBuilder<Embed> {
	/**
	 * Adds a field to the embed.
	 * @param field - The field of the embed to add.
	 */
	addField(field: AllowedEmbedField): this {
		const validatedField = parse(EmbedFieldSchema, field);

		this.data.fields ??= [];
		this.data.fields.push(validatedField);

		return this;
	}

	/**
	 * Adds fields to the embed.
	 * @param fields - The fields of the embed to add.
	 */
	addFields(...fields: RestOrArray<AllowedEmbedField>): this {
		const normalizedFields = normalizeArray(...fields);

		for (const field of normalizedFields) {
			this.addField(field);
		}

		return this;
	}

	/**
	 * Sets the author of the embed.
	 * @param author - The author of the embed.
	 */
	setAuthor(author: AllowedEmbedAuthor): this {
		this.data.author = parse(EmbedAuthorSchema, author);

		return this;
	}

	/**
	 * Sets the color of the embed.
	 * @param color - The color of the embed.
	 */
	setColor(color: AllowedEmbedColor): this {
		this.data.color = parse(EmbedColorSchema, color);

		return this;
	}

	/**
	 * Sets the description of the embed.
	 * @param description - The description of the embed.
	 */
	setDescription(description: string): this {
		this.data.description = parse(EmbedDescriptionSchema, description);

		return this;
	}

	/**
	 * Sets the fields of the embed.
	 * @param fields - The fields of the embed.
	 */
	setFields(...fields: RestOrArray<AllowedEmbedField>): this {
		const normalizedFields = normalizeArray(...fields);
		const validatedFields = parse(EmbedFieldsSchema, normalizedFields);

		this.data.fields = validatedFields;

		return this;
	}

	/**
	 * Sets the footer of the embed.
	 * @param footer - The footer of the embed.
	 */
	setFooter(footer: AllowedEmbedFooter): this {
		this.data.footer = parse(EmbedFooterSchema, footer);

		return this;
	}

	/**
	 * Sets the image of the embed.
	 * @param imageURL - The URL of the image of the embed.
	 */
	setImage(imageURL: AllowedEmbedImageURL): this {
		this.data.image = parse(EmbedImageSchema, imageURL);

		return this;
	}

	/**
	 * Sets the thumbnail of the embed.
	 * @param thumbnailURL - The URL of the thumbnail of the embed.
	 */
	setThumbnail(thumbnailURL: AllowedEmbedThumbnailURL): this {
		this.data.thumbnail = parse(EmbedThumbnailSchema, thumbnailURL);

		return this;
	}

	/**
	 * Sets the timestamp of the embed.
	 * @param timestamp - The timestamp of the embed.
	 */
	setTimestamp(timestamp: AllowedEmbedTimestamp = new Date().toISOString()): this {
		this.data.timestamp = parse(EmbedTimestampSchema, timestamp);

		return this;
	}

	/**
	 * Sets the title of the embed.
	 * @param title - The title of the embed.
	 */
	setTitle(title: string): this {
		this.data.title = parse(EmbedTitleSchema, title);

		return this;
	}

	/**
	 * Sets the URL of the embed.
	 * @param url - The URL of the embed.
	 */
	setURL(url: AllowedEmbedURL): this {
		this.data.url = parse(EmbedURLSchema, url);

		return this;
	}

	/**
	 * Converts the {@link EmbedBuilder | `EmbedBuilder`} instance into a {@link Embed | `Embed`} object.
	 * @returns The {@link Embed | `Embed`} object.
	 */
	toJSON(): Embed {
		const { data } = this;
		const validatedData = parse(EmbedSchema, data);

		return validatedData;
	}
}
