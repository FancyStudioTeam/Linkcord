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
	readonly #data: Partial<SeparatorComponent> = {
		type: ComponentTypes.Separator,
	};

	/**
	 * Sets whether to display a divider between the components.
	 * @param divider - Whether to display a divider between the components.
	 */
	setDivider(divider: boolean): this {
		this.#data.divider = parse(SeparatorDividerSchema, divider);

		return this;
	}

	/**
	 * Sets the size of the spacing of the separator.
	 * @param spacing - The size of the spacing of the separator.
	 */
	setSpacing(spacing: SeparatorSpacingSizes): this {
		this.#data.spacing = parse(SeparatorSpacingSchema, spacing);

		return this;
	}

	/**
	 * Converts the {@link SeparatorBuilder | `SeparatorBuilder`} instance into a {@link SeparatorComponent | `SeparatorComponent`} object.
	 * @returns The {@link SeparatorComponent | `SeparatorComponent`} object.
	 */
	toJSON(): SeparatorComponent {
		const data = this.#data;
		const validatedData = parse(SeparatorSchema, data);

		return validatedData;
	}
}
