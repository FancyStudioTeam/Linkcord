import { describe, expect, it } from "vitest";
import { UserFlags } from "../../../types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Class: BitFieldResolver", () => {
  describe("Method: add", () =>
    it("Adds the given bit to the bitfield.", () => {
      expect(new BitFieldResolver().add(0)).toBe(0);
      expect(new BitFieldResolver().add(UserFlags.Staff)).toBe(UserFlags.Staff);
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper).add(UserFlags.Staff)).toBe(
        UserFlags.ActiveDeveloper | UserFlags.Staff,
      );
    }));

  describe("Method: remove", () =>
    it("Removes the given bit from the bitfield.", () => {
      expect(new BitFieldResolver().remove(0)).toBe(0);
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper).remove(UserFlags.ActiveDeveloper)).toBe(0);
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff).remove(UserFlags.Staff)).toBe(
        UserFlags.ActiveDeveloper,
      );
    }));

  describe("Method: has", () =>
    it("Checks whether the given bit is present in the bitfield.", () => {
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper).has(UserFlags.Staff)).toBe(false);
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper).has(UserFlags.ActiveDeveloper)).toBe(true);
      expect(new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff).has(UserFlags.Staff)).toBe(true);
    }));

  describe("Method: freeze", () =>
    it("Freezes the instance.", () => expect(Object.isFrozen(new BitFieldResolver(0).freeze())).toBe(true)));
});
