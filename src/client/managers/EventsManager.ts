import type { ClientEventsMap, ClientEventsString } from "../ClientEvents.js";

/**
 * The events manager for the client.
 * @public
 */
export class EventsManager {
	/**
	 * The registered listeners of the events manager.
	 */
	// biome-ignore lint/complexity/noBannedTypes: Allow any function.
	readonly listeners = new Map<ClientEventsString, Function[]>();

	/**
	 * Registers a listener for an event.
	 * @param name - The name of the event to register.
	 * @param listener - The listener to register.
	 */
	addListener<Event extends keyof ClientEventsMap>(
		name: Event,
		listener: (...data: ClientEventsMap[Event]) => unknown,
	): void {
		const { listeners } = this;
		const existing = listeners.get(name);

		// Check if there is no existing listeners for the event or if the
		// existing listeners are not an array.
		// Equivalent to `if (!existing || !Array.isArray(existing))`.
		if (!(existing && Array.isArray(existing))) {
			// Use `void` to avoid TypeScript complaining about the return
			// type but still executing the following code.
			return void listeners.set(name, [listener]);
		}

		existing.push(listener);
	}

	/**
	 * Emits an event with the given event name and data.
	 * @param name - The name of the event to emit.
	 * @param data - The data to emit with the event.
	 */
	emit<Event extends ClientEventsString>(name: Event, ...data: ClientEventsMap[Event]): void {
		const { listeners } = this;
		const existing = listeners.get(name) ?? [];

		for (const listener of existing) {
			listener(...data);
		}
	}
}
