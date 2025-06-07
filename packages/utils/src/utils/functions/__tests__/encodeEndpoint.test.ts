import { describe, expect, it } from "vitest";
import { encodeEndpoint } from "../encodeEndpoint.js";

describe("Function: encodeEndpoint", () => {
  it("Returns the original endpoint.", () => {
    expect(encodeEndpoint`users/123`).toBe("users/123");
  });

  it("Returns the encoded endpoint.", () => {
    const message = "hello world";
    const transversal = "../channels/1232";

    expect(encodeEndpoint`message/${message}`).toBe("message/hello%20world");
    expect(encodeEndpoint`message/${transversal}`).toBe("message/..%2Fchannels%2F1232");
  });
});
