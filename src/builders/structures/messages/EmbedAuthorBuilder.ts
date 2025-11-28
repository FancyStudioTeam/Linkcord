import {
	EmbedAuthorIconUrlSchema,
	EmbedAuthorNameSchema,
	EmbedAuthorObjectSchema,
	EmbedAuthorUrlSchema,
} from "#builders/schemas/messages/EmbedAuthorSchema.js";
import type { AllowedEmbedAuthorIconUrl, AllowedEmbedAuthorUrl } from "#builders/types/index.js";
import type { EmbedAuthor } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

export class EmbedAuthorBuilder extends BaseBuilder<EmbedAuthor> {
	setIconUrl(iconUrl: AllowedEmbedAuthorIconUrl): this {
		this.data.iconURL = validate(EmbedAuthorIconUrlSchema, iconUrl);

		return this;
	}

	setName(name: string): this {
		this.data.name = validate(EmbedAuthorNameSchema, name);

		return this;
	}

	setUrl(url: AllowedEmbedAuthorUrl): this {
		this.data.url = validate(EmbedAuthorUrlSchema, url);

		return this;
	}

	toJSON(): EmbedAuthor {
		const { data } = this;
		const validatedData = validate(EmbedAuthorObjectSchema, data);

		return validatedData;
	}
}
