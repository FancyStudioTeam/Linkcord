import { normalizeArray } from "#builders/functions/normalizeArray.js";
import {
	ContainerAccentColorSchema,
	ContainerComponentSchema,
	ContainerComponentsSchema,
	ContainerObjectSchema,
	ContainerSpoilerSchema,
} from "#builders/schemas/messages/ContainerSchema.js";
import type { AllowedContainerAccentColor, AllowedContainerComponent, RestOrArray } from "#builders/types/index.js";
import { ComponentTypes, type ContainerComponent } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link ContainerComponent | `ContainerComponent`} objects.
 * @group Builders/Structures
 */
export class ContainerBuilder extends BaseBuilder<ContainerComponent> {
	/**
	 * Adds a component to the container.
	 * @param component - The component of the container to add.
	 */
	addComponent(component: AllowedContainerComponent): this {
		const validatedComponent = validate(ContainerComponentSchema, component);

		this.data.components ??= [];
		this.data.components.push(validatedComponent);

		return this;
	}

	/**
	 * Adds components to the container.
	 * @param components - The components of the container to add.
	 */
	addComponents(...components: RestOrArray<AllowedContainerComponent>): this {
		const normalizedComponents = normalizeArray(...components);

		for (const component of normalizedComponents) {
			this.addComponent(component);
		}

		return this;
	}

	/**
	 * Sets the accent color of the container.
	 * @param accentColor - The accent color of the container.
	 */
	setAccentColor(accentColor: AllowedContainerAccentColor): this {
		this.data.accentColor = validate(ContainerAccentColorSchema, accentColor);

		return this;
	}

	/**
	 * Sets the components of the container.
	 * @param components - The components of the container.
	 */
	setComponents(...components: RestOrArray<AllowedContainerComponent>): this {
		const normalizedComponents = normalizeArray(components);
		const validatedComponents = validate(ContainerComponentsSchema, normalizedComponents);

		this.data.components = validatedComponents;

		return this;
	}

	/**
	 * Sets whether the container is a spoiler.
	 * @param spoiler - Whether the container is a spoiler.
	 */
	setSpoiler(spoiler: boolean = true): this {
		this.data.spoiler = validate(ContainerSpoilerSchema, spoiler);

		return this;
	}

	/**
	 * Converts the {@link ContainerBuilder | `ContainerBuilder`} instance into a {@link ContainerComponent | `ContainerComponent`} object.
	 * @returns The converted {@link ContainerComponent | `ContainerComponent`} object.
	 */
	toJSON(): ContainerComponent {
		const { data } = this;
		const validatedData = validate(ContainerObjectSchema, {
			...data,
			type: ComponentTypes.Container,
		});

		return validatedData;
	}
}
