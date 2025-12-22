import type { APITextInputComponent, TextInputComponent } from "#types/index.js";

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
