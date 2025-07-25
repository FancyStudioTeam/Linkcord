import { describe, expect, it } from "vitest";
import { CDNEndpoints } from "../CDNEndpoints.js";

describe("Constant: CDNEndpoints", () => {
	it("Should be an object.", () => expect(CDNEndpoints).toBeTypeOf("object"));

	it("Should be a readonly object.", () => expect(Object.isFrozen(CDNEndpoints)).toBe(true));
});
