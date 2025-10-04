const BOT_PREFIX_REGEX = /^Bot\s*/i;

/**
 * Removes the `Bot` prefix from the given token.
 *
 * @param token - The token where the `Bot` prefix will be removed.
 * @returns The token without the `Bot` prefix.
 *
 * @group Configuration/Functions
 */
export function transformToken(token: string): string {
	const trimmedToken = token.trim();
	const replacedToken = trimmedToken.replace(BOT_PREFIX_REGEX, "");

	return replacedToken;
}
