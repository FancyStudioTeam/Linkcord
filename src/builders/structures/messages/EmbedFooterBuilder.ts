import {
	EmbedFooterIconURLSchema,
	EmbedFooterObjectSchema,
	EmbedFooterTextSchema,
} from "#builders/schemas/messages/EmbedFooterSchema.js";
import type { AllowedEmbedFooterIconURL } from "#builders/types/index.js";
import type { EmbedFooter } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

export class EmbedFooterBuilder extends BaseBuilder<EmbedFooter> {
	setText(text: string): this {
		this.data.text = validate(EmbedFooterTextSchema, text);

		return this;
	}

	setIconURL(iconURL: AllowedEmbedFooterIconURL): this {
		this.data.iconURL = validate(EmbedFooterIconURLSchema, iconURL);

		return this;
	}

	toJSON(): EmbedFooter {
		const { data } = this;
		const validatedData = validate(EmbedFooterObjectSchema, data);

		return validatedData;
	}
}
