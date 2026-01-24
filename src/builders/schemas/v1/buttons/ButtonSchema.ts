import { boolean, literal } from 'zod';
import { ComponentType } from '#types/index.js';
import { IdSchema } from '../shared/IdSchema.js';

export const ButtonDisabledSchema = boolean();
export const ButtonIdSchema = IdSchema;
export const ButtonTypeSchema = literal(ComponentType.Button);
