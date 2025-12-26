import { validate } from '#utils/functions/validate.js';
import type { EventConfig } from '../loaders/EventLoader.types.js';
import { EventSchema } from '../schemas/EventSchema.js';
import type { DefineEventConfigOptions } from './defineEventConfig.types.js';

export function defineEventConfig(options: DefineEventConfigOptions): EventConfig {
	return validate(EventSchema, options);
}
