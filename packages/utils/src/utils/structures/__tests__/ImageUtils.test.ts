import { describe, expect, it } from "vitest";
import { ImageUtils } from "../ImageUtils.js";

const DYNAMIC_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";
const USER_ID = "945029082314338407";

describe("Class: ImageUtils", () => {
  describe("Getter: CDN_URL", () =>
    it("Returns the Discord CDN url.", () => {
      expect(ImageUtils.CDN_URL).toBe("https://cdn.discordapp.com");
    }));

  describe("Method: createImageUrl", () => {
    it("Returns the created image url.", () => {
      const dynamicAssetRoute = `avatars/${USER_ID}/${DYNAMIC_AVATAR_HASH}`;
      const staticAssetRoute = `avatars/${USER_ID}/${STATIC_AVATAR_HASH}`;

      expect(ImageUtils.createImageUrl(dynamicAssetRoute)).toBe(`https://cdn.discordapp.com/${dynamicAssetRoute}.gif`);
      expect(ImageUtils.createImageUrl(staticAssetRoute)).toBe(`https://cdn.discordapp.com/${staticAssetRoute}.webp`);
    });

    it("Returns the created image url with the given size.", () => {
      const dynamicAssetRoute = `avatars/${USER_ID}/${DYNAMIC_AVATAR_HASH}`;
      const staticAssetRoute = `avatars/${USER_ID}/${STATIC_AVATAR_HASH}`;

      expect(
        ImageUtils.createImageUrl(dynamicAssetRoute, {
          size: 1024,
        }),
      ).toBe(`https://cdn.discordapp.com/${dynamicAssetRoute}.gif?size=1024`);
      expect(
        ImageUtils.createImageUrl(staticAssetRoute, {
          size: 1024,
        }),
      ).toBe(`https://cdn.discordapp.com/${staticAssetRoute}.webp?size=1024`);
    });

    it("Returns the created image url with the 'forceStatic' option enabled and the 'extension' option set.", () => {
      const dynamicAssetRoute = `avatars/${USER_ID}/${DYNAMIC_AVATAR_HASH}`;
      const staticAssetRoute = `avatars/${USER_ID}/${STATIC_AVATAR_HASH}`;

      expect(
        ImageUtils.createImageUrl(dynamicAssetRoute, {
          extension: "png",
          forceStatic: true,
        }),
      ).toBe(`https://cdn.discordapp.com/${dynamicAssetRoute}.png`);
      expect(
        ImageUtils.createImageUrl(staticAssetRoute, {
          extension: "png",
          forceStatic: true,
        }),
      ).toBe(`https://cdn.discordapp.com/${staticAssetRoute}.png`);
    });
  });

  describe("Method: getDynamicExtension", () => {
    it("Returns the dynamic extension of the asset hash.", () => {
      expect(ImageUtils.getDynamicExtension(DYNAMIC_AVATAR_HASH)).toBe("gif");
      expect(ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH)).toBe("webp");
    });

    it("Returns the default extension when the 'forceStatic' option is enabled.", () => {
      expect(
        ImageUtils.getDynamicExtension(DYNAMIC_AVATAR_HASH, {
          forceStatic: true,
        }),
      ).toBe("webp");
      expect(
        ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH, {
          forceStatic: true,
        }),
      ).toBe("webp");
    });

    it("Returns the dynamic or the given extension when the 'extension' option is set.", () => {
      expect(
        ImageUtils.getDynamicExtension(DYNAMIC_AVATAR_HASH, {
          extension: "png",
        }),
      ).toBe("gif");
      expect(
        ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH, {
          extension: "png",
        }),
      ).toBe("png");
    });

    it("Returns the given extension when the 'forceStatic' option is enabled and the 'extension' option is set.", () => {
      expect(
        ImageUtils.getDynamicExtension(DYNAMIC_AVATAR_HASH, {
          extension: "png",
          forceStatic: true,
        }),
      ).toBe("png");
      expect(
        ImageUtils.getDynamicExtension(STATIC_AVATAR_HASH, {
          extension: "png",
          forceStatic: true,
        }),
      ).toBe("png");
    });
  });

  describe("Method: isAvailableAsAnimated", () => {
    it("Returns a boolean indicating whether the asset hash is available in an animated format.", () => {
      expect(ImageUtils.isAvailableAsAnimated(DYNAMIC_AVATAR_HASH)).toBe(true);
      expect(ImageUtils.isAvailableAsAnimated(STATIC_AVATAR_HASH)).toBe(false);
    });

    it("Returns 'false' when the asset hash is not a string.", () => {
      // @ts-expect-error
      expect(ImageUtils.isAvailableAsAnimated(null)).toBe(false);
      // @ts-expect-error
      expect(ImageUtils.isAvailableAsAnimated(undefined)).toBe(false);
    });
  });
});
