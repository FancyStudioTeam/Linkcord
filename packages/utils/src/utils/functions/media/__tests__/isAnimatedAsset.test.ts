import { describe, expect, it } from "vitest";
import { isAnimatedAsset } from "../isAnimatedAsset.ts";

const DYNAMIC_AVATAR_HASH = "a_685e98ef454175d0f2de0ce8d5db7650";
const STATIC_AVATAR_HASH = "685e98ef454175d0f2de0ce8d5db7650";

describe("Function: isAnimatedAsset", () =>
  it("Returns a boolean indicating whether the asset is animated or not", () => {
    expect(isAnimatedAsset(DYNAMIC_AVATAR_HASH)).toBe(true);
    expect(isAnimatedAsset(STATIC_AVATAR_HASH)).toBe(false);
    expect(isAnimatedAsset("")).toBe(false);
    // @ts-expect-error
    expect(isAnimatedAsset(null)).toBe(false);
  }));
