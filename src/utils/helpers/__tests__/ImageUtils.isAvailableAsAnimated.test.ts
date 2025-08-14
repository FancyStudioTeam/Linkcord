import { describe, expect, it } from "vitest";
import { ImageUtils } from "../ImageUtils.js";

const ANIMATED_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";

describe("Method: ImageUtils.isAvailableAsAnimated", () => {
	it("Should return whether the hash is available as an animated asset.", () => {
		expect(ImageUtils.isAvailableAsAnimated(ANIMATED_AVATAR_HASH)).toBe(true);
		expect(ImageUtils.isAvailableAsAnimated(STATIC_AVATAR_HASH)).toBe(false);
	});

	it("Should return 'false' it the asset hash is not a valid string.", () => {
		// @ts-expect-error
		expect(ImageUtils.isAvailableAsAnimated(null)).toBe(false);
	});
});
