import type { InferOutput } from "valibot";
import type { ClientEvents, ClientEventsMap } from "#client/index.js";
import type { EventSchema } from "#handlers/schemas/events/EventSchema.js";

/**
 * The options of the event.
 * @public
 */
export interface CreateEventOptions<Event extends ClientEvents> {
	/** The name of the event. */
	name: Event;
	/** The function to run when the event is emitted. */
	run: (...data: ClientEventsMap[Event]) => unknown;
}

/**
 * The validated options of the event.
 * @public
 */
export type EventData = InferOutput<typeof EventSchema>;
