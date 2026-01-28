import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	SeparatorDividerSchema,
	SeparatorSchema,
	SeparatorSpacingSchema,
} from '#builders/schemas/v2/layout/SeparatorSchema.js';
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

	/**
	 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
	 */
	static from(separator: SeparatorComponentResolvable): SeparatorBuilder {
		return new SeparatorBuilder(separator);
	}

	setDivider(isDivider: boolean = true): this {
		this._data.divider = validate(SeparatorDividerSchema, isDivider);

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
		const separatorData = this._data;
		const separatorComponent = validate(SeparatorSchema, separatorData);

		return separatorComponent;
	}
}
