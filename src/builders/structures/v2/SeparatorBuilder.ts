import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	SeparatorDividerSchema,
	SeparatorSchema,
	SeparatorSpacingSchema,
} from '#builders/schemas/v2/SeparatorSchema.js';
import {
	ComponentType,
	type SeparatorComponent,
	type SeparatorComponentResolvable,
	type SeparatorSpacingSize,
} from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export class SeparatorBuilder extends BuilderBase<SeparatorComponent> {
	constructor(separator?: SeparatorComponentResolvable) {
		if (isInstanceOf(separator, SeparatorBuilder)) {
			separator = separator.toJSON();
		}

		super({
			...validate(SeparatorSchema, separator),
			type: ComponentType.Separator,
		});
	}

	setDivider(divider: boolean): this {
		this._data.divider = validate(SeparatorDividerSchema, divider);

		return this;
	}

	setSpacing(spacing: SeparatorSpacingSize): this {
		this._data.spacing = validate(SeparatorSpacingSchema, spacing);

		return this;
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
	 */
	toJSON(): SeparatorComponent {
		const { _data: separator } = this;
		const validatedData = validate(SeparatorSchema, separator);

		return validatedData;
	}
}
