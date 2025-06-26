import { describe, expect, it } from "vitest";
import { createReadonlyPropertyDescriptor } from "../createReadonlyPropertyDescriptor.ts";

describe("Function: createReadonlyPropertyDescriptor", () =>
  it("Returns a readonly property descriptor.", () => {
    const object = {
      public: "Public Value",
    };
    const descriptor = createReadonlyPropertyDescriptor("Private Value");

    Object.defineProperty(object, "private", descriptor);

    expect(object.public).toBe("Public Value");
    // @ts-expect-error
    expect(object.private).toBe("Private Value");

    expect(() => {
      object.public = "New Public Value";
    }).not.toThrow();
    expect(() => {
      // @ts-expect-error
      object.private = "New Private Value";
    }).toThrow();
  }));
