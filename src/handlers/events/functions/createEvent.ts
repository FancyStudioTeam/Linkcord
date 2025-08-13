import { parse } from "valibot";
import type { ClientEvents } from "#client/index.js";
import { EventSchema } from "#handlers/schemas/events/EventSchema.js";
import type { CreateEventOptions } from "#handlers/types/index.js";

/**
 * Creates a listener for an event.
 * @param options - The options to use in the event listener.
 * @returns The validated options of the event listener.
 * @public
 */
export function createEvent<Event extends ClientEvents>(options: CreateEventOptions<Event>) {
	try {
		return parse(EventSchema, options);
	} catch {
		throw new TypeError("The first parameter (options) contains an invalid data object input.");
	}
}
