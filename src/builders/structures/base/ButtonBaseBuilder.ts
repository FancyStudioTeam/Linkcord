import { type ButtonComponent, ComponentTypes } from "#types/index.js";
import { BaseBuilder } from "./BaseBuilder.js";

export abstract class ButtonBaseBuilder<
	ButtonBuilderData extends ButtonComponent,
> extends BaseBuilder<ButtonBuilderData> {
	constructor(data: Partial<ButtonBuilderData> = {}) {
		super();

		this.data = {
			...data,
			type: ComponentTypes.Button,
		};
	}
}
