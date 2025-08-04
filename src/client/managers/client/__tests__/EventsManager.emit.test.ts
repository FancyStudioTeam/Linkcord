import { describe, expect, it, vi } from "vitest";
import { EventsManager } from "../EventsManager.js";

describe("Method: EventsManager.emit", () =>
	it("Should register one event listener and emit it.", () => {
		const eventsManager = new EventsManager();
		const debugListener = vi.fn();

		eventsManager.addListener("debug", debugListener);

		const { listeners } = eventsManager;

		const debugListeners = listeners.get("debug");
		const debugListenersLength = debugListeners?.length ?? 0;

		expect(debugListeners).toBeInstanceOf(Array);
		expect(debugListenersLength).toBe(1);

		eventsManager.emit("debug", "Hello, world!");

		expect(debugListener).toHaveBeenCalledTimes(1);
		expect(debugListener).toHaveBeenCalledWith("Hello, world!");
	}));
