import { describe, expect, it } from "vitest";
import { getDynamicExtension } from "../getDynamicExtension.ts";

const DYNAMIC_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";

describe("Function: getDynamicExtension", () => {
  it("Returns the dynamic extension of the asset hash.", () => {
    expect(getDynamicExtension(DYNAMIC_AVATAR_HASH)).toBe("gif");
    expect(getDynamicExtension(STATIC_AVATAR_HASH)).toBe("webp");
  });

  it("Returns the given extension even if the asset hash is animated.", () => {
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        extension: "png",
      }),
    ).toBe("png");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        extension: "png",
      }),
    ).toBe("png");
  });

  it("Returns the given extension taking preference over the 'useAnimated' option.", () => {
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        extension: "png",
        useAnimated: true,
      }),
    ).toBe("png");
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        extension: "png",
        useAnimated: false,
      }),
    ).toBe("png");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        extension: "png",
        useAnimated: true,
      }),
    ).toBe("png");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        extension: "png",
        useAnimated: false,
      }),
    ).toBe("png");
  });

  it("Returns the default extension even if the 'useAnimated' option is set to 'false' and there is no extension provided.", () =>
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        useAnimated: false,
      }),
    ).toBe("webp"));
});
