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

export class EmbedAuthorBuilder extends BaseBuilder<EmbedAuthor> {
	setIconURL(iconURL: AllowedEmbedAuthorIconURL): this {
		this.data.iconURL = validate(EmbedAuthorIconURLSchema, iconURL);

		return this;
	}

	setName(name: string): this {
		this.data.name = validate(EmbedAuthorNameSchema, name);

		return this;
	}

	setURL(url: AllowedEmbedAuthorURL): this {
		this.data.url = validate(EmbedAuthorURLSchema, url);

		return this;
	}

	toJSON(): EmbedAuthor {
		const { data } = this;
		const validatedData = validate(EmbedAuthorObjectSchema, data);

		return validatedData;
	}
}
