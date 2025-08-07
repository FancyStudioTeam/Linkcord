/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Method: CacheManager._add", () =>
	it("Should add a value to the cache manager.", () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass("User 1");

		CacheManager["__add__"]("user_1", User);

		const { cache } = CacheManager;
		const { size: CacheLength } = cache;

		const CachedValue = cache.get("user_1");

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
	}));
