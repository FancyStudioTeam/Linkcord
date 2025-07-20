const CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});

/**
 * Utility class for formatting lists.
 *
 * @internal
 */
export class ListFormatter {
	/**
	 * Formats a list of items using conjunction format.
	 *
	 * @param items - The items to format.
	 *
	 * @returns The formatted list string using conjunction format.
	 */
	static conjunction(items: string[]): string {
		const quotedItems = items.map((item) => `"${item}"`);
		const formattedItems = CONJUNCTION_FORMATTER.format(quotedItems);

		return formattedItems;
	}
}
