import { BuilderBase } from '#builders/base/BuilderBase.js';
import { ContainerAccentColorSchema, ContainerComponentSchema, ContainerSchema } from '#builders/schemas/v2/ContainerSchema.js';
import { ComponentType, type ContainerComponent } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import { isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import type { ContainerComponentsResolvable } from './ContainerBuilder.types.js';

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export class ContainerBuilder extends BuilderBase<ContainerComponent> {
	/**
	 * Adds a component to the container.
	 *
	 * @param component - The instance or structure of the component to add.
	 */
	addComponent(component: ContainerComponentsResolvable): this {
		if (isInstanceOf(component, BuilderBase)) {
			component = component.toJSON();
		}

		const validatedComponent = validate(ContainerComponentSchema, component);

		this.data.components ??= [];
		this.data.components.push(validatedComponent);

		return this;
	}

	/**
	 * Adds one o more components to the container.
	 *
	 * @param components - An array of instances or structures of the components
	 * to add.
	 */
	addComponents(components: ContainerComponentsResolvable[]): this {
		for (const component of components) {
			this.addComponent(component);
		}

		return this;
	}

	/**
	 * Sets the accent color of the container.
	 *
	 * @param accentColor - The accent color of the container to set.
	 */
	setAccentColor(accentColor: number): this {
		this.data.accentColor = validate(ContainerAccentColorSchema, accentColor);

		return this;
	}

	/**
	 * Converts the current {@link ContainerBuilder} instance into a
	 * {@link ContainerComponent} structure.
	 *
	 * @see https://discord.com/developers/docs/components/reference#container-container-structure
	 */
	toJSON(): ContainerComponent {
		const { data } = this;
		const validatedData = validate(ContainerSchema, {
			...data,
			type: ComponentType.Container,
		});

		return validatedData;
	}
}
