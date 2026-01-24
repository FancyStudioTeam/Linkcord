import { literal, object, string } from 'zod';
import { ButtonStyle } from '#types/index.js';
import { castSnowflake } from '#utils/index.js';
import { ButtonDisabledSchema, ButtonIdSchema, ButtonTypeSchema } from './ButtonSchema.js';

export const PremiumButtonDisabledSchema = ButtonDisabledSchema;
export const PremiumButtonIdSchema = ButtonIdSchema;
export const PremiumButtonStyleSchema = literal(ButtonStyle.Premium);
export const PremiumButtonTypeSchema = ButtonTypeSchema;
export const PremiumButtonSkuIdSchema = string().transform(castSnowflake);

export const PremiumButtonSchema = object({
	disabled: PremiumButtonDisabledSchema.optional(),
	id: PremiumButtonIdSchema.optional(),
	skuId: PremiumButtonSkuIdSchema,
	style: PremiumButtonStyleSchema,
	type: PremiumButtonTypeSchema,
});
