const BOT_PREFIX_REGEX = /^Bot\s*/i;

/**
 * Removes the `Bot` prefix from the given token.
 *
 * @param token - The token to delete the `Bot` prefix.
 * @returns The token without the `Bot` prefix.
 */
export function transformToken(token: string): string {
	const trimmedToken = token.trim();
	const replacedToken = trimmedToken.replace(BOT_PREFIX_REGEX, "");

	return replacedToken;
}
