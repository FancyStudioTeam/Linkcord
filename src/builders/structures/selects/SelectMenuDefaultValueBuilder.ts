import {
	SelectMenuDefaultValueIDSchema,
	SelectMenuDefaultValueObjectSchema,
	SelectMenuDefaultValueTypeSchema,
} from "#builders/schemas/selects/SelectMenuDefaultValueSchema.js";
import type { AllowedSelectMenuDefaultValue } from "#builders/types/index.js";
import type { SelectMenuDefaultValue, SelectMenuDefaultValueType, Snowflake } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} objects.
 * @group Builders/Structures
 */
export class SelectMenuDefaultValueBuilder extends BaseBuilder<SelectMenuDefaultValue> {
	/**
	 * Creates a new {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance.
	 * @param selectMenuDefaultValue - The data of the select menu default value.
	 */
	constructor(selectMenuDefaultValue?: AllowedSelectMenuDefaultValue) {
		super(validate(SelectMenuDefaultValueObjectSchema, selectMenuDefaultValue));
	}

	/**
	 * Creates a new {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance using the given select menu default value data.
	 *
	 * @param selectMenuDefaultValue - The data of the select menu default value.
	 * @returns The created {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance
	 */
	static from(selectMenuDefaultValue: AllowedSelectMenuDefaultValue): SelectMenuDefaultValueBuilder {
		return new SelectMenuDefaultValueBuilder(selectMenuDefaultValue);
	}

	/**
	 * Sets the ID of the default value.
	 * @param id - The ID of the default value.
	 */
	setID(id: Snowflake): this {
		this.data.id = validate(SelectMenuDefaultValueIDSchema, id);

		return this;
	}

	/**
	 * Sets the type of the default value.
	 * @param type - The type of the default value.
	 */
	setType(type: SelectMenuDefaultValueType): this {
		this.data.type = validate(SelectMenuDefaultValueTypeSchema, type);

		return this;
	}

	/**
	 * Converts the current {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance into a {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 * @returns The converted {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 */
	toJSON(): SelectMenuDefaultValue {
		const { data } = this;
		const validatedData = validate(SelectMenuDefaultValueObjectSchema, data);

		return validatedData;
	}
}
