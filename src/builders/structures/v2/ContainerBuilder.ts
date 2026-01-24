import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	ContainerAccentColorSchema,
	ContainerComponentSchema,
	ContainerSchema,
} from '#builders/schemas/v2/ContainerSchema.js';
import {
	ComponentType,
	type ContainerChildComponentResolvable,
	type ContainerComponent,
	type ContainerComponentResolvable,
} from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export class ContainerBuilder extends BuilderBase<ContainerComponent> {
	constructor(container?: ContainerComponentResolvable) {
		if (isInstanceOf(container, ContainerBuilder)) {
			container = container.toJSON();
		}

		super({
			...validate(ContainerSchema, container),
			type: ComponentType.Container,
		});
	}

	addComponent(component: ContainerChildComponentResolvable): this {
		if (isInstanceOf(component, BuilderBase)) {
			component = component.toJSON();
		}

		const validatedComponent = validate(ContainerComponentSchema, component);

		this._data.components ??= [];
		this._data.components.push(validatedComponent);

		return this;
	}

	addComponents(components: ContainerChildComponentResolvable[]): this {
		for (const component of components) {
			this.addComponent(component);
		}

		return this;
	}

	setAccentColor(accentColor: number): this {
		this._data.accentColor = validate(ContainerAccentColorSchema, accentColor);

		return this;
	}

	/**
	 * @see https://discord.com/developers/docs/components/reference#container-container-structure
	 */
	toJSON(): ContainerComponent {
		const { _data: container } = this;
		const validatedData = validate(ContainerSchema, container);

		return validatedData;
	}
}
