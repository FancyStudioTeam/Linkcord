import { ButtonDisabledSchema } from '#builders/schemas/v1/interactive/ButtonSchema.js';
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

	setDisabled(isDisabled: boolean): this {
		this._data.disabled = validate(ButtonDisabledSchema, isDisabled);

		return this;
	}
}
