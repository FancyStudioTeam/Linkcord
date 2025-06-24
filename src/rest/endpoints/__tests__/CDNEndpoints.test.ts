import { describe, expect, it } from "vitest";
import { CDNEndpoints } from "../CDNEndpoints.js";

describe("Class: CDNEndpoints", () =>
  it("Expects the object to be frozen.", () => {
    expect(Object.isFrozen(CDNEndpoints)).toBe(true);
    expect(() => {
      // @ts-expect-error
      CDNEndpoints.sayHello = () => "Hello!";
    }).toThrow();
  }));
