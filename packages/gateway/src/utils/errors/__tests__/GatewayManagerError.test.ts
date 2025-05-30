import { describe, expect, it } from "vitest";
import { GatewayManagerError } from "../GatewayManagerError.js";

const trowError = <Error>(error: Error) => {
  throw error;
};

describe("Class: GatewayManagerError", () => {
  it("Returns an instance of the 'GatewayManagerError' class", () => {
    const expectedErrorMessage = "Gateway Manager Error";
    const gatewayManagerError = new GatewayManagerError(expectedErrorMessage);

    expect(gatewayManagerError).toBeInstanceOf(GatewayManagerError);
    expect(gatewayManagerError.message).toBe(expectedErrorMessage);
    expect(() => trowError(gatewayManagerError)).toThrow(expectedErrorMessage);
  });
});
