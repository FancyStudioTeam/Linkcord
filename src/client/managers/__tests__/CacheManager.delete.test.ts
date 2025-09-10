import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Method: CacheManager.delete", () => {
	it('Should return "false" if the value does not exist.', async () => {
		const CacheManager = new CacheManagerClass();

		expect(await CacheManager.delete("user_1")).toBe(false);
	});

	it("Should remove the value from the cache manager.", async () => {
		const User = new UserClass("User 1");

		const CacheManagerIterable: readonly [string, UserClass][] = [["user_1", User]];
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);
		const CachedValue = await CacheManager.get("user_1");

		expect(CachedValue).toBeInstanceOf(UserClass);
		expect(await CacheManager.delete("user_1")).toBe(true);
	});
});
