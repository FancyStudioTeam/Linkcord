// biome-ignore-all lint/complexity/useLiteralKeys: Private methods.

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

/**
 * Represents a user class for testing purposes.
 * @internal
 */
class UserClass {
	/**
	 * The name of the user.
	 */
	readonly name = "User";
}

describe("Method: CacheManager._remove", () => {
	it('Should return "false" if the value does not exist.', () => {
		const CacheManager = new CacheManagerClass();

		expect(CacheManager["_remove"]("user_1")).toBe(false);
	});

	it("Should remove the value from the cache manager.", () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass();

		// @ts-expect-error
		CacheManager["_add"]("user_1", User);

		const { cache } = CacheManager;
		const { size: CacheLength } = cache;

		const CachedValue = cache.get("user_1");

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
		expect(CacheManager["_remove"]("user_1")).toBe(true);
	});
});
