import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	TextDisplayContentSchema,
	TextDisplaySchema,
} from '#builders/schemas/v2/TextDisplaySchema.js';
import {
	ComponentType,
	type TextDisplayComponent,
	type TextDisplayComponentResolvable,
} from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export class TextDisplayBuilder extends BuilderBase<TextDisplayComponent> {
	constructor(textDisplay?: TextDisplayComponentResolvable) {
		if (isInstanceOf(textDisplay, TextDisplayBuilder)) {
			textDisplay = textDisplay.toJSON();
		}

		super({
			...validate(TextDisplaySchema, textDisplay),
			type: ComponentType.TextDisplay,
		});
	}

	setContent(content: string): this {
		this._data.content = validate(TextDisplayContentSchema, content);

		return this;
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
	 */
	toJSON(): TextDisplayComponent {
		const { _data: textDisplay } = this;
		const validatedData = validate(TextDisplaySchema, textDisplay);

		return validatedData;
	}
}
