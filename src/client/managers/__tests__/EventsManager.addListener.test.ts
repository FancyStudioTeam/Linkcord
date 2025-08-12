import { describe, expect, it, vi } from "vitest";
import { ClientEvents } from "#client/types/ClientEvents.js";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.addListener", () => {
	it("Should register two event listener.", () => {
		const EventsManager = new EventsManagerClass();
		const DebugListenerFunction = vi.fn();

		expect(EventsManager.addListener(ClientEvents.Debug, DebugListenerFunction)).toBe(true);
		expect(EventsManager.addListener(ClientEvents.Debug, DebugListenerFunction)).toBe(true);

		const { listeners } = EventsManager;

		const DebugListeners = listeners.get(ClientEvents.Debug);
		const { length: DebugListenersLength } = DebugListeners ?? [];

		expect(DebugListeners).toBeInstanceOf(Array);
		expect(DebugListenersLength).toBe(2);
	});
});
