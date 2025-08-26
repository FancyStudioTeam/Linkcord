import { parse } from "valibot";
import {
	SelectMenuDefaultValueIDSchema,
	SelectMenuDefaultValueSchema,
	SelectMenuDefaultValueTypeSchema,
} from "#builders/schemas/selects/SelectMenuDefaultValueSchema.js";
import type {
	SelectMenuDefaultValue,
	SelectMenuDefaultValueTypes,
	Snowflake,
} from "#types/index.js";

/** Utility class for building {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} objects. */
export class SelectMenuDefaultValueBuilder {
	/** The object containing the data of the select menu default value. */
	private readonly __data__: Partial<SelectMenuDefaultValue> = {};

	/**
	 * Sets the ID of the default value.
	 * @param id - The ID of the default value.
	 */
	setID(id: Snowflake): this {
		this.__data__.id = parse(SelectMenuDefaultValueIDSchema, id);

		return this;
	}

	/**
	 * Sets the type of the default value.
	 * @param type - The type of the default value.
	 */
	setType(type: SelectMenuDefaultValueTypes): this {
		this.__data__.type = parse(SelectMenuDefaultValueTypeSchema, type);

		return this;
	}

	/**
	 * Converts the {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance into a {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 * @returns The {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 */
	toJSON(): SelectMenuDefaultValue {
		const { __data__: data } = this;
		const validatedData = parse(SelectMenuDefaultValueSchema, data);

		return validatedData;
	}
}
