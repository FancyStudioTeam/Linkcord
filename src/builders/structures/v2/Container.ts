import { BuilderBase } from '#builders/base/BuilderBase.js';
import { ContainerObjectSchema } from '#builders/schemas/v2/ContainerSchema.js';
import { ComponentType, type ContainerComponent } from '#types/index.js';
import { validate } from '#utils/functions/validate.js';
import type { AllowedContainerComponent } from './Container.types.js';

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export class Container extends BuilderBase<ContainerComponent> {
	setAccentColor(accentColor: number): this {
		this.data.accentColor = accentColor;

		return this;
	}

	addComponent(component: AllowedContainerComponent): this {
		this.data.components ??= [];
		this.data.components.push(component.toJSON());

		return this;
	}

	addComponents(components: AllowedContainerComponent[]): this {
		for (const component of components) {
			this.addComponent(component);
		}

		return this;
	}

	toJSON(wrapped?: false): ContainerComponent;
	toJSON(wrapped: true): [
		ContainerComponent,
	];

	toJSON(wrapped?: boolean):
		| ContainerComponent
		| [
				ContainerComponent,
		  ] {
		const { data } = this;
		const validatedData = validate(ContainerObjectSchema, {
			...data,
			type: ComponentType.Container,
		});

		if (wrapped) {
			return [
				validatedData,
			];
		}

		return validatedData;
	}
}
