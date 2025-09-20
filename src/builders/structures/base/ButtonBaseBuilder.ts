import { type ButtonComponent, ComponentTypes } from "#types/index.js";
import { BaseBuilder } from "./BaseBuilder.js";

/**
 * Represents a base class for all button builder structures.
 *
 * @typeParam ButtonBuilderData - The type of the data of the button builder.
 * @group Builders/Structures
 */
export abstract class ButtonBaseBuilder<
	ButtonBuilderData extends ButtonComponent,
> extends BaseBuilder<ButtonBuilderData> {
	/**
	 * Creates a new {@link ButtonBase | `ButtonBase`} instance.
	 * @param data - The data of the button to use.
	 */
	constructor(data: Partial<ButtonBuilderData> = {}) {
		super();

		this.data = {
			...data,
			type: ComponentTypes.Button,
		};
	}
}
