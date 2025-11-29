import { CacheManager } from "../CacheManager.js";

describe("Method: CacheManager.add", () => {
	it("Should add an entry to the cached entries", () => {
		const cacheManager = new CacheManager();

		const result = cacheManager.add("key_1", "value_1");
		const expectedResult = true;

		expect(result).toBe(expectedResult);
	});

	it("Should remove the oldest cached entry from the cached entries", () => {
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
