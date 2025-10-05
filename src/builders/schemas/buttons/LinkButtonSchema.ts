import { boolean, instanceof as instanceof_, literal, number, object, string, union, url } from "zod";
import { ButtonStyles, ComponentTypes } from "#types/index.js";

const MAXIMUM_BUTTON_LABEL_LENGTH = 80;

export const LinkButtonDisabledSchema = boolean();
export const LinkButtonIDSchema = number().int();
export const LinkButtonLabelSchema = string().min(1).max(MAXIMUM_BUTTON_LABEL_LENGTH);
export const LinkButtonStyleSchema = literal(ButtonStyles.Link);
export const LinkButtonTypeSchema = literal(ComponentTypes.Button);

export const LinkButtonURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const LinkButtonURLStringSchema = url();
export const LinkButtonURLSchema = union([LinkButtonURLInstanceSchema, LinkButtonURLStringSchema]);

export const LinkButtonObjectSchema = object({
	disabled: LinkButtonDisabledSchema.optional(),
	id: LinkButtonIDSchema.optional(),
	label: LinkButtonLabelSchema.optional(),
	style: LinkButtonStyleSchema,
	type: LinkButtonTypeSchema,
	url: LinkButtonURLSchema,
});

export const LinkButtonSchema = union([LinkButtonObjectSchema]);
