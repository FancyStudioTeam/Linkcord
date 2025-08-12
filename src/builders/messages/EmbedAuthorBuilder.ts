import { parse } from "valibot";
import {
	EmbedAuthorIconURLSchema,
	EmbedAuthorNameSchema,
	EmbedAuthorSchema,
	EmbedAuthorURLSchema,
} from "#builders/schemas/messages/EmbedAuthorSchema.js";
import type { EmbedAuthor } from "#types/index.js";

/**
 * An utility class for building embed authors.
 * @group Builders/Messages
 * @public
 */
export class EmbedAuthorBuilder {
	/** The object containing the data of the embed author. */
	readonly data: Partial<EmbedAuthor> = {};

	/**
	 * Sets the icon URL of the embed author.
	 * @param iconURL - The icon URL of the embed author.
	 */
	setIconURL(iconURL: AllowedEmbedAuthorIconURL): this {
		this.data.iconURL = parse(EmbedAuthorIconURLSchema, iconURL);

		return this;
	}

	/**
	 * Sets the name of the embed author.
	 * @param name - The name of the embed author.
	 */
	setName(name: string): this {
		this.data.name = parse(EmbedAuthorNameSchema, name);

		return this;
	}

	/**
	 * Sets the URL of the embed author.
	 * @param url - The URL of the embed author.
	 */
	setURL(url: AllowedEmbedAuthorURL): this {
		this.data.url = parse(EmbedAuthorURLSchema, url);

		return this;
	}

	/**
	 * Converts the {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance
	 * into an {@link EmbedAuthor | `EmbedAuthor`} object.
	 * @returns The {@link EmbedAuthor | `EmbedAuthor`} object.
	 */
	toJSON(): EmbedAuthor {
		const { data } = this;
		const validatedData = parse(EmbedAuthorSchema, data);

		return validatedData;
	}
}

/**
 * Represents an icon URL that can be set to an embed author builder.
 * @public
 */
export type AllowedEmbedAuthorIconURL = URL | string;

/**
 * Represents a URL that can be set to an embed author builder.
 * @public
 */
export type AllowedEmbedAuthorURL = URL | string;
