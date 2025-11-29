import { CacheManager } from "../CacheManager.js";

describe("Method: CacheManager.delete", () => {
	it("Should remove an entry from the cached entries", () => {
		const cacheManager = new CacheManager(Infinity, [
			[
				"key_1",
				"value_1",
			],
		]);

		const result1 = cacheManager.delete("key_1");
		const result2 = cacheManager.delete("key_2");

		const expectedResult1 = true;
		const expectedResult2 = false;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});
});
