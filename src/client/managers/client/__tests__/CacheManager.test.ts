import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

class UserClass {
	readonly name: string;

	constructor(name: string) {
		this.name = name;
	}
}

describe("Class: CacheManager", () =>
	it('Should create a new "CacheManager" instance with an initial iterable.', () => {
		const User1 = new UserClass("User 1");
		const User2 = new UserClass("User 2");

		const CacheManagerIterable: readonly [string, UserClass][] = [
			["user1", User1],
			["user2", User2],
		];
		// @ts-expect-error
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);

		const { cache } = CacheManager;
		const { size } = cache;

		const CachedValue1 = cache.get("user1");
		const CachedValue2 = cache.get("user2");
		const CacheLength = size;

		expect(CachedValue1).toBeInstanceOf(UserClass);
		expect(CachedValue2).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(2);
	}));
