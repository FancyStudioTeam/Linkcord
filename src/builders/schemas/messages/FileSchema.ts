import { boolean, instanceof as instanceof_, literal, number, object, union, url } from "zod";
import { FileBuilder } from "#builders/structures/messages/FileBuilder.js";
import { ComponentTypes } from "#types/index.js";

export const FileSpoilerSchema = boolean();
export const FileIDSchema = number().int();
export const FileTypeSchema = literal(ComponentTypes.File);

export const FileURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const FileURLStringSchema = url();
export const FileURLSchema = union([FileURLInstanceSchema, FileURLStringSchema]).transform((url) => ({
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
