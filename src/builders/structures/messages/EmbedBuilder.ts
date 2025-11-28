import { EmbedAuthorSchema } from "#builders/schemas/messages/EmbedAuthorSchema.js";
import { EmbedFieldSchema } from "#builders/schemas/messages/EmbedFieldSchema.js";
import { EmbedFooterSchema } from "#builders/schemas/messages/EmbedFooterSchema.js";
import {
	EmbedColorSchema,
	EmbedDescriptionSchema,
	EmbedFieldsSchema,
	EmbedImageSchema,
	EmbedSchema,
	EmbedThumbnailSchema,
	EmbedTimestampSchema,
	EmbedTitleSchema,
	EmbedURLSchema,
} from "#builders/schemas/messages/EmbedSchema.js";
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
import { normalizeArray } from "#utils/functions/normalizeArray.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

export class EmbedBuilder extends BaseBuilder<Embed> {
	addField(field: AllowedEmbedField): this {
		const validatedField = validate(EmbedFieldSchema, field);

		this.data.fields ??= [];
		this.data.fields.push(validatedField);

		return this;
	}

	addFields(...fields: AllowedEmbedField[]): this {
		const normalizedFields = normalizeArray(...fields);

		for (const field of normalizedFields) {
			this.addField(field);
		}

		return this;
	}

	setAuthor(author: AllowedEmbedAuthor): this {
		this.data.author = validate(EmbedAuthorSchema, author);

		return this;
	}

	setColor(color: AllowedEmbedColor): this {
		this.data.color = validate(EmbedColorSchema, color);

		return this;
	}

	setDescription(description: string): this {
		this.data.description = validate(EmbedDescriptionSchema, description);

		return this;
	}

	setFields(...fields: AllowedEmbedField[]): this {
		const normalizedFields = normalizeArray(...fields);
		const validatedFields = validate(EmbedFieldsSchema, normalizedFields);

		this.data.fields = validatedFields;

		return this;
	}

	setFooter(footer: AllowedEmbedFooter): this {
		this.data.footer = validate(EmbedFooterSchema, footer);

		return this;
	}

	setImage(imageURL: AllowedEmbedImageURL): this {
		this.data.image = validate(EmbedImageSchema, imageURL);

		return this;
	}

	setThumbnail(thumbnailURL: AllowedEmbedThumbnailURL): this {
		this.data.thumbnail = validate(EmbedThumbnailSchema, thumbnailURL);

		return this;
	}

	setTimestamp(timestamp: AllowedEmbedTimestamp = new Date().toISOString()): this {
		this.data.timestamp = validate(EmbedTimestampSchema, timestamp);

		return this;
	}

	setTitle(title: string): this {
		this.data.title = validate(EmbedTitleSchema, title);

		return this;
	}

	setURL(url: AllowedEmbedURL): this {
		this.data.url = validate(EmbedURLSchema, url);

		return this;
	}

	toJSON(): Embed {
		const { data } = this;
		const validatedData = validate(EmbedSchema, data);

		return validatedData;
	}
}
