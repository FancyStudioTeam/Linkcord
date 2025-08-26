/* biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket notation when accessing private or protected members from some structures. */

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Method: CacheManager._remove", () => {
	it('Should return "false" if the value does not exist.', () => {
		const CacheManager = new CacheManagerClass();

		expect(CacheManager["__remove__"]("user_1")).toBe(false);
	});

	it("Should remove the value from the cache manager.", () => {
		const User = new UserClass("User 1");

		const CacheManagerIterable: readonly [string, UserClass][] = [["user_1", User]];
		// @ts-expect-error
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);
		const CachedValue = CacheManager.get("user_1");

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheManager["__remove__"]("user_1")).toBe(true);
	});
});
