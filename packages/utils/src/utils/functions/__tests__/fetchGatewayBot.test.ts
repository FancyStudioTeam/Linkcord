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
/**
 * @remarks
 * - Not a real token. Borrowed from the Discord API documentation.
 */
const DISCORD_TOKEN = "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs";

describe("Function: fetchGatewayBot", () => {
  beforeEach(() => {
    const stringifiedGatewayInformation = JSON.stringify(GATEWAY_BOT_INFORMATION);
    const fetchResponse = new Response(stringifiedGatewayInformation);

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);
  });

  it("Returns the gateway information.", async () =>
    await expect(fetchGatewayBot(DISCORD_TOKEN)).resolves.toStrictEqual(GATEWAY_BOT_INFORMATION));

  it("Throws a 'TypeError' when the token is not a valid string.", async () =>
    // @ts-expect-error
    expect(fetchGatewayBot(null)).rejects.toThrow("The token is not a valid string."));

  it("Throws an 'Error' when Discord returns a '401' status code.", async () => {
    const fetchResponse = new Response("Not Authorized", {
      status: 401,
    });
    const expectedErrorMessages = [
      "Failed to get the gateway information for the Discord bot.",
      "The authentication failed due to an invalid token.",
    ];

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);

    await expect(fetchGatewayBot(DISCORD_TOKEN)).rejects.toThrow(expectedErrorMessages.join("\n"));
  });

  it("Throws an 'Error' when Discord returns a '5xx' status code.", async () => {
    const fetchResponse = new Response("Internal Server Error", {
      status: 500,
    });
    const expectedErrorMessage = "Failed to get the gateway information for the Discord bot.";

    global.fetch = vi.fn().mockResolvedValue(fetchResponse);

    await expect(fetchGatewayBot(DISCORD_TOKEN)).rejects.toThrow(expectedErrorMessage);
  });
});
