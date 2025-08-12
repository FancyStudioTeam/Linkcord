import { describe, expect, it } from "vitest";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.setMaxListeners", () => {
	it("Should throw an error when the limit is not a valid number.", () => {
		const EventsManager = new EventsManagerClass();

		// @ts-expect-error
		expect(() => EventsManager.setMaxListeners(null)).toThrowError(TypeError);
		expect(() => EventsManager.setMaxListeners(-1)).toThrowError(TypeError);
	});
});
