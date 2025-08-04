// biome-ignore-all lint/complexity/useLiteralKeys: Private methods.

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

class UserClass {
	readonly name = "User";
}

describe("Method: CacheManager._remove", () => {
	it('Should return "false" if the value does not exist.', () => {
		const CacheManager = new CacheManagerClass();

		expect(CacheManager["_remove"]("user")).toBe(false);
	});

	it("Should remove the value from the cache manager.", () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass();

		// @ts-expect-error
		CacheManager["_add"]("user", User);

		const { cache } = CacheManager;
		const { size } = cache;

		const CachedValue = cache.get("user");
		const CacheLength = size;

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
		expect(CacheManager["_remove"]("user")).toBe(true);
	});
});
