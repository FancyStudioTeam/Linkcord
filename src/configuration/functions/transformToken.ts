const BOT_PREFIX_REGEX = /^Bot\s*/i;

export function transformToken(token: string): string {
	const trimmedToken = token.trim();
	const replacedToken = trimmedToken.replace(BOT_PREFIX_REGEX, '');

	return replacedToken;
}
