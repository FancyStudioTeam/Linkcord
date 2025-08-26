import type {
	ButtonComponent,
	PartialEmoji,
	PremiumButtonComponent,
	Snowflake,
	StringSelectMenuOption,
} from "#types/index.js";

/** Represents an emoji that can be set to a component. */
export type AllowedEmoji =
	| PartialEmoji
	| string
	| `<a:${string}:${Snowflake}>`
	| `<:${string}:${Snowflake}>`;

/** Represents a component that can include an emoji. */
export type EmojiMixinComponent = Pick<
	Exclude<ButtonComponent, PremiumButtonComponent> | StringSelectMenuOption,
	"emoji"
>;
