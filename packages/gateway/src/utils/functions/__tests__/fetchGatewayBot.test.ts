import type { APIGatewayBot, APIGatewayBotSessionStartLimit } from "@fancystudioteam/linkcord-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchGatewayBot } from "../fetchGatewayBot.js";

const GATEWAY_BOT_SESSION_START_LIMIT: APIGatewayBotSessionStartLimit = {
  // biome-ignore lint/style/useNamingConvention:
  max_concurrency: 1,
  remaining: 999,
  // biome-ignore lint/style/useNamingConvention:
  reset_after: 14400000,
  total: 1000,
};
const GATEWAY_BOT_INFORMATION: APIGatewayBot = {
  // biome-ignore lint/style/useNamingConvention:
  session_start_limit: GATEWAY_BOT_SESSION_START_LIMIT,
  shards: 9,
  url: "wss://gateway.discord.gg/",
};

describe("Function: fetchGatewayBot", () => {
  beforeEach(() => {
    const stringifiedGatewayInformation = JSON.stringify(GATEWAY_BOT_INFORMATION);
    const fetchResponse = new Response(stringifiedGatewayInformation);

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);
  });

  it("Given an invalid token as argument, should throw an error.", async () => {
    const token = 123;
    const expectedErrorMessages = ["The provided token is invalid.", 'Expected "string", but received "number".'];
    // @ts-expect-error
    const result = fetchGatewayBot(token);

    await expect(result).rejects.toThrow(expectedErrorMessages.join("\n"));
  });

  it("Given an expired token as argument, should throw an error.", async () => {
    const fetchResponse = new Response("Not authorized", {
      status: 401,
    });

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);

    const token = "ANY_EXPIRED_DISCORD_BOT_TOKEN";
    const expectedErrorMessages = [
      "Failed to get the gateway information for the Discord bot.",
      "The authentication failed due to an invalid token.",
    ];
    const result = fetchGatewayBot(token);

    await expect(result).rejects.toThrow(expectedErrorMessages.join("\n"));
  });

  it("Given a valid token as argument, should return the gateway information object.", async () => {
    const token = "ANY_DISCORD_BOT_TOKEN";
    const result = fetchGatewayBot(token);

    await expect(result).resolves.toStrictEqual(GATEWAY_BOT_INFORMATION);
  });
});
