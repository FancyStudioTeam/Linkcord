import { TextDisplayContentSchema, TextDisplayObjectSchema } from "#builders/schemas/messages/TextDisplaySchema.js";
import { ComponentTypes, type TextDisplayComponent } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link TextDisplayComponent | `TextDisplayComponent`} objects.
 * @group Builders/Structures
 */
export class TextDisplayBuilder extends BaseBuilder<TextDisplayComponent> {
	/**
	 * Sets the content of the text display component.
	 * @param content - The content of the text display component.
	 */
	setContent(content: string): this {
		this.data.content = validate(TextDisplayContentSchema, content);

		return this;
	}

	/**
	 * Converts the {@link TextDisplayBuilder | `TextDisplayBuilder`} instance into a {@link TextDisplayComponent | `TextDisplayComponent`} object.
	 * @returns The converted {@link TextDisplayComponent | `TextDisplayComponent`} object.
	 */
	toJSON(): TextDisplayComponent {
		const { data } = this;
		const validatedData = validate(TextDisplayObjectSchema, {
			...data,
			type: ComponentTypes.TextDisplay,
		});

		return validatedData;
	}
}
