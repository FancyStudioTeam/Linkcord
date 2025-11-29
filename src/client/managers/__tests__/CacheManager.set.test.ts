import { CacheManager } from "../CacheManager.js";

describe("Method: CacheManager.set", () => {
	it("Should set an entry in the cached entries", () => {
		const cacheManager = new CacheManager();

		const result = cacheManager.set("key_1", "value_1");
		const expectedResult = true;

		expect(result).toBe(expectedResult);
	});

	it("Should throw an Error if the cache entries limit is exceeded", () => {
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

		const result = () => cacheManager.set("key_3", "value_3");
		const expectedErrorResult = new Error("Cache exceeded the limit of 2 cached entries");

		expect(result).toThrow(expectedErrorResult);
	});
});
