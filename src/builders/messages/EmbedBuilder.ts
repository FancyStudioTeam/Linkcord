import type { Embed, EmbedAuthor, EmbedField, EmbedFooter } from "#types/index.js";
import { EmbedFieldBuilder } from "./EmbedFieldBuilder.js";

/**
 * Utility class for building embeds.
 *
 * @public
 */
export class EmbedBuilder {
	readonly data: Partial<Embed> = {};

	/**
	 * Adds fields to the embed.
	 *
	 * @param fields - The fields of the embed to add.
	 */
	addFields(fields: AnyEmbedField[]): this {
		this.data.fields ??= [];

		const transformedEmbedFields = fields.map((field) =>
			field instanceof EmbedFieldBuilder ? field.toJSON() : field,
		);

		this.data.fields.push(...transformedEmbedFields);

		return this;
	}

	/**
	 * Sets the author of the embed.
	 *
	 * @param author - The author object of the embed.
	 */
	setAuthor(author: EmbedAuthor): this {
		this.data.author = author;

		return this;
	}

	/**
	 * Sets the color of the embed.
	 *
	 * @param color - The color of the embed.
	 */
	setColor(color: number): this {
		this.data.color = color;

		return this;
	}

	/**
	 * Sets the description of the embed.
	 *
	 * @param description - The description of the embed.
	 */
	setDescription(description: string): this {
		this.data.description = description;

		return this;
	}

	/**
	 * Sets the footer of the embed.
	 *
	 * @param footer - The footer object of the embed.
	 */
	setFooter(footer: EmbedFooter): this {
		this.data.footer = footer;

		return this;
	}

	/**
	 * Sets the image of the embed.
	 *
	 * @param imageURL - The URL of the image of the embed.
	 */
	setImage(imageURL: string): this {
		this.data.image = {
			url: imageURL,
		};

		return this;
	}

	/**
	 * Sets the thumbnail of the embed.
	 *
	 * @param thumbnailURL - The URL of the thumbnail of the embed.
	 */
	setThumbnail(thumbnailURL: string): this {
		this.data.thumbnail = {
			url: thumbnailURL,
		};

		return this;
	}

	/**
	 * Sets the timestamp of the embed.
	 *
	 * @param timestamp - The timestamp of the embed.
	 */
	setTimestamp(timestamp?: Date | string): this {
		if (!timestamp) {
			this.data.timestamp = new Date().toISOString();
		} else if (typeof timestamp === "string") {
			this.data.timestamp = String(Date.parse(timestamp));
		} else {
			this.data.timestamp = timestamp.toISOString();
		}

		return this;
	}

	/**
	 * Sets the title of the embed.
	 *
	 * @param title - The title of the embed.
	 */
	setTitle(title: string): this {
		this.data.title = title;

		return this;
	}

	/**
	 * Sets the URL of the embed.
	 *
	 * @param url - The URL of the embed.
	 */
	setURL(url: string): this {
		this.data.url = url;

		return this;
	}

	/**
	 * Converts the {@link EmbedBuilder | `EmbedBuilder`} to a JSON object.
	 *
	 * @returns The {@link Embed | `Embed`} object.
	 */
	toJSON(): Embed {
		const { data } = this;

		return data;
	}
}

/**
 * @public
 */
export type AnyEmbedField = EmbedFieldBuilder | EmbedField;
