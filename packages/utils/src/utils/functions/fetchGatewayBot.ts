import type { APIGatewayBot } from "@fancystudioteam/linkcord-types";
import { replaceBotPrefix } from "./replaceBotPrefix.js";

const ADDITIONAL_ERROR_MESSAGES: Partial<Record<number, string>> = {
  400: "The request contains invalid JSON.",
  401: "The authentication failed due to an invalid token.",
  403: "The token that you are using does not have permission to access this resource.",
  404: "The resource that you are trying to access does not exist.",
  405: "The method that you are using is not allowed for this endpoint.",
  429: "You are being rate limited.",
};

/**
 * Fetches the gateway information for a Discord bot.
 * @param token - The token to use for the request.
 * @returns An object containing the gateway information for the Discord bot.
 */
export const fetchGatewayBot = async (token: string): Promise<APIGatewayBot> => {
  if (typeof token !== "string") {
    throw new TypeError("The provided token is not a valid string.");
  }

  const headers = new Headers();
  const tokenWithoutPrefix = replaceBotPrefix(token);

  headers.set("Authorization", `Bot ${tokenWithoutPrefix}`);
  headers.set("Content-Type", "application/json");

  const fetchPromise = await fetch("https://discord.com/api/v10/gateway/bot", {
    headers,
    method: "GET",
  });

  if (!fetchPromise.ok) {
    const errorMessages = ["Failed to get the gateway information for the Discord bot."];
    const additionalErrorMessage = ADDITIONAL_ERROR_MESSAGES[fetchPromise.status];

    if (additionalErrorMessage) {
      errorMessages.push(additionalErrorMessage);
    }

    throw new Error(errorMessages.join("\n"));
  }

  const response = (await fetchPromise.json()) as APIGatewayBot;

  return response;
};
