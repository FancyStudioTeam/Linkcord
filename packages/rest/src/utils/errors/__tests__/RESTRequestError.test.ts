import { describe, expect, it } from "vitest";
import { RESTMethods } from "../../../structures/index.js";
import { RESTRequestError } from "../RESTRequestError.js";

const trowError = <Error>(error: Error) => {
  throw error;
};

describe("Class: RESTRequestError", () => {
  it("Returns an instance of the 'RESTRequestError' class", () => {
    const expectedErrorMessage = "REST Request Error";
    const restRequestError = new RESTRequestError(
      expectedErrorMessage,
      50035,
      RESTMethods.Post,
      "https://discord.com/api/v10/channels/123456789012345678/messages",
    );

    expect(restRequestError).toBeInstanceOf(RESTRequestError);
    expect(restRequestError.code).toBe(50035);
    expect(restRequestError.message).toBe(expectedErrorMessage);
    expect(restRequestError.method).toBe(RESTMethods.Post);
    expect(restRequestError.url).toBe("https://discord.com/api/v10/channels/123456789012345678/messages");
    expect(() => trowError(restRequestError)).toThrow(expectedErrorMessage);
  });
});
