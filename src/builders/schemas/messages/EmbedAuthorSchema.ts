import {
	instance,
	maxLength,
	minLength,
	object,
	optional,
	pipe,
	string,
	transform,
	union,
	url,
} from "valibot";

const MAXIMUM_EMBED_AUTHOR_NAME_LENGTH = 256;

export const EmbedAuthorIconURLInstanceSchema = pipe(
	instance(URL),
	transform((value) => value.toString()),
);
export const EmbedAuthorIconURLStringSchema = pipe(string(), url());
export const EmbedAuthorIconURLSchema = union([
	EmbedAuthorIconURLInstanceSchema,
	EmbedAuthorIconURLStringSchema,
]);

export const EmbedAuthorNameSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_EMBED_AUTHOR_NAME_LENGTH),
);

export const EmbedAuthorURLInstanceSchema = pipe(
	instance(URL),
	transform((value) => value.toString()),
);
export const EmbedAuthorURLStringSchema = pipe(string(), url());
export const EmbedAuthorURLSchema = union([
	EmbedAuthorURLInstanceSchema,
	EmbedAuthorURLStringSchema,
]);

export const EmbedAuthorSchema = object({
	iconURL: optional(EmbedAuthorIconURLSchema),
	name: EmbedAuthorNameSchema,
	url: optional(EmbedAuthorURLSchema),
});
