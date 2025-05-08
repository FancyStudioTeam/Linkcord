const BOT_PREFIX_REGEX = /^Bot\s*/i;

/**
 * Removes the `Bot` prefix from the Discord bot token.
 * @public
 * @param token - The token to remove the `Bot` prefix.
 * @returns The Discord bot token without the `Bot` prefix.
 */
export const replaceBotPrefix = (token: string): string => token.replace(BOT_PREFIX_REGEX, "");
