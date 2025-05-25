import { describe, expect, it } from "vitest";
import { GatewayManagerError } from "../GatewayManagerError.js";

const trowError = <Error>(error: Error) => {
  throw error;
};

describe("Class: GatewayManagerError", () => {
  it("Returns an instance of the 'GatewayManagerError' class", () => {
    const gatewayManagerError = new GatewayManagerError("Gateway Manager Error");

    expect(gatewayManagerError).toBeInstanceOf(GatewayManagerError);
    expect(gatewayManagerError.message).toBe("Gateway Manager Error");
    expect(() => trowError(gatewayManagerError)).toThrowError(GatewayManagerError);
    expect(() => trowError(gatewayManagerError)).toThrow("Gateway Manager Error");
  });
});
