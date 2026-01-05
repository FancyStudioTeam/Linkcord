import { BuilderBase } from '#builders/base/BuilderBase.js';
import { SeparatorDividerSchema, SeparatorObjectSchema, SeparatorSpacingSchema } from '#builders/schemas/v2/SeparatorSchema.js';
import { ComponentType, type SeparatorComponent, type SeparatorSpacingSize } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export class SeparatorBuilder extends BuilderBase<SeparatorComponent> {
	/**
	 * Sets whether to display a visual divider.
	 *
	 * @param divider - Whether to display a visual divider.
	 */
	setDivider(divider: boolean): this {
		this.data.divider = validate(SeparatorDividerSchema, divider);

		return this;
	}

	/**
	 * Sets the spacing size of the separator.
	 *
	 * @param spacing - The spacing size of the separator to set.
	 */
	setSpacing(spacing: SeparatorSpacingSize): this {
		this.data.spacing = validate(SeparatorSpacingSchema, spacing);

		return this;
	}

	/**
	 * Converts the current {@link SeparatorBuilder} instance into a
	 * {@link SeparatorComponent} structure.
	 *
	 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
	 */
	toJSON(): SeparatorComponent {
		const { data } = this;
		const validatedData = validate(SeparatorObjectSchema, {
			...data,
			type: ComponentType.Separator,
		});

		return validatedData;
	}
}
