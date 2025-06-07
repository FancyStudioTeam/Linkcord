import { describe, expect, it } from "vitest";
import { encodeEndpoint } from "../encodeEndpoint.js";

describe("Function: encodeEndpoint", () => {
  it("Returns the original endpoint.", () => {
    expect(encodeEndpoint`users/123`).toBe("users/123");
    expect(encodeEndpoint`users/@me`).toBe("users/@me");
  });

  it("Returns the encoded endpoint.", () => {
    expect(encodeEndpoint`users/${"@me"}`).toBe("users/@me");
    expect(encodeEndpoint`reactions/${":❌:"}`).toBe("reactions/:%E2%9D%8C:");
    expect(encodeEndpoint`reactions/${":custom_emoji:123"}`).toBe("reactions/:custom_emoji:123");
    expect(encodeEndpoint`messages/${"hello world"}`).toBe("messages/hello%20world");
    expect(encodeEndpoint`messages/${"../channels/123"}`).toBe("messages/..%2Fchannels%2F123");
  });
});
