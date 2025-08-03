import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";

/**
 * Creates an event listener.
 * @param options - The options of the event.
 * @returns The event data.
 */
export function createEvent<Event extends ClientEventsString>(options: CreateEventOptions<Event>) {
	return options;
}

/**
 * The options of the event.
 * @public
 */
export interface CreateEventOptions<Event extends ClientEventsString> {
	name: Event;
	/**
	 * biome-ignore lint/suspicious/noExplicitAny: (x)
	 */
	run: (...data: ClientEventsMap[Event]) => any;
}

/**
 * The event data.
 * @public
 */
export type EventData = ReturnType<typeof createEvent>;
