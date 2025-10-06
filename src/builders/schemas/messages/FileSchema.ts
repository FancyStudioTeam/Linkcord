import { boolean, instanceof as instanceof_, literal, object, union } from "zod";
import { FileBuilder } from "#builders/structures/messages/FileBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { IDSchema, URLSchema } from "../Shared.js";

export const FileSpoilerSchema = boolean();
export const FileIDSchema = IDSchema;
export const FileTypeSchema = literal(ComponentTypes.File);
export const FileURLSchema = URLSchema.transform((url) => ({
	url,
}));

export const FileInstanceSchema = instanceof_(FileBuilder).transform((builder) => builder.toJSON());
export const FileObjectSchema = object({
	file: FileURLSchema,
	id: FileIDSchema.optional(),
	spoiler: FileSpoilerSchema.optional(),
	type: FileTypeSchema,
});

export const FileSchema = union([FileInstanceSchema, FileObjectSchema]);
