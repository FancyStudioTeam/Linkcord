import {
	EmbedAuthorIconURLSchema,
	EmbedAuthorNameSchema,
	EmbedAuthorObjectSchema,
	EmbedAuthorURLSchema,
} from "#builders/schemas/messages/EmbedAuthorSchema.js";
import type { AllowedEmbedAuthorIconURL, AllowedEmbedAuthorURL } from "#builders/types/index.js";
import type { EmbedAuthor } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link EmbedAuthor | `EmbedAuthor`} objects.
 * @group Builders/Structures
 */
export class EmbedAuthorBuilder extends BaseBuilder<EmbedAuthor> {
	/**
	 * Sets the icon URL of the embed author.
	 * @param iconURL - The icon URL of the embed author.
	 */
	setIconURL(iconURL: AllowedEmbedAuthorIconURL): this {
		this.data.iconURL = validate(EmbedAuthorIconURLSchema, iconURL);

		return this;
	}

	/**
	 * Sets the name of the embed author.
	 * @param name - The name of the embed author.
	 */
	setName(name: string): this {
		this.data.name = validate(EmbedAuthorNameSchema, name);

		return this;
	}

	/**
	 * Sets the URL of the embed author.
	 * @param url - The URL of the embed author.
	 */
	setURL(url: AllowedEmbedAuthorURL): this {
		this.data.url = validate(EmbedAuthorURLSchema, url);

		return this;
	}

	/**
	 * Converts the {@link EmbedAuthorBuilder | `EmbedAuthorBuilder`} instance into an {@link EmbedAuthor | `EmbedAuthor`} object.
	 * @returns The converted {@link EmbedAuthor | `EmbedAuthor`} object.
	 */
	toJSON(): EmbedAuthor {
		const { data } = this;
		const validatedData = validate(EmbedAuthorObjectSchema, data);

		return validatedData;
	}
}
