import { UserFlags } from "@fancystudioteam/linkcord-types";
import { describe, expect, it } from "vitest";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Class: BitFieldResolver", () => {
  it("Returns an instance of the 'BitFieldResolver' class.", () => {
    const bitFieldResolver = new BitFieldResolver(0);

    expect(bitFieldResolver).toBeInstanceOf(BitFieldResolver);
    expect(bitFieldResolver).toStrictEqual(new BitFieldResolver(0));
    expect(bitFieldResolver.bitField).toBe(0);
    expect(bitFieldResolver.frozen).toBe(false);
  });

  it("Adds a bit to the bitfield and returns the updated value.", () => {
    expect(new BitFieldResolver(0).add(0)).toBe(0);
    expect(new BitFieldResolver(0).add(UserFlags.ActiveDeveloper)).toBe(UserFlags.ActiveDeveloper);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper).add(UserFlags.Staff)).toBe(
      UserFlags.ActiveDeveloper | UserFlags.Staff,
    );
  });

  it("Removes a bit from the bitfield and returns the updated value.", () => {
    expect(new BitFieldResolver(0).remove(0)).toBe(0);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper).remove(UserFlags.ActiveDeveloper)).toBe(0);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff).remove(UserFlags.Staff)).toBe(
      UserFlags.ActiveDeveloper,
    );
  });

  it("Checks if the bit is set in the bitfield and returns a boolean.", () => {
    expect(new BitFieldResolver(0).has(0)).toBe(true);
    expect(new BitFieldResolver(0).has(UserFlags.ActiveDeveloper)).toBe(false);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper).has(UserFlags.Staff)).toBe(false);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper).has(UserFlags.ActiveDeveloper)).toBe(true);
    expect(new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff).has(UserFlags.Staff)).toBe(true);
  });

  it("Freezes the 'BitFieldResolver' instance and returns a readonly instance.", () => {
    const frozenBitFieldResolver = new BitFieldResolver(0).freeze();

    expect(frozenBitFieldResolver).toBeInstanceOf(BitFieldResolver);
    expect(frozenBitFieldResolver).toStrictEqual(new BitFieldResolver(0));
    expect(frozenBitFieldResolver.bitField).toBe(0);
    expect(frozenBitFieldResolver.frozen).toBe(true);
  });
});
