import { CacheManager } from "../CacheManager.js";

describe("Method: CacheManager.get", () => {
	it("Should get an entry from the cached entries", () => {
		const cacheManager = new CacheManager(Infinity, [
			[
				"key_1",
				"value_1",
			],
		]);

		const result1 = cacheManager.get("key_1");
		const result2 = cacheManager.get("key_2");

		const expectedResult1 = "value_1";
		const expectedResult2 = undefined;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});
});
