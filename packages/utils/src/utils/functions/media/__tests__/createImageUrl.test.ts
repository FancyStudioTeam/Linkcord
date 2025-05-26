import { describe, expect, it } from "vitest";
import { createImageUrl } from "../createImageUrl.ts";

const USER_ID = "945029082314338407";
const DYNAMIC_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";
const DYNAMIC_AVATAR_STRING_URL = `https://cdn.discordapp.com/avatars/${USER_ID}/${DYNAMIC_AVATAR_HASH}`;
const STATIC_AVATAR_STRING_URL = `https://cdn.discordapp.com/avatars/${USER_ID}/${STATIC_AVATAR_HASH}`;

describe("Function: createImageUrl", () => {
  it("Returns an instance of the 'URL' class.", () => {
    const dynamicAssetUrl = createImageUrl(DYNAMIC_AVATAR_STRING_URL);
    const staticAssetUrl = createImageUrl(STATIC_AVATAR_STRING_URL);

    expect(dynamicAssetUrl).toBeInstanceOf(URL);
    expect(staticAssetUrl).toBeInstanceOf(URL);
    expect(dynamicAssetUrl.toString()).toStrictEqual(`${DYNAMIC_AVATAR_STRING_URL}.gif`);
    expect(staticAssetUrl.toString()).toStrictEqual(`${STATIC_AVATAR_STRING_URL}.webp`);
  });

  it("Returns an instance of the 'URL' with the given size.", () => {
    const dynamicAssetUrl = createImageUrl(DYNAMIC_AVATAR_STRING_URL, {
      size: 1024,
    });
    const staticAssetUrl = createImageUrl(STATIC_AVATAR_STRING_URL, {
      size: 1024,
    });

    expect(dynamicAssetUrl).toBeInstanceOf(URL);
    expect(staticAssetUrl).toBeInstanceOf(URL);
    expect(dynamicAssetUrl.toString()).toStrictEqual(`${DYNAMIC_AVATAR_STRING_URL}.gif?size=1024`);
    expect(staticAssetUrl.toString()).toStrictEqual(`${STATIC_AVATAR_STRING_URL}.webp?size=1024`);
  });

  it("Returns an instance of the 'URL' with the 'forceStatic' option enabled.", () => {
    const dynamicAssetUrl = createImageUrl(DYNAMIC_AVATAR_STRING_URL, {
      forceStatic: true,
    });
    const staticAssetUrl = createImageUrl(STATIC_AVATAR_STRING_URL, {
      forceStatic: true,
    });

    expect(dynamicAssetUrl).toBeInstanceOf(URL);
    expect(staticAssetUrl).toBeInstanceOf(URL);
    expect(dynamicAssetUrl.toString()).toStrictEqual(`${DYNAMIC_AVATAR_STRING_URL}.webp`);
    expect(staticAssetUrl.toString()).toStrictEqual(`${STATIC_AVATAR_STRING_URL}.webp`);
  });

  it("Returns an instance of the 'URL' with the 'forceStatic' option enabled and the 'extension' option set.", () => {
    const dynamicAssetUrl = createImageUrl(DYNAMIC_AVATAR_STRING_URL, {
      extension: "png",
      forceStatic: true,
    });
    const staticAssetUrl = createImageUrl(STATIC_AVATAR_STRING_URL, {
      extension: "png",
      forceStatic: true,
    });

    expect(dynamicAssetUrl).toBeInstanceOf(URL);
    expect(staticAssetUrl).toBeInstanceOf(URL);
    expect(dynamicAssetUrl.toString()).toStrictEqual(`${DYNAMIC_AVATAR_STRING_URL}.png`);
    expect(staticAssetUrl.toString()).toStrictEqual(`${STATIC_AVATAR_STRING_URL}.png`);
  });
});
