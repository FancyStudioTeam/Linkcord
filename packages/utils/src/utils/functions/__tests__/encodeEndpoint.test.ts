import { describe, expect, it } from "vitest";
import { encodeEndpoint } from "../encodeEndpoint.js";

describe("Function: encodeEndpoint", () => {
  it("Returns the original endpoint.", () => {
    expect(encodeEndpoint`users/123`).toBe("users/123");
  });

  it("Returns the encoded endpoint.", () => {
    expect(encodeEndpoint`messages/${"hello world"}`).toBe("messages/hello%20world");
    expect(encodeEndpoint`messages/${"../channels/123"}`).toBe("messages/..%2Fchannels%2F123");
  });
});
