import { BuilderBase } from '#builders/base/BuilderBase.js';
import { SeparatorDividerSchema, SeparatorObjectSchema, SeparatorSpacingSchema } from '#builders/schemas/v2/SeparatorSchema.js';
import { ComponentType, type SeparatorComponent, type SeparatorSpacingSize } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export class Separator extends BuilderBase<SeparatorComponent> {
	setDivider(divider: boolean): this {
		this.data.divider = validate(SeparatorDividerSchema, divider);

		return this;
	}

	setSpacing(spacing: SeparatorSpacingSize): this {
		this.data.spacing = validate(SeparatorSpacingSchema, spacing);

		return this;
	}

	toJSON(wrapped?: false): SeparatorComponent;
	toJSON(wrapped: true): [
		SeparatorComponent,
	];

	toJSON(wrapped?: boolean):
		| SeparatorComponent
		| [
				SeparatorComponent,
		  ] {
		const { data } = this;
		const validatedData = validate(SeparatorObjectSchema, {
			...data,
			type: ComponentType.Separator,
		});

		if (wrapped) {
			return [
				validatedData,
			];
		}

		return validatedData;
	}
}
