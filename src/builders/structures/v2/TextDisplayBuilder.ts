import { BuilderBase } from '#builders/base/BuilderBase.js';
import { TextDisplayContentSchema, TextDisplayObjectSchema } from '#builders/schemas/v2/TextDisplaySchema.js';
import { ComponentType, type TextDisplayComponent } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export class TextDisplayBuilder extends BuilderBase<TextDisplayComponent> {
	/**
	 * Sets the content of the text display.
	 *
	 * @param content - The content of the text display to set.
	 */
	setContent(content: string): this {
		this.data.content = validate(TextDisplayContentSchema, content);

		return this;
	}

	/**
	 * Converts the current {@link TextDisplayBuilder} instance into a
	 * {@link TextDisplayComponent} structure.
	 *
	 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
	 */
	toJSON(): TextDisplayComponent {
		const { data } = this;
		const validatedData = validate(TextDisplayObjectSchema, {
			...data,
			type: ComponentType.TextDisplay,
		});

		return validatedData;
	}
}
