import type { APIGatewayBot } from "@fancystudioteam/linkcord-types";
import { replaceBotPrefix } from "./replaceBotPrefix.js";

/**
 * Fetches the gateway information for a Discord bot.
 * @public
 * @param token - The token of the Discord bot.
 * @returns An object containing the gateway information for the Discord bot.
 */
export const fetchGatewayBot = async (token: string): Promise<APIGatewayBot> => {
  const headers = new Headers();
  const tokenWithoutPrefix = replaceBotPrefix(token);

  headers.set("Authorization", tokenWithoutPrefix);
  headers.set("Content-Type", "application/json");

  const fetchPromise = await fetch("https://discord.com/api/v10/gateway/bot", {
    headers,
    method: "GET",
  });

  if (!fetchPromise.ok) {
    // biome-ignore lint/style/useThrowOnlyError:
    throw "Failed to get the gateway information for the Discord bot.";
  }

  const response = (await fetchPromise.json()) as APIGatewayBot;

  return response;
};
