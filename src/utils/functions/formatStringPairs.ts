export function formatStringPairs(
	pairs: readonly [
		Key: string,
		Value: string,
	],
	prepend = "",
): string {
	const keyLengths = pairs.map(([{ length: keyLength }]) => keyLength);
	const largestKeyLength = Math.max(...keyLengths);

	const formattedPairs = pairs.map(([key, value]) => `${prepend}${key.padEnd(largestKeyLength)} - ${value}`);
	const formattedPairsString = formattedPairs.join("\n");

	return formattedPairsString;
}
