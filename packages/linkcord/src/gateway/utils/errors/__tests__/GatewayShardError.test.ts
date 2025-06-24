import { describe, expect, it } from "vitest";
import { GatewayShardError } from "../GatewayShardError.js";

const trowError = <Error>(error: Error) => {
  throw error;
};

describe("Class: GatewayShardError", () => {
  it("Returns an instance of the 'GatewayShardError' class", () => {
    const expectedErrorMessage = "Gateway Shard Error";
    const gatewayShardError = new GatewayShardError(expectedErrorMessage, 0);

    expect(gatewayShardError).toBeInstanceOf(GatewayShardError);
    expect(gatewayShardError.message).toBe(expectedErrorMessage);
    expect(gatewayShardError.shardId).toBe(0);
    expect(() => trowError(gatewayShardError)).toThrow(expectedErrorMessage);
  });
});
