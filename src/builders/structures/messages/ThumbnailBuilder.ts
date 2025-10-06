import {
	ThumbnailDescriptionSchema,
	ThumbnailMediaSchema,
	ThumbnailObjectSchema,
	ThumbnailSpoilerSchema,
} from "#builders/schemas/messages/ThumbnailSchema.js";
import type { AllowedThumbnailMediaURL } from "#builders/types/index.js";
import { ComponentTypes, type ThumbnailComponent } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link ThumbnailComponent | `ThumbnailComponent`} objects.
 * @group Builders/Structures
 */
export class ThumbnailBuilder extends BaseBuilder<ThumbnailComponent> {
	/**
	 * Sets the description of the thumbnail.
	 * @param description - The description of the thumbnail.
	 */
	setDescription(description: string): this {
		this.data.description = validate(ThumbnailDescriptionSchema, description);

		return this;
	}

	/**
	 * Sets the media URL of the thumbnail.
	 * @param media - The media URL of the thumbnail.
	 */
	setMediaURL(mediaURL: AllowedThumbnailMediaURL): this {
		this.data.media = validate(ThumbnailMediaSchema, mediaURL);

		return this;
	}

	/**
	 * Sets whether the thumbnail is a spoiler.
	 * @param spoiler - Whether the thumbnail is a spoiler.
	 */
	setSpoiler(spoiler: boolean = true): this {
		this.data.spoiler = validate(ThumbnailSpoilerSchema, spoiler);

		return this;
	}

	/**
	 * Converts the {@link ThumbnailBuilder | `ThumbnailBuilder`} instance into a {@link ThumbnailBuilder | `ThumbnailBuilder`} object.
	 * @returns The converted {@link ThumbnailComponent | `ThumbnailComponent`} object.
	 */
	toJSON(): ThumbnailComponent {
		const { data } = this;
		const validatedData = validate(ThumbnailObjectSchema, {
			...data,
			type: ComponentTypes.Thumbnail,
		});

		return validatedData;
	}
}
