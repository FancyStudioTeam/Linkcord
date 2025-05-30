const BOT_PREFIX_REGEX = /^Bot\s*/i;

/**
 * Removes the `Bot` prefix from the Discord bot token if the prefix exists.
 *
 * @param token - The token to remove the `Bot` prefix.
 * @returns The Discord bot token without the `Bot` prefix.
 */
export const replaceBotPrefix = (token: string): string => {
  if (typeof token !== "string") {
    throw new TypeError("The provided token is not a valid string.");
  }

  return token.trim().replace(BOT_PREFIX_REGEX, "");
};
