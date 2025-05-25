import { describe, expect, it } from "vitest";
import { GatewayShardError } from "../GatewayShardError.js";

const trowError = <Error>(error: Error) => {
  throw error;
};

describe("Class: GatewayShardError", () => {
  it("Returns an instance of the 'GatewayShardError' class", () => {
    const gatewayShardError = new GatewayShardError("Gateway Shard Error", 0);

    expect(gatewayShardError).toBeInstanceOf(GatewayShardError);
    expect(gatewayShardError.message).toBe("Gateway Shard Error");
    expect(gatewayShardError.shardId).toBe(0);
    expect(() => trowError(gatewayShardError)).toThrowError(GatewayShardError);
    expect(() => trowError(gatewayShardError)).toThrow("Gateway Shard Error");
  });
});
