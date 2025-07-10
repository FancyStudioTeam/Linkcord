const BOT_PREFIX_REGEX = /^Bot\s*/i;

export const replaceBotPrefix = (token: string): string => {
	if (typeof token !== "string") {
		throw new TypeError("The provided token is not a valid string.");
	}

	return token.trim().replace(BOT_PREFIX_REGEX, "");
};
