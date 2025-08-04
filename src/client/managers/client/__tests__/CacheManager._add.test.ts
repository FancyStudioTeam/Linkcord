import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

class UserClass {
	readonly name = "User";
}

describe("Method: CacheManager._add", () =>
	it("Should add a value to the cache manager.", () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass();

		// biome-ignore-start lint/complexity/useLiteralKeys: Private method.
		// @ts-expect-error
		CacheManager["_add"]("user", User);
		// biome-ignore-end lint/complexity/useLiteralKeys: Private method.

		const { cache } = CacheManager;
		const { size } = cache;

		const CachedValue = cache.get("user");
		const CacheLength = size;

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
	}));
