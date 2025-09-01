import { parse } from "valibot";
import {
	SeparatorDividerSchema,
	SeparatorSchema,
	SeparatorSpacingSchema,
} from "#builders/schemas/messages/SeparatorSchema.js";
import {
	ComponentTypes,
	type SeparatorComponent,
	type SeparatorSpacingSizes,
} from "#types/index.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link SeparatorComponent | `SeparatorComponent`} objects. */
export class SeparatorBuilder extends BaseBuilder<SeparatorComponent> {
	/**
	 * Sets whether to display a divider between the components.
	 * @param divider - Whether to display a divider between the components.
	 */
	setDivider(divider: boolean): this {
		this.data.divider = parse(SeparatorDividerSchema, divider);

		return this;
	}

	/**
	 * Sets the size of the spacing of the separator component.
	 * @param spacing - The size of the spacing of the separator component.
	 */
	setSpacing(spacing: SeparatorSpacingSizes): this {
		this.data.spacing = parse(SeparatorSpacingSchema, spacing);

		return this;
	}

	/**
	 * Converts the {@link SeparatorBuilder | `SeparatorBuilder`} instance into a {@link SeparatorComponent | `SeparatorComponent`} object.
	 * @returns The converted {@link SeparatorComponent | `SeparatorComponent`} object.
	 */
	toJSON(): SeparatorComponent {
		const { data } = this;
		const validatedData = parse(SeparatorSchema, {
			...data,
			type: ComponentTypes.Separator,
		});

		return validatedData;
	}
}
