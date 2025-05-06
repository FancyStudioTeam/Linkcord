import type { APIGatewayBot } from "@fancystudioteam/linkcord-types";

const BOT_PREFIX_REGEX = /^Bot\s/i;

/**
 * Removes the `Bot` prefix from the Discord bot token.
 * @param token - The token to remove the `Bot` prefix.
 * @returns The Discord bot token without the `Bot` prefix.
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
    /**
     * biome-ignore lint/style/useThrowOnlyError: This exception is handled in
     * the `GatewayManager` class and should not be used in any other context.
     */
    throw "Failed to get the gateway information for the Discord bot.";
  }

  const response = (await fetchPromise.json()) as APIGatewayBot;

  return response;
};
