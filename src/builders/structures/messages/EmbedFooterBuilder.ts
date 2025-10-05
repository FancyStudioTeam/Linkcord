import {
	EmbedFooterIconURLSchema,
	EmbedFooterObjectSchema,
	EmbedFooterTextSchema,
} from "#builders/schemas/messages/EmbedFooterSchema.js";
import type { AllowedEmbedFooterIconURL } from "#builders/types/index.js";
import type { EmbedFooter } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link EmbedFooter | `EmbedFooter`} objects.
 * @group Builders/Structures
 */
export class EmbedFooterBuilder extends BaseBuilder<EmbedFooter> {
	/**
	 * Sets the text of the embed footer.
	 * @param text - The text of the embed footer.
	 */
	setText(text: string): this {
		this.data.text = validate(EmbedFooterTextSchema, text);

		return this;
	}

	/**
	 * Sets the icon URL of the embed footer.
	 * @param iconURL - The icon URL of the embed footer.
	 */
	setIconURL(iconURL: AllowedEmbedFooterIconURL): this {
		this.data.iconURL = validate(EmbedFooterIconURLSchema, iconURL);

		return this;
	}

	/**
	 * Converts the {@link EmbedFooterBuilder | `EmbedFooterBuilder`} instance into an {@link EmbedFooter | `EmbedFooter`} object.
	 * @returns The converted {@link EmbedFooter | `EmbedFooter`} object.
	 */
	toJSON(): EmbedFooter {
		const { data } = this;
		const validatedData = validate(EmbedFooterObjectSchema, data);

		return validatedData;
	}
}
