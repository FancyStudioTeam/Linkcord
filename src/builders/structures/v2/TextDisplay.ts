import { BuilderBase } from '#builders/base/BuilderBase.js';
import { TextDisplayObjectSchema } from '#builders/schemas/v2/TextDisplaySchema.js';
import { ComponentType, type TextDisplayComponent } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export class TextDisplay extends BuilderBase<TextDisplayComponent> {
	setContent(content: string): this {
		this.data.content = content;

		return this;
	}

	/**
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
