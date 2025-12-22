import {
	type APIContainerComponent,
	type APIContainerComponents,
	type APIMessageComponent,
	type APISeparatorComponent,
	type APITextDisplayComponent,
	ComponentType,
	type ContainerComponent,
	type ContainerComponents,
	type MessageComponent,
	type SeparatorComponent,
	type TextDisplayComponent,
} from "#types/index.js";

export function serializeContainerComponent(containerComponent: ContainerComponent): APIContainerComponent {
	const { accentColor, components, id, spoiler, type } = containerComponent;
	const serializedContainerComponent: APIContainerComponent = {
		components: serializeContainerComponentsArray(components),
		type,
	};

	if (accentColor) serializedContainerComponent.accent_color = accentColor;
	if (id) serializedContainerComponent.id = id;
	if (spoiler) serializedContainerComponent.spoiler = spoiler;

	return serializedContainerComponent;
}

// @ts-expect-error
export function serializeContainerComponents(containerComponents: ContainerComponents): APIContainerComponents {
	const { type } = containerComponents;

	switch (type) {
		case ComponentType.Separator:
			return serializeSeparatorComponent(containerComponents);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(containerComponents);
	}
}

export function serializeContainerComponentsArray(
	containerComponentsArray: ContainerComponents[],
): APIContainerComponents[] {
	return containerComponentsArray.map(serializeContainerComponents);
}

// @ts-expect-error
export function serializeMessageComponent(messageComponent: MessageComponent): APIMessageComponent {
	const { type } = messageComponent;

	switch (type) {
		case ComponentType.Container:
			return serializeContainerComponent(messageComponent);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(messageComponent);
	}
}

export function serializeMessageComponents(messageComponents: MessageComponent[]): APIMessageComponent[] {
	return messageComponents.map(serializeMessageComponent);
}

export function serializeSeparatorComponent(separatorComponent: SeparatorComponent): APISeparatorComponent {
	const { divider, id, spacing, type } = separatorComponent;
	const serializedSeparatorComponent: APISeparatorComponent = {
		type,
	};

	if (divider) serializedSeparatorComponent.divider = divider;
	if (id) serializedSeparatorComponent.id = id;
	if (spacing) serializedSeparatorComponent.spacing = spacing;

	return serializedSeparatorComponent;
}

export function serializeTextDisplayComponent(textDisplayComponent: TextDisplayComponent): APITextDisplayComponent {
	const { content, id, type } = textDisplayComponent;
	const serializedTextDisplayComponent: APITextDisplayComponent = {
		content,
		type,
	};

	if (id) serializedTextDisplayComponent.id = id;

	return serializedTextDisplayComponent;
}
