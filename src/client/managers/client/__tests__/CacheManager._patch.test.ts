// biome-ignore-all lint/complexity/useLiteralKeys: Private methods.

import { describe, expect, it } from "vitest";
import { CacheManager as CacheManagerClass } from "../CacheManager.js";

/**
 * Represents a user class for testing purposes.
 * @internal
 */
class UserClass {
	/**
	 * The name of the user.
	 */
	name: string;

	/**
	 * Creates a new {@link UserClass | `UserClass`} instance.
	 * @param name - The name of the user.
	 */
	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Patches the user with the given data.
	 * @param data - The data to use when patching the user.
	 */
	_patch(data: Partial<UserClassData> = {}): void {
		const { name } = data;

		if (name) {
			this.name = name;
		}
	}
}

describe("Method: CacheManager._patch", () =>
	it("Should patch the user with the given data.", () => {
		const User = new UserClass("User 1");

		const CacheManagerIterable: readonly [string, UserClass][] = [["user_1", User]];
		// @ts-expect-error
		const CacheManager = new CacheManagerClass(Infinity, CacheManagerIterable);

		CacheManager["_patch"]("user_1", {
			name: "User 1 (Patched)",
		});

		const { cache } = CacheManager;

		const CachedValueAfterPatch = cache.get("user_1") as unknown as UserClass;
		const { name: CachedValueAfterPatchName } = CachedValueAfterPatch;

		expect(CachedValueAfterPatch).toBeInstanceOf(UserClass);
		expect(CachedValueAfterPatchName).toBe("User 1 (Patched)");
	}));

/**
 * Represents the available data to patch a user.
 * @internal
 */
interface UserClassData {
	/**
	 * The name of the user.
	 */
	name: string;
}
