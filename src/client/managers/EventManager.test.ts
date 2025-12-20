/**
 * biome-ignore-all lint/style/noMagicNumbers: Magic numbers in test files may
 * be ignored.
 */

import { ClientEvents } from "#client/structures/Client.types.js";
import { EventManager } from "./EventManager.js";

describe("Class: EventManager", () => {
	let eventManager: EventManager;

	beforeEach(() => {
		eventManager = new EventManager();
	});

	describe("Method: addEventListener", () => {
		it("Should register some event listeners", () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);

			const debugEventListeners = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListeners).toBe(2);
		});
	});

	describe("Method: emit", () => {
		it("Should register some event listeners and emit them", () => {
			const debugListenerFunction = vi.fn((message: string) => message);

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction, {
				once: true,
			});

			eventManager.emit(ClientEvents.Debug, "First");
			eventManager.emit(ClientEvents.Debug, "Two");

			expect(debugListenerFunction).toHaveBeenCalledTimes(3);

			expect(debugListenerFunction).toHaveBeenNthCalledWith(1, "First");
			expect(debugListenerFunction).toHaveBeenNthCalledWith(2, "First");
			expect(debugListenerFunction).toHaveBeenNthCalledWith(3, "Two");
		});
	});

	describe("Method: removeEventListener", () => {
		it("Should remove one event listener of an event", () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);

			eventManager.removeEventListener(ClientEvents.Debug, debugListenerFunction);

			const debugEventListeners = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListeners).toBe(1);
		});
	});

	describe("Method: removeEventListeners", () => {
		it("Should remove all event listeners of an event", () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, () => debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, () => debugListenerFunction);

			eventManager.removeEventListeners(ClientEvents.Debug);

			const debugEventListeners = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListeners).toBe(0);
		});
	});
});
