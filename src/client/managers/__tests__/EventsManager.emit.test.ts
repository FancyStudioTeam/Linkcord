import { describe, expect, it, vi } from "vitest";
import { ClientEvents } from "#client/ClientEvents.js";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.emit", () => {
	it("Should register an event listener and emit it.", () => {
		const EventsManager = new EventsManagerClass();
		const DebugListenerFunction = vi.fn();

		EventsManager.addListener(ClientEvents.Debug, DebugListenerFunction);
		EventsManager.emit(ClientEvents.Debug, "Hello, world!");

		expect(DebugListenerFunction).toHaveBeenCalledTimes(1);
		expect(DebugListenerFunction).toHaveBeenCalledWith("Hello, world!");
	});

	it("Should register an event listener and emit it once.", () => {
		const EventsManager = new EventsManagerClass();
		const DebugListenerFunction = vi.fn();

		EventsManager.addListener(ClientEvents.Debug, true, DebugListenerFunction);
		EventsManager.emit(ClientEvents.Debug, "Hello, world! (1)");
		// After the first emit, the listener should have been removed.
		EventsManager.emit(ClientEvents.Debug, "Hello, world! (2)");

		expect(DebugListenerFunction).toHaveBeenCalledTimes(1);
		expect(DebugListenerFunction).toHaveBeenCalledWith("Hello, world! (1)");
	});
});
