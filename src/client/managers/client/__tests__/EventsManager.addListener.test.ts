import { describe, expect, it, vi } from "vitest";
import { EventsManager } from "../EventsManager.js";

describe("Method: EventsManager.addListener", () =>
	it("Should register two event listener.", () => {
		const eventsManager = new EventsManager();
		const debugListener = vi.fn();

		eventsManager.addListener("debug", debugListener);
		eventsManager.addListener("debug", debugListener);

		const { listeners } = eventsManager;

		const debugListeners = listeners.get("debug");
		const debugListenersLength = debugListeners?.length ?? 0;

		expect(debugListeners).toBeInstanceOf(Array);
		expect(debugListenersLength).toBe(2);
	}));
