import { describe, expect, it } from "vitest";
import { getPropertyDescriptorValue } from "../getPropertyDescriptorValue.ts";

describe("Function: getPropertyDescriptorValue", () => {
  it("Returns the property value.", () =>
    expect(
      getPropertyDescriptorValue(
        {
          public: "Public Value",
        },
        "public",
      ),
    ).toBe("Public Value"));

  it("Returns 'undefined' if the property is not defined.", () =>
    expect(getPropertyDescriptorValue({}, "private")).toBe(undefined));

  it("Throws a 'TypeError' if the property is not defined and 'required' is true.", () =>
    expect(() => getPropertyDescriptorValue({}, "private", true)).toThrow(
      "Cannot get property 'private' from object.",
    ));
});
