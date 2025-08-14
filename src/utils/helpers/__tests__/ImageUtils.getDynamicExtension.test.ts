import { describe, expect, it } from "vitest";
import { ImageUtils } from "../ImageUtils.js";

const ANIMATED_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";

describe("Method: ImageUtils.getDynamicExtension", () => {
	it("Should return the dynamic extension using the default options.", () => {
		expect(ImageUtils.getDynamicExtension(ANIMATED_AVATAR_HASH)).toBe("gif");
		expect(ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH)).toBe("webp");
	});

	it('Should return the dynamic extension setting the "extension" option to "png".', () => {
		expect(
			ImageUtils.getDynamicExtension(ANIMATED_AVATAR_HASH, {
				extension: "png",
			}),
		).toBe("gif");
		expect(
			ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH, {
				extension: "png",
			}),
		).toBe("png");
	});

	it('Should return the dynamic extension setting the "forceStatic" option to "true".', () => {
		expect(
			ImageUtils.getDynamicExtension(ANIMATED_AVATAR_HASH, {
				forceStatic: true,
			}),
		).toBe("webp");
		expect(
			ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH, {
				forceStatic: true,
			}),
		).toBe("webp");
	});
});
