import type { APIGatewayBot } from "@fancystudioteam/linkcord-types";

const BOT_PREFIX_REGEX = /^Bot\s/i;

/**
 * Replaces the `Bot ` prefix from the Discord bot token with an empty string.
 * @param token - The token to replace the bot prefix.
 * @returns The replaced Discord bot token.
 */
const replaceBotPrefix = (token: string): string => token.replace(BOT_PREFIX_REGEX, "");

/**
 * Fetches the gateway information for a Discord bot.
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
    throw new Error("Failed to fetch the bot's gateway.");
  }

  const response = (await fetchPromise.json()) as APIGatewayBot;

  return response;
};
