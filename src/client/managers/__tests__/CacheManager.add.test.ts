import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Method: CacheManager.add", () => {
	it("Should add a value to the cache manager.", async () => {
		const CacheManager = new CacheManagerClass();
		const User = new UserClass("User 1");

		await CacheManager.add("user_1", User);

		const { size: CacheLength } = CacheManager;
		const CachedValue = await CacheManager.get("user_1");

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(CacheLength).toBe(1);
	});
});
