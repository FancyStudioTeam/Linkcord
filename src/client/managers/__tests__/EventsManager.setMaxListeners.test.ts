import { describe, expect, it } from "vitest";
import { EventsManager as EventsManagerClass } from "../EventsManager.js";

describe("Method: EventsManager.setMaxListeners", () => {
	it("Should throw an error when the limit is not a valid number.", () => {
		const EventsManager = new EventsManagerClass();
		const ExpectedErrorResult = new TypeError(
			"The first parameter (limit) must be a positive number.",
		);

		// @ts-expect-error
		expect(() => EventsManager.setMaxListeners(null)).toThrow(ExpectedErrorResult);
		expect(() => EventsManager.setMaxListeners(-1)).toThrow(ExpectedErrorResult);
	});
});
