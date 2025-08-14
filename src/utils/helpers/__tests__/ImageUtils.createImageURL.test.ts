import { describe, expect, it } from "vitest";
import { ImageUtils } from "../ImageUtils.js";

const ANIMATED_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";
const USER_ID = "945029082314338407";

describe("Method: ImageUtils.createImageURL", () => {
	it("Should return the created image url.", () => {
		const AnimatedAssetRoute = `avatars/${USER_ID}/${ANIMATED_AVATAR_HASH}`;
		const StaticAssetRoute = `avatars/${USER_ID}/${STATIC_AVATAR_HASH}`;

		expect(ImageUtils.createImageURL(AnimatedAssetRoute)).toBe(
			`https://cdn.discordapp.com/${AnimatedAssetRoute}.gif?size=1024`,
		);
		expect(ImageUtils.createImageURL(StaticAssetRoute)).toBe(
			`https://cdn.discordapp.com/${StaticAssetRoute}.webp?size=1024`,
		);
	});
});
