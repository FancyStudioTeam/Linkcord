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
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} objects. */
export class SelectMenuDefaultValueBuilder extends BaseBuilder<SelectMenuDefaultValue> {
	/**
	 * Sets the ID of the default value.
	 * @param id - The ID of the default value.
	 */
	setID(id: Snowflake): this {
		this.data.id = parse(SelectMenuDefaultValueIDSchema, id);

		return this;
	}

	/**
	 * Sets the type of the default value.
	 * @param type - The type of the default value.
	 */
	setType(type: SelectMenuDefaultValueTypes): this {
		this.data.type = parse(SelectMenuDefaultValueTypeSchema, type);

		return this;
	}

	/**
	 * Converts the {@link SelectMenuDefaultValueBuilder | `SelectMenuDefaultValueBuilder`} instance into a {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 * @returns The converted {@link SelectMenuDefaultValue | `SelectMenuDefaultValue`} object.
	 */
	toJSON(): SelectMenuDefaultValue {
		const { data } = this;
		const validatedData = parse(SelectMenuDefaultValueSchema, data);

		return validatedData;
	}
}
