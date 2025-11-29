import { describe, expect, it } from "vitest";
import { CacheManager } from "../CacheManager.js";

describe("Method: CacheManager.add", () => {
	it("Should add an entry to the cache", () => {
		const cacheManager = new CacheManager<string, string>();

		cacheManager.add("key_1", "value_1");

		const { size: cacheSize } = cacheManager;
		const cachedValue = cacheManager.get("key_1");

		expect(cachedValue).toBeTypeOf("string");
		expect(cacheSize).toBe(1);
	});

	it("Should remove the oldest cached value from the cache", () => {
		const cacheManager = new CacheManager(2, [
			[
				"key_1",
				"value_1",
			],
			[
				"key_2",
				"value_2",
			],
		]);

		const { size: cacheSize } = cacheManager;
		const cachedValue = cacheManager.get("key_1");

		expect(cachedValue).toBe("value_1");
		expect(cacheSize).toBe(2);

		cacheManager.add("key_3", "value_3");

		const { size: updatedCacheSize } = cacheManager;
		const updatedCachedValue = cacheManager.get("key_1");

		expect(updatedCachedValue).toBeUndefined();
		expect(updatedCacheSize).toBe(2);
	});
});
