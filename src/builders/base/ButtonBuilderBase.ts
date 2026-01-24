import { ButtonDisabledSchema } from '#builders/schemas/buttons/ButtonSchema.js';
import { type ButtonComponent, ComponentType } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { BuilderBase } from './BuilderBase.js';

export class ButtonBuilderBase<ButtonData extends ButtonComponent> extends BuilderBase<ButtonData> {
	constructor(button?: ButtonData) {
		// @ts-expect-error
		super({
			...button,
			type: ComponentType.Button,
		});
	}

	/**
	 * Sets whether to disable the button.
	 *
	 * @param disabled - Whether to disable the button.
	 */
	setDisabled(disabled: boolean): this {
		this._data.disabled = validate(ButtonDisabledSchema, disabled);

		return this;
	}
}
