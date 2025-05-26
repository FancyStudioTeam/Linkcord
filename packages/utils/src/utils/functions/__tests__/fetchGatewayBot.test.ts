import type { APIGatewayBot, APIGatewayBotSessionStartLimit } from "@fancystudioteam/linkcord-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchGatewayBot } from "../fetchGatewayBot.js";

const GATEWAY_BOT_SESSION_START_LIMIT: APIGatewayBotSessionStartLimit = {
  max_concurrency: 1,
  remaining: 999,
  reset_after: 14400000,
  total: 1000,
};
const GATEWAY_BOT_INFORMATION: APIGatewayBot = {
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

  it("Throws an 'Error' instance when the provided token is invalid or expired.", async () => {
    const fetchResponse = new Response("Not Authorized", {
      status: 401,
    });
    const expectedErrorMessages = [
      "Failed to get the gateway information for the Discord bot.",
      "The authentication failed due to an invalid token.",
    ];

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);

    await expect(fetchGatewayBot("ANY_EXPIRED_DISCORD_BOT_TOKEN")).rejects.toThrow(expectedErrorMessages.join("\n"));
  });

  it("Runs as expected but throws an 'Error' instance when Discord returns a 5xx status code.", async () => {
    const fetchResponse = new Response("Not Authorized", {
      status: 401,
    });
    const expectedErrorMessage = "Failed to get the gateway information for the Discord bot.";

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);

    await expect(fetchGatewayBot("ANY_DISCORD_BOT_TOKEN")).rejects.toThrow(expectedErrorMessage);
  });

  it("Returns the gateway information object for the Discord bot.", async () =>
    await expect(fetchGatewayBot("ANY_DISCORD_BOT_TOKEN")).resolves.toStrictEqual(GATEWAY_BOT_INFORMATION));
});
