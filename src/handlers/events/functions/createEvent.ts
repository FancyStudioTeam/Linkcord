import { parse } from "valibot";
import type { ClientEvents } from "#client/index.js";
import { EventSchema } from "#handlers/schemas/events/EventSchema.js";
import type { CreateEventOptions, EventData } from "#handlers/types/index.js";

/**
 * Creates a listener for an event.
 * @param options - The options to use in the event listener.
 * @returns The validated options of the event listener.
 */
export function createEvent<Event extends ClientEvents>(
	options: CreateEventOptions<Event>,
): EventData {
	try {
		return parse(EventSchema, options);
	} catch {
		throw new TypeError("The first parameter (options) contains an invalid data object input.");
	}
}
