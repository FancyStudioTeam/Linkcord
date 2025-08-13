import type { ClientEvents, ClientEventsMap } from "#client/index.js";

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
