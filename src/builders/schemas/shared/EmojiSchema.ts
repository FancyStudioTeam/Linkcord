import { boolean, nullable, object, optional, string } from "valibot";

export const EmojiAnimatedSchema = boolean();
export const EmojiIDSchema = string();
export const EmojiNameSchema = string();

export const EmojiSchema = object({
	animated: optional(nullable(EmojiAnimatedSchema)),
	id: optional(nullable(EmojiIDSchema)),
	name: optional(nullable(EmojiNameSchema)),
});
