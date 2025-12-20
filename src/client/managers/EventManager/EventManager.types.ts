import type { ClientEvents, ClientEventsMap } from "#client/structures/index.js";

export interface AddEventListenerOptions {
	once?: boolean;
}

export interface EventListener<Event extends ClientEvents> {
	callback: EventListenerCallback<Event>;
	once: boolean;
}

export type EventListenerCallback<Event extends ClientEvents> = (...data: ClientEventsMap[Event]) => unknown;
