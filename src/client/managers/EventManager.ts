import { ClientEvents, type ClientEventsMap } from "#client/structures/Client.types.js";
import { isBoolean, isEnum, isFunction } from "#utils/helpers/AssertionUtils.js";
import type { EventListener, EventListenerCallback } from "./EventManager.types.js";

export class EventManager {
	readonly #listeners = new Map<ClientEvents, EventListener<ClientEvents>[]>();

	#createListener<Event extends ClientEvents>(
		once: boolean,
		callback: EventListenerCallback<Event>,
	): EventListener<Event> {
		const eventListener: EventListener<Event> = {
			callback,
			once,
		};

		return eventListener;
	}

	#getOrCreateListeners(event: ClientEvents): EventListener<ClientEvents>[] {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event);

		if (existingListeners) {
			return existingListeners;
		}

		const createdListeners: EventListener<ClientEvents>[] = [];

		listeners.set(event, createdListeners);

		return createdListeners;
	}

	addEventListener<Event extends ClientEvents>(
		event: Event,
		listener: (...data: ClientEventsMap[Event]) => unknown,
	): boolean;
	addEventListener<Event extends ClientEvents>(
		event: Event,
		once: boolean,
		listener: (...data: ClientEventsMap[Event]) => unknown,
	): boolean;

	addEventListener<Event extends ClientEvents>(
		event: Event,
		onceOrListener: boolean | EventListenerCallback<Event>,
		possibleListener?: EventListenerCallback<Event>,
	): boolean {
		let once: boolean;
		let listener: EventListenerCallback<Event>;

		if (!isEnum(event, ClientEvents)) {
			throw new TypeError("First parameter (event) from 'EventsManager.addEventListener' must be an enum");
		}

		if (isBoolean(onceOrListener)) {
			if (!isFunction(possibleListener)) {
				throw new TypeError(
					"Third parameter (listener) from 'EventsManager.addEventListener' must be a function",
				);
			}

			once = onceOrListener;
			listener = possibleListener;
		} else {
			if (!isFunction(onceOrListener)) {
				throw new TypeError(
					"Second parameter (listener) from 'EventsManager.addEventListener' must be a function",
				);
			}

			once = false;
			listener = onceOrListener;
		}

		const eventListener = this.#createListener(once, listener);
		const listeners = this.#getOrCreateListeners(event);

		listeners.push(eventListener as EventListener<ClientEvents>);

		return true;
	}

	emit<Event extends ClientEvents>(event: Event, ...data: ClientEventsMap[Event]): number {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		let executedListeners = 0;

		for (const eventListener of existingListeners) {
			const { callback, once } = eventListener;

			callback(...data);
			++executedListeners;

			if (once) {
				const eventListenerIndex = existingListeners.indexOf(eventListener);

				existingListeners.splice(eventListenerIndex, 1);
			}
		}

		return executedListeners;
	}

	listenerCount<Event extends ClientEvents>(event: Event): number {
		const listeners = this.#listeners;
		const existingListeners = listeners.get(event) ?? [];

		const { length: existingListenersLength } = existingListeners;

		return existingListenersLength;
	}

	removeListeners(event: ClientEvents): boolean {
		const listeners = this.#listeners;

		return listeners.delete(event);
	}
}
