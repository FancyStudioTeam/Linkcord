import { boolean, literal } from 'zod';
import { IdSchema } from '#builders/schemas/shared/IdSchema.js';
import { ComponentType } from '#types/index.js';

export const ButtonDisabledSchema = boolean();
export const ButtonIdSchema = IdSchema;
export const ButtonTypeSchema = literal(ComponentType.Button);
