import { hex, instanceof as instanceof_, int, string, union, url } from "zod";

const MAXIMUM_32_BIT_LENGTH = 2_147_483_647;
const MAXIMUM_CUSTOM_ID_LENGTH = 100;
const MAXIMUM_HEX_CODE_DECIMAL_LENGTH = 16_777_215;

export const ColorNumberSchema = int().min(0).max(MAXIMUM_HEX_CODE_DECIMAL_LENGTH);
export const ColorStringSchema = hex().transform((hex) => Number(hex.replace("#", "0x")));
export const ColorSchema = union([
	ColorNumberSchema,
	ColorStringSchema,
]);

export const CustomIdSchema = string().min(1).max(MAXIMUM_CUSTOM_ID_LENGTH);
export const IdSchema = int().min(0).max(MAXIMUM_32_BIT_LENGTH);

export const UrlInstanceSchema = instanceof_(URL, {
	error: "Expected input to be an instance of URL",
}).transform((url) => url.toString());
export const UrlStringSchema = url();
export const UrlSchema = union([
	UrlInstanceSchema,
	UrlStringSchema,
]);

export const UnfurledMediaItemSchema = UrlSchema.transform((url) => ({
	url,
}));
