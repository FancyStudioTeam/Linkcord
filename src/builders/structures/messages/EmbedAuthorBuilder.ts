import { parse } from "valibot";
import {
	EmbedAuthorIconURLSchema,
	EmbedAuthorNameSchema,
	EmbedAuthorSchema,
	EmbedAuthorURLSchema,
} from "#builders/schemas/messages/EmbedAuthorSchema.js";
import { EmbedAuthorSchema as AllowedEmbedAuthorSchema } from "#builders/schemas/messages/EmbedSchema.js";
import type {
	AllowedEmbedAuthor,
	AllowedEmbedAuthorIconURL,
	AllowedEmbedAuthorURL,
} from "#builders/types/index.js";
import type { EmbedAuthor } from "#types/index.js";

/** Utility class for building {@link EmbedAuthor | `EmbedAuthor`} objects. */
export class EmbedAuthorBuilder {
	/** The object containing the data of the embed author. */
	#data: Partial<EmbedAuthor> = {};

	/**
	 * Loads the data from an {@link EmbedAuthor | `EmbedAuthor`} object or an {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance.
	 * @param embedAuthor - The {@link EmbedAuthor | `EmbedAuthor`} object or an {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance.
	 */
	from(embedAuthor: AllowedEmbedAuthor): this {
		this.#data = parse(AllowedEmbedAuthorSchema, embedAuthor);

		return this;
	}

	/**
	 * Sets the icon URL of the embed author.
	 * @param iconURL - The icon URL of the embed author.
	 */
	setIconURL(iconURL: AllowedEmbedAuthorIconURL): this {
		this.#data.iconURL = parse(EmbedAuthorIconURLSchema, iconURL);

		return this;
	}

	/**
	 * Sets the name of the embed author.
	 * @param name - The name of the embed author.
	 */
	setName(name: string): this {
		this.#data.name = parse(EmbedAuthorNameSchema, name);

		return this;
	}

	/**
	 * Sets the URL of the embed author.
	 * @param url - The URL of the embed author.
	 */
	setURL(url: AllowedEmbedAuthorURL): this {
		this.#data.url = parse(EmbedAuthorURLSchema, url);

		return this;
	}

	/**
	 * Converts the {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance into an {@link EmbedAuthor | `EmbedAuthor`} object.
	 * @returns The {@link EmbedAuthor | `EmbedAuthor`} object.
	 */
	toJSON(): EmbedAuthor {
		const data = this.#data;
		const validatedData = parse(EmbedAuthorSchema, data);

		return validatedData;
	}
}
