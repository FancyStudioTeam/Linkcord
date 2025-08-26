import { describe, expect, it, vi } from "vitest";
import { ClientEvents } from "#client/types/ClientEvents.js";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.addListener", () => {
	it("Should register two event listeners.", () => {
		const EventsManager = new EventsManagerClass();
		const DebugListenerFunction = vi.fn();
		const ExpectedDebugListenersResult = 2;

		expect(EventsManager.addListener(ClientEvents.Debug, DebugListenerFunction)).toBe(true);
		expect(EventsManager.addListener(ClientEvents.Debug, DebugListenerFunction)).toBe(true);
		expect(EventsManager.listenerCount(ClientEvents.Debug)).toBe(ExpectedDebugListenersResult);
	});
});
