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

const MAXIMUM_EMBED_FOOTER_TEXT_LENGTH = 2048;

export const EmbedFooterIconURLInstanceSchema = pipe(
	instance(URL),
	transform((url) => url.toString()),
);
export const EmbedFooterIconURLStringSchema = pipe(string(), url());
export const EmbedFooterIconURLSchema = union([
	EmbedFooterIconURLInstanceSchema,
	EmbedFooterIconURLStringSchema,
]);

export const EmbedFooterTextSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_EMBED_FOOTER_TEXT_LENGTH),
);

export const EmbedFooterSchema = object({
	iconURL: optional(EmbedFooterIconURLSchema),
	text: EmbedFooterTextSchema,
});
