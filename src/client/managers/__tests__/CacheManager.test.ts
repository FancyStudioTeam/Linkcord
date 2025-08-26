import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Class: CacheManager", () => {
	it('Should create a new "CacheManager".', () => {
		const CacheManager = new CacheManagerClass();
		const ExpectedCacheManagerSizeResult = 0;

		expect(CacheManager.size).toBe(ExpectedCacheManagerSizeResult);
	});

	it('Should create a new "CacheManager" instance with an initial iterable.', () => {
		const User1 = new UserClass("User 1");
		const User2 = new UserClass("User 2");

		const CacheManagerIterable: readonly [string, UserClass][] = [
			["user_1", User1],
			["user_2", User2],
		];
		// @ts-expect-error
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);

		const CachedValue1 = CacheManager.get("user_1");
		const CachedValue2 = CacheManager.get("user_2");

		const ExpectedCacheManagerSizeResult = 2;

		expect(CachedValue1).toBeInstanceOf(UserClass);
		expect(CachedValue2).toBeInstanceOf(UserClass);
		expect(CacheManager.size).toBe(ExpectedCacheManagerSizeResult);
	});
});
