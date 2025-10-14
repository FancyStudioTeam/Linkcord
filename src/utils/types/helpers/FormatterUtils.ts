/**
 * Represents a type that is a recursive array.
 *
 * @typeParam Item - The shape of the item in the array.
 * @group Utils/Helpers
 */
export type RecursiveArray<Item> = readonly (Item | RecursiveArray<Item>)[];

/**
 * Represents the heading levels for headers.
 * @group Utils/Helpers
 */
export enum HeadingLevel {
	One = 1,
	Three = 3,
	Two = 2,
}
