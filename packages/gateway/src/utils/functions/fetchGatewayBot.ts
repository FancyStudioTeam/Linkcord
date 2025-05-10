import type { APIGatewayBot } from "@fancystudioteam/linkcord-types";
import { replaceBotPrefix } from "./replaceBotPrefix.js";

/**
 * Fetches the gateway information for a Discord bot.
 * @public
 * @param token - The token of the Discord bot.
 * @returns An object containing the gateway information for the Discord bot.
 */
export const fetchGatewayBot = async (token: string): Promise<APIGatewayBot> => {
  if (typeof token !== "string") {
    const typeofToken = typeof token;
    const errorMessage = ["The provided token is invalid.", `Expected "string", but received "${typeofToken}".`].join(
      "\n",
    );

    throw new Error(errorMessage);
  }

  const headers = new Headers();
  const tokenWithoutPrefix = replaceBotPrefix(token);
  const authorization = `Bot ${tokenWithoutPrefix}`;

  headers.set("Authorization", authorization);
  headers.set("Content-Type", "application/json");

  const fetchPromise = await fetch("https://discord.com/api/v10/gateway/bot", {
    headers,
    method: "GET",
  });

  if (!fetchPromise.ok) {
    const errorMessage = "Failed to get the gateway information for the Discord bot.";

    throw new Error(errorMessage);
  }

  const response = (await fetchPromise.json()) as APIGatewayBot;

  return response;
};
