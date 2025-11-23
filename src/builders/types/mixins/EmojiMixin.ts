import type {
	ButtonComponent,
	PartialEmoji,
	PremiumButtonComponent,
	Snowflake,
	StringSelectMenuOption,
} from "#types/index.js";

export type AllowedEmoji = PartialEmoji | string | `<a:${string}:${Snowflake}>` | `<:${string}:${Snowflake}>`;

export type EmojiMixinComponent = Pick<
	Exclude<ButtonComponent, PremiumButtonComponent> | StringSelectMenuOption,
	"emoji"
>;
