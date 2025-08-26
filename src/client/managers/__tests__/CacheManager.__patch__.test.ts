/* biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket notation when accessing private or protected members from some structures. */

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";
import { UserClass } from "./__resources__/UserClass.js";

describe("Method: CacheManager._patch", () => {
	it("Should patch the user with the given data.", () => {
		const User = new UserClass("User 1");

		const CacheManagerIterable: readonly [string, UserClass][] = [["user_1", User]];
		// @ts-expect-error
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);

		CacheManager["__patch__"]("user_1", {
			name: "User 1 (Patched)",
		});

		const CachedValueAfterPatch = CacheManager.get("user_1") as unknown as UserClass;
		const { name: CachedValueAfterPatchName } = CachedValueAfterPatch;

		expect(CachedValueAfterPatch).toBeInstanceOf(UserClass);
		expect(CachedValueAfterPatchName).toBe("User 1 (Patched)");
	});
});
