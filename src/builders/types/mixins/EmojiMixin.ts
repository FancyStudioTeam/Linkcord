import type { PartialEmoji, Snowflake } from "#types/index.js";

/** Represents an emoji that can be set to a component. */
export type AllowedEmoji =
	| PartialEmoji
	| string
	| `<a:${string}:${Snowflake}>`
	| `<:${string}:${Snowflake}>`;
