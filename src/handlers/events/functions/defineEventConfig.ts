import { validate } from "#utils/functions/validate.js";
import type { EventConfig } from "../loaders/EventsLoader.types.js";
import { EventSchema } from "../schemas/EventSchema.js";
import type { DefineEventConfig } from "./defineEventConfig.types.js";

/**
 * Defines the configuration for an event handled by the event handler.
 *
 * @param options - The configuration for the event.
 */
export function defineEventConfig(options: DefineEventConfig): EventConfig {
	return validate(EventSchema, options);
}
