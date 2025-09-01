import { parse } from "valibot";
import { normalizeArray } from "#builders/functions/normalizeArray.js";
import {
	ContainerAccentColorSchema,
	ContainerComponentSchema,
	ContainerComponentsSchema,
	ContainerSchema,
	ContainerSpoilerSchema,
} from "#builders/schemas/messages/ContainerSchema.js";
import type {
	AllowedContainerAccentColor,
	AllowedContainerComponent,
	RestOrArray,
} from "#builders/types/index.js";
import { ComponentTypes, type ContainerComponent } from "#types/index.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link ContainerComponent | `ContainerComponent`} objects. */
export class ContainerBuilder extends BaseBuilder<ContainerComponent> {
	/**
	 * Adds a component to the container.
	 * @param component - The component of the container to add.
	 */
	addComponent(component: AllowedContainerComponent): this {
		const validatedComponent = parse(ContainerComponentSchema, component);

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
		this.data.accentColor = parse(ContainerAccentColorSchema, accentColor);

		return this;
	}

	/**
	 * Sets the components of the container.
	 * @param components - The components of the container.
	 */
	setComponents(...components: RestOrArray<AllowedContainerComponent>): this {
		const normalizedComponents = normalizeArray(components);
		const validatedComponents = parse(ContainerComponentsSchema, normalizedComponents);

		this.data.components = validatedComponents;

		return this;
	}

	/**
	 * Sets whether the container is a spoiler.
	 * @param spoiler - Whether the container is a spoiler.
	 */
	setSpoiler(spoiler: boolean): this {
		this.data.spoiler = parse(ContainerSpoilerSchema, spoiler);

		return this;
	}

	/**
	 * Converts the {@link ContainerBuilder | `ContainerBuilder`} instance into a {@link ContainerComponent | `ContainerComponent`} object.
	 * @returns The {@link ContainerComponent | `ContainerComponent`} object.
	 */
	toJSON(): ContainerComponent {
		const { data } = this;
		const validatedData = parse(ContainerSchema, {
			...data,
			type: ComponentTypes.Container,
		});

		return validatedData;
	}
}
