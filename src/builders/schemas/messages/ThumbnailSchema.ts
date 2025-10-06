import { boolean, instanceof as instanceof_, literal, object, string, union } from "zod";
import { ThumbnailBuilder } from "#builders/structures/messages/ThumbnailBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { IDSchema, UnfurledMediaItemSchema } from "../Shared.js";

const MAXIMUM_THUMBNAIL_DESCRIPTION_LENGTH = 1024;

export const ThumbnailDescriptionSchema = string().min(1).max(MAXIMUM_THUMBNAIL_DESCRIPTION_LENGTH);
export const ThumbnailIDSchema = IDSchema;
export const ThumbnailMediaSchema = UnfurledMediaItemSchema;
export const ThumbnailSpoilerSchema = boolean();
export const ThumbnailTypeSchema = literal(ComponentTypes.Thumbnail);

export const ThumbnailInstanceSchema = instanceof_(ThumbnailBuilder).transform((builder) => builder.toJSON());
export const ThumbnailObjectSchema = object({
	description: ThumbnailDescriptionSchema.optional(),
	id: ThumbnailIDSchema.optional(),
	media: ThumbnailMediaSchema,
	spoiler: ThumbnailSpoilerSchema.optional(),
	type: ThumbnailTypeSchema,
});

export const ThumbnailSchema = union([ThumbnailInstanceSchema, ThumbnailObjectSchema]);
