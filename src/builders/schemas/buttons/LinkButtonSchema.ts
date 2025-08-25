import {
	boolean,
	instance,
	literal,
	maxLength,
	minLength,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
	union,
	url,
} from "valibot";
import { ButtonStyles, ComponentTypes } from "#types/index.js";

const MAXIMUM_BUTTON_LABEL_LENGTH = 80;

export const LinkButtonDisabledSchema = boolean();
export const LinkButtonIDSchema = number();

export const LinkButtonLabelSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_BUTTON_LABEL_LENGTH),
);

export const LinkButtonStyleSchema = literal(ButtonStyles.Link);
export const LinkButtonTypeSchema = literal(ComponentTypes.Button);

export const LinkButtonURLInstanceSchema = pipe(
	instance(URL),
	transform((url) => url.toString()),
);
export const LinkButtonURLStringSchema = pipe(string(), url());
export const LinkButtonURLSchema = union([LinkButtonURLInstanceSchema, LinkButtonURLStringSchema]);

// TODO: Add "emoji" to "LinkButtonSchema".
export const LinkButtonSchema = object({
	disabled: optional(LinkButtonDisabledSchema),
	id: optional(LinkButtonIDSchema),
	label: optional(LinkButtonLabelSchema),
	style: LinkButtonStyleSchema,
	type: LinkButtonTypeSchema,
	url: LinkButtonURLSchema,
});
