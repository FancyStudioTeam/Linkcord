import type { ClientEvents, ClientEventsMap } from "#client/ClientEvents.js";

/**
 * Represents a listener data object for an event.
 * @public
 */
export interface EventListener {
	/** The callback to execute when the event is emitted. */
	// biome-ignore lint/complexity/noBannedTypes: Allow any function.
	callback: Function;
	/** Whether the listener should be executed once. */
	once: boolean;
}

/**
 * Represents a listener callback for an event.
 * @public
 */
export type EventListenerCallback<Event extends ClientEvents> = (
	...data: ClientEventsMap[Event]
) => unknown;
