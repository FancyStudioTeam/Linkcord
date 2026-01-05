import { BuilderBase } from '#builders/base/BuilderBase.js';
import { TextDisplayContentSchema, TextDisplayObjectSchema } from '#builders/schemas/v2/TextDisplaySchema.js';
import { ComponentType, type TextDisplayComponent } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export class TextDisplay extends BuilderBase<TextDisplayComponent> {
	setContent(content: string): this {
		this.data.content = validate(TextDisplayContentSchema, content);

		return this;
	}

	toJSON(wrapped?: false): TextDisplayComponent;
	toJSON(wrapped: true): [
		TextDisplayComponent,
	];

	toJSON(wrapped?: boolean):
		| TextDisplayComponent
		| [
				TextDisplayComponent,
		  ] {
		const { data } = this;
		const validatedData = validate(TextDisplayObjectSchema, {
			...data,
			type: ComponentType.TextDisplay,
		});

		if (wrapped) {
			return [
				validatedData,
			];
		}

		return validatedData;
	}
}
