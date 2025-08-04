// biome-ignore-all lint/complexity/useLiteralKeys: Private methods.

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

class UserClass {
	readonly name = "User";
}

describe("Method: CacheManager._add", () =>
	it("Should add a value to the cache manager.", () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass();

		// @ts-expect-error
		CacheManager["_add"]("user_1", User);

		const { cache } = CacheManager;
		const { size } = cache;

		const CachedValue = cache.get("user_1");
		const CacheLength = size;

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
	}));
