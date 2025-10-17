/** Represents a map of levels of headings for headers with their respective literal content. */
export type HeadingLevelsMap<Content extends string> = {
	[HeadingLevel.One]: `# ${Content}`;
	[HeadingLevel.Three]: `### ${Content}`;
	[HeadingLevel.Two]: `## ${Content}`;
};

/**
 * Represents a type that is a recursive array.
 *
 * @typeParam Item - The shape of the item in the array.
 */
export type RecursiveArray<Item> = readonly (Item | RecursiveArray<Item>)[];

/** Represents the levels of headings for headers. */
export enum HeadingLevel {
	One = 1,
	Three = 3,
	Two = 2,
}
