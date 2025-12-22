import type {
	APISeparatorComponent,
	APITextInputComponent,
	SeparatorComponent,
	TextInputComponent,
} from "#types/index.js";

export function deserializeSeparatorComponent(serializedSeparatorComponent: APISeparatorComponent): SeparatorComponent {
	const { divider, id, spacing, type } = serializedSeparatorComponent;
	const deserializedSeparatorComponent: APISeparatorComponent = {
		type,
	};

	if (divider) deserializedSeparatorComponent.divider = divider;
	if (id) deserializedSeparatorComponent.id = id;
	if (spacing) deserializedSeparatorComponent.spacing = spacing;

	return deserializedSeparatorComponent;
}

export function deserializeTextInputComponent(serializedTextInputComponent: APITextInputComponent): TextInputComponent {
	const { custom_id, id, max_length, min_length, placeholder, required, style, type, value } =
		serializedTextInputComponent;
	const deserializedTextInputComponent: TextInputComponent = {
		customId: custom_id,
		style,
		type,
	};

	if (id) deserializedTextInputComponent.id = id;
	if (max_length) deserializedTextInputComponent.maxLength = max_length;
	if (min_length) deserializedTextInputComponent.minLength = min_length;
	if (placeholder) deserializedTextInputComponent.placeholder = placeholder;
	if (required) deserializedTextInputComponent.required = required;
	if (value) deserializedTextInputComponent.value = value;

	return deserializedTextInputComponent;
}
