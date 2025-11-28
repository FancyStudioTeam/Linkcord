import {
	EmbedFooterIconUrlSchema,
	EmbedFooterObjectSchema,
	EmbedFooterTextSchema,
} from "#builders/schemas/messages/EmbedFooterSchema.js";
import type { AllowedEmbedFooterIconUrl } from "#builders/types/index.js";
import type { EmbedFooter } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

export class EmbedFooterBuilder extends BaseBuilder<EmbedFooter> {
	setText(text: string): this {
		this.data.text = validate(EmbedFooterTextSchema, text);

		return this;
	}

	setIconUrl(iconUrl: AllowedEmbedFooterIconUrl): this {
		this.data.iconURL = validate(EmbedFooterIconUrlSchema, iconUrl);

		return this;
	}

	toJSON(): EmbedFooter {
		const { data } = this;
		const validatedData = validate(EmbedFooterObjectSchema, data);

		return validatedData;
	}
}
