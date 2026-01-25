import { BuilderBase } from '#builders/base/BuilderBase.js';
import {
	ContainerAccentColorSchema,
	ContainerComponentSchema,
	ContainerSchema,
	ContainerSpoilerSchema,
} from '#builders/schemas/v2/layout/ContainerSchema.js';
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

	/**
	 * @see https://discord.com/developers/docs/components/reference#container-container-structure
	 */
	static from(container: ContainerComponentResolvable): ContainerBuilder {
		return new ContainerBuilder(container);
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

	setSpoiler(isSpoiler: boolean = true): this {
		this._data.spoiler = validate(ContainerSpoilerSchema, isSpoiler);

		return this;
	}

	/**
	 * Transforms the current `ContainerBuilder` instance into a
	 * `ContainerComponent` structure.
	 *
	 * @see https://discord.com/developers/docs/components/reference#container-container-structure
	 */
	toJSON(): ContainerComponent {
		const { _data: container } = this;
		const containerComponent = validate(ContainerSchema, container);

		return containerComponent;
	}
}
