import { parse } from "valibot";
import { TextDisplayContentSchema, TextDisplaySchema } from "#builders/schemas/messages/TextDisplaySchema.js";
import type { TextDisplayComponent } from "#types/index.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link TextDisplayComponent | `TextDisplayComponent`} objects. */
export class TextDisplayBuilder extends BaseBuilder<TextDisplayComponent> {
	/**
	 * Sets the content of the text display component.
	 * @param content - The content of the text display component.
	 */
	setContent(content: string): this {
		this.data.content = parse(TextDisplayContentSchema, content);

		return this;
	}

	/**
	 * Converts the {@link TextDisplayBuilder | `TextDisplayBuilder`} instance into a {@link TextDisplayComponent | `TextDisplayComponent`} object.
	 * @returns The converted {@link TextDisplayComponent | `TextDisplayComponent`} object.
	 */
	toJSON(): TextDisplayComponent {
		const { data } = this;
		const validatedData = parse(TextDisplaySchema, data);

		return validatedData;
	}
}
