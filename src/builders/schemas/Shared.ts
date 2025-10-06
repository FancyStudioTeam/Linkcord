import { hex, instanceof as instanceof_, number, string, union, url } from "zod";

const MAXIMUM_32_BIT_LENGTH = 2_147_483_647;
const MAXIMUM_CUSTOM_ID_LENGTH = 100;

const URLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
const URLStringSchema = url();

export const ColorNumberSchema = hex().transform((hex) => Number(`0x${hex.replace("#", "").toLowerCase()}`));
export const ColorStringSchema = hex();
export const ColorSchema = union([ColorNumberSchema, ColorStringSchema]);

export const CustomIDSchema = string().min(1).max(MAXIMUM_CUSTOM_ID_LENGTH);
export const IDSchema = number().int().min(0).max(MAXIMUM_32_BIT_LENGTH);
export const URLSchema = union([URLInstanceSchema, URLStringSchema]);
