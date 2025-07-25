import { describe, expect, it } from "vitest";
import { Endpoints } from "../Endpoints.js";

describe("Constant: Endpoints", () => {
	it("Should be an object.", () => expect(Endpoints).toBeTypeOf("object"));

	it("Should be a readonly object.", () => expect(Object.isFrozen(Endpoints)).toBe(true));
});
