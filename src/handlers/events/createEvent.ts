import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";

export const createEvent = <Event extends ClientEventsString>(
	options: CreateEventOptions<Event, CreateEventOptionsData<Event>>,
) => options;

export interface CreateEventOptions<
	Event extends ClientEventsString,
	EventData extends CreateEventOptionsData<Event>,
> {
	data: EventData;
	/**
	 * biome-ignore lint/suspicious/noExplicitAny: (x)
	 */
	run: (...data: ClientEventsMap[Event]) => any;
}

interface CreateEventOptionsData<Event extends ClientEventsString> {
	name: Event;
	once?: boolean;
}

export type EventData = ReturnType<typeof createEvent>;
