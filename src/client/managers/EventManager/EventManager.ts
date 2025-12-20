import type { ClientEvents, ClientEventsMap } from "#client/structures/index.js";
import { Collection } from "#utils/index.js";
import type { EventListener, EventListenerCallback } from "./EventManager.types.js";

export class EventManager {
	readonly #listeners = new Collection<ClientEvents, EventListener<ClientEvents>[]>();

	#createEventListenerObject<Event extends ClientEvents>(
		once: boolean,
		callback: EventListenerCallback<Event>,
	): EventListener<Event> {
		const eventListener: EventListener<Event> = {
			callback,
			once,
		};

		return eventListener;
	}

	#removeEventListener<Event extends ClientEvents>(
		eventListenersArray: EventListener<Event>[],
		eventListener: EventListener<Event>,
	): void {
		const eventListenerIndex = eventListenersArray.indexOf(eventListener);

		eventListenersArray.splice(eventListenerIndex, 1);
	}

	#upsertEventListeners(
		event: ClientEvents,
		defaultValue: EventListener<ClientEvents>[] = [],
	): EventListener<ClientEvents>[] {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event);

		if (existingListeners) {
			return existingListeners;
		}

		listeners.set(event, defaultValue);

		return defaultValue;
	}

	addEventListener<Event extends ClientEvents>(
		event: Event,
		callback: EventListenerCallback<Event>,
		options?: AddEventListenerOptions,
	): void {
		const { once = false } = options ?? {};

		const eventListener = this.#createEventListenerObject(once, callback) as EventListener<ClientEvents>;
		const listeners = this.#upsertEventListeners(event);

		listeners.push(eventListener);
	}

	/**
	 * @remarks
	 * - This method uses the `once` option from the `addEventListener` method.
	 * - The event listener will be removed after it is invoked once.
	 */
	addOnceEventListener<Event extends ClientEvents>(event: Event, callback: EventListenerCallback<Event>): void {
		this.addEventListener(event, callback, {
			once: true,
		});
	}

	emit<Event extends ClientEvents>(event: Event, ...data: ClientEventsMap[Event]): void {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		for (const eventListener of existingListeners) {
			const { callback, once } = eventListener;

			callback(...data);

			if (once) {
				this.#removeEventListener(existingListeners, eventListener);
			}
		}
	}

	getEventListenerCount<Event extends ClientEvents>(event: Event): number {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		const { length: existingListenersLength } = existingListeners;

		return existingListenersLength;
	}

	/**
	 * @remarks
	 * - If multiple listeners are registered with the same callback, the first
	 * occurrence will be removed.
	 */
	removeEventListener<Event extends ClientEvents>(event: Event, callback: EventListenerCallback<Event>): boolean {
		const listeners = this.#listeners;

		const existingListeners = listeners.get(event) ?? [];
		const existingListener = existingListeners.find(({ callback: listener }) => listener === callback);

		if (!existingListener) {
			return false;
		}

		this.#removeEventListener(existingListeners, existingListener);

		return true;
	}

	removeEventListeners<Event extends ClientEvents>(event: Event): boolean {
		const listeners = this.#listeners;
		const wasDeleted = listeners.delete(event);

		return wasDeleted;
	}
}
