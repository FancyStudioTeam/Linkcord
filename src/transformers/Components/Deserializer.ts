import type {
	APISeparatorComponent,
	APITextDisplayComponent,
	APITextInputComponent,
	APIThumbnailComponent,
	APIUnfurledMediaItem,
	SeparatorComponent,
	TextDisplayComponent,
	TextInputComponent,
	ThumbnailComponent,
	UnfurledMediaItem,
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

export function deserializeTextDisplayComponent(
	serializedTextDisplayComponent: APITextDisplayComponent,
): TextDisplayComponent {
	const { content, id, type } = serializedTextDisplayComponent;
	const deserializedTextDisplayComponent: TextDisplayComponent = {
		content,
		type,
	};

	if (id) deserializedTextDisplayComponent.id = id;

	return deserializedTextDisplayComponent;
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

export function deserializeThumbnailComponent(serializedThumbnailComponent: APIThumbnailComponent): ThumbnailComponent {
	const { description, id, media, spoiler, type } = serializedThumbnailComponent;
	const deserializedThumbnailComponent: ThumbnailComponent = {
		media: deserializeUnfurledMediaItem(media),
		type,
	};

	if (description) deserializedThumbnailComponent.description = description;
	if (id) deserializedThumbnailComponent.id = id;
	if (spoiler) deserializedThumbnailComponent.spoiler = spoiler;

	return deserializedThumbnailComponent;
}

export function deserializeUnfurledMediaItem(serializedUnfurledMediaItem: APIUnfurledMediaItem): UnfurledMediaItem {
	const { attachment_id, content_type, height, proxy_url, url, width } = serializedUnfurledMediaItem;
	const deserializedUnfurledMediaItem: UnfurledMediaItem = {
		url,
	};

	if (attachment_id) deserializedUnfurledMediaItem.attachmentId = attachment_id;
	if (content_type) deserializedUnfurledMediaItem.contentType = content_type;
	if (height) deserializedUnfurledMediaItem.height = height;
	if (proxy_url) deserializedUnfurledMediaItem.proxyUrl = proxy_url;
	if (width) deserializedUnfurledMediaItem.width = width;

	return deserializedUnfurledMediaItem;
}
