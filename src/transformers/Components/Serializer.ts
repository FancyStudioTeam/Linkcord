import type {
	APISeparatorComponent,
	APITextInputComponent,
	SeparatorComponent,
	TextInputComponent,
} from "#types/index.js";

export function serializeSeparatorComponent(deserializedSeparatorComponent: SeparatorComponent): APISeparatorComponent {
	const { divider, id, spacing, type } = deserializedSeparatorComponent;
	const serializedSeparatorComponent: APISeparatorComponent = {
		type,
	};

	if (divider) serializedSeparatorComponent.divider = divider;
	if (id) serializedSeparatorComponent.id = id;
	if (spacing) serializedSeparatorComponent.spacing = spacing;

	return serializedSeparatorComponent;
}

export function serializeTextInputComponent(deserializedTextInputComponent: TextInputComponent): APITextInputComponent {
	const { customId, id, maxLength, minLength, placeholder, required, style, type, value } =
		deserializedTextInputComponent;
	const serializedTextInputComponent: APITextInputComponent = {
		custom_id: customId,
		style,
		type,
	};

	if (id) serializedTextInputComponent.id = id;
	if (maxLength) serializedTextInputComponent.max_length = maxLength;
	if (minLength) serializedTextInputComponent.min_length = minLength;
	if (placeholder) serializedTextInputComponent.placeholder = placeholder;
	if (required) serializedTextInputComponent.required = required;
	if (value) serializedTextInputComponent.value = value;

	return serializedTextInputComponent;
}
