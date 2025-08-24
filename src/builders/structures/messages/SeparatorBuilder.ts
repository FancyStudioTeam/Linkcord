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

/** Utility class for building {@link SeparatorComponent | `SeparatorComponent`} objects. */
export class SeparatorBuilder {
	/** The object containing the data of the separator component. */
	private readonly __data__: Partial<SeparatorComponent> = {};

	/**
	 * Sets whether to display a divider between the components.
	 * @param divider - Whether to display a divider between the components.
	 */
	setDivider(divider: boolean): this {
		this.__data__.divider = parse(SeparatorDividerSchema, divider);

		return this;
	}

	/**
	 * Sets the size of the spacing of the separator.
	 * @param spacing - The size of the spacing of the separator.
	 */
	setSpacing(spacing: SeparatorSpacingSizes): this {
		this.__data__.spacing = parse(SeparatorSpacingSchema, spacing);

		return this;
	}

	/**
	 * Converts the {@link SeparatorBuilder | `SeparatorBuilder`} instance into an {@link SeparatorComponent | `SeparatorComponent`} object.
	 * @returns The {@link SeparatorComponent | `SeparatorComponent`} object.
	 */
	toJSON(): SeparatorComponent {
		const { __data__: data } = this;
		const validatedData = parse(SeparatorSchema, {
			...data,
			type: ComponentTypes.Separator,
		});

		return validatedData;
	}
}
