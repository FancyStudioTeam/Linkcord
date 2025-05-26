import { describe, expect, it } from "vitest";
import { getDynamicExtension } from "../getDynamicExtension.ts";

const DYNAMIC_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";

describe("Function: getDynamicExtension", () => {
  it("Returns the dynamic extension of the asset hash.", () => {
    expect(getDynamicExtension(DYNAMIC_AVATAR_HASH)).toBe("gif");
    expect(getDynamicExtension(STATIC_AVATAR_HASH)).toBe("webp");
  });

  it("Returns the static extension of the asset hash when the 'forceStatic' option is enabled.", () => {
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        forceStatic: true,
      }),
    ).toBe("webp");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        forceStatic: true,
      }),
    ).toBe("webp");
  });

  it("Returns the dynamic or the given extension of the asset hash when the 'forceStatic' option is disabled and the 'extension' option is set.", () => {
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        extension: "png",
      }),
    ).toBe("gif");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        extension: "png",
      }),
    ).toBe("png");
  });

  it("Returns the given extension when the 'forceStatic' option is enabled and the 'extension' option is set.", () => {
    expect(
      getDynamicExtension(DYNAMIC_AVATAR_HASH, {
        extension: "png",
        forceStatic: true,
      }),
    ).toBe("png");
    expect(
      getDynamicExtension(STATIC_AVATAR_HASH, {
        extension: "png",
        forceStatic: true,
      }),
    ).toBe("png");
  });
});
