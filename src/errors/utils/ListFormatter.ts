const CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});

/**
 * Formats a list of items using conjunctions.
 *
 * @param items - The items of the list.
 *
 * @returns The formatted list string using conjunctions.
 */
function conjunction(...items: string[]): string {
	const quotedItems = items.map((item) => `"${item}"`);
	const formattedItems = CONJUNCTION_FORMATTER.format(quotedItems);

	return formattedItems;
}

/**
 * Namespace for formatting lists.
 *
 * @internal
 */
export const ListFormatter = {
	conjunction,
};
