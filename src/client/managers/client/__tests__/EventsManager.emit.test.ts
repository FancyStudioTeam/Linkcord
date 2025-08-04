import { describe, expect, it, vi } from "vitest";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.emit", () =>
	it("Should register one event listener and emit it.", () => {
		const EventsManager = new EventsManagerClass();
		const DebugListenerFunction = vi.fn();

		EventsManager.addListener("debug", DebugListenerFunction);

		const { listeners } = EventsManager;

		const DebugListeners = listeners.get("debug");
		const DebugListenersLength = DebugListeners?.length ?? 0;

		expect(DebugListeners).toBeInstanceOf(Array);
		expect(DebugListenersLength).toBe(1);

		EventsManager.emit("debug", "Hello, world!");

		expect(DebugListenerFunction).toHaveBeenCalledTimes(1);
		expect(DebugListenerFunction).toHaveBeenCalledWith("Hello, world!");
	}));
