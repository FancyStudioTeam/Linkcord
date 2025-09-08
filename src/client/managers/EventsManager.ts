import type { ClientEvents, ClientEventsMap } from "#client/types/ClientEvents.js";
import type { EventListener, EventListenerCallback } from "#client/types/index.js";

/** The events manager for the client. */
export class EventsManager {
	/** The maximum number of listeners allowed for an event in the events manager. */
	#limit: number;
	/** The map where the listeners are stored. */
	readonly #listeners = new Map<ClientEvents, EventListener[]>();

	/**
	 * Creates a new {@link EventsManager | `EventsManager`} instance.
	 * @param limit - The maximum number of listeners allowed for an event in the events manager.
	 */
	constructor(limit = Infinity) {
		this.#limit = limit;
	}

	/**
	 * Registers a listener for an event.
	 * @param event - The name of the event.
	 * @param listener - The listener to register.
	 * @returns Whether the event listener has been added.
	 */
	addListener<Event extends ClientEvents>(
		event: Event,
		listener: (...data: ClientEventsMap[Event]) => unknown,
	): boolean;

	/**
	 * Registers a listener for an event.
	 * @param event - The name of the event.
	 * @param once - Whether the listener should be called once.
	 * @param listener - The listener to register.
	 * @returns Whether the event listener has been added.
	 */
	addListener<Event extends ClientEvents>(
		event: Event,
		once: boolean,
		listener: (...data: ClientEventsMap[Event]) => unknown,
	): boolean;

	/**
	 * Registers a listener for an event.
	 * @param event - The name of the event.
	 * @param onceOrListener - The listener to register or whether the listener should be called once.
	 * @param possibleListener - The listener to register, if any.
	 * @returns Whether the event listener has been added.
	 */
	addListener<Event extends ClientEvents>(
		event: Event,
		onceOrListener: boolean | EventListenerCallback<Event>,
		possibleListener?: EventListenerCallback<Event>,
	): boolean {
		const listeners = this.#listeners;
		const limit = this.#limit;

		const existingListeners = listeners.get(event);
		const { length: listenersLength } = existingListeners ?? [];

		// Do not add the listener if the limit has been reached.
		if (listenersLength >= limit) return false;

		let once: boolean;
		let listener: EventListenerCallback<Event>;

		const checkListenersAndPush = (callback: EventListenerCallback<Event>, once: boolean): boolean => {
			const eventListener: EventListener = {
				callback,
				once,
			};

			// Check if there is no existing listeners for the event or if the existing listeners are not an array.
			if (!(existingListeners && Array.isArray(existingListeners))) {
				listeners.set(event, [eventListener]);
			} else {
				// Push the listener to the existing listeners.
				existingListeners.push(eventListener);
			}

			// Return true to indicate that the listener has been added.
			return true;
		};

		if (typeof onceOrListener === "boolean") {
			if (!possibleListener || typeof possibleListener !== "function") {
				throw new TypeError("The third parameter (listener) must be present and be a function.");
			}

			once = onceOrListener;
			listener = possibleListener;
		} else {
			if (typeof onceOrListener !== "function") {
				throw new TypeError("The second parameter (listener) must be a function.");
			}

			once = false;
			listener = onceOrListener;
		}

		return checkListenersAndPush(listener, once);
	}

	/**
	 * Emits an event with the given data.
	 * @param event - The name of the event to emit.
	 * @param data - The data to emit with the event.
	 * @returns The number of listeners that have been executed.
	 */
	emit<Event extends ClientEvents>(event: Event, ...data: ClientEventsMap[Event]): number {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		let executedListeners = 0;

		for (const eventListener of existingListeners) {
			const { callback, once } = eventListener;

			// Execute the listener with the given data.
			callback(...data);
			// Increment the number of executed listeners.
			++executedListeners;

			// Check if the listener is once and remove it from the listeners after it has been executed.
			if (once) {
				const eventListenerIndex = existingListeners.indexOf(eventListener);

				// Remove the listener from the listeners.
				existingListeners.splice(eventListenerIndex, 1);
			}
		}

		return executedListeners;
	}

	/**
	 * Gets the number of listeners of an event.
	 * @param event - The name of the event.
	 * @returns The number of listeners of the event.
	 */
	listenerCount<Event extends ClientEvents>(event: Event): number {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		const { length: existingListenersLength } = existingListeners;

		return existingListenersLength;
	}

	/**
	 * Removes all the listeners from an event.
	 * @param event - The event to remove its listeners.
	 * @returns Whether the event listeners have been removed.
	 */
	removeListeners(event: ClientEvents): boolean {
		const listeners = this.#listeners;

		return listeners.delete(event);
	}

	/**
	 * Sets the maximum number of listeners allowed for an event in the events manager.
	 * @param limit - The maximum number of listeners allowed.
	 */
	setMaxListeners(limit: number): void {
		if (typeof limit !== "number" || limit < 0) {
			throw new TypeError("The first parameter (limit) must be a positive number.");
		}

		this.#limit = limit;
	}
}
