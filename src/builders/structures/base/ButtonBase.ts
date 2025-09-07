import { type ButtonComponent, ComponentTypes } from "#types/index.js";
import { BaseBuilder } from "./BaseBuilder.js";

/** Represents a base class for all button builders. */
export abstract class ButtonBase extends BaseBuilder<ButtonComponent> {
	/**
	 * Creates a new {@link ButtonBase | `ButtonBase`} instance.
	 * @param data - The data of the button to use.
	 */
	constructor(data: Partial<ButtonComponent> = {}) {
		super();

		this.data = {
			...data,
			type: ComponentTypes.Button,
		};
	}
}
