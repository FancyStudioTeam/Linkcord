import { describe, expect, it } from "vitest";
import { encode } from "../encode.js";

describe("Function: encode", () =>
  it("Given a string rest parameter, returns the encoded string", () => {
    expect(encode`/messages/${"Hello, world"}`).toBe("/messages/Hello%2C%20world");
    expect(encode`/guilds/${"1234567890987654321"}`).toBe("/guilds/1234567890987654321");
  }));
