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

export function serializeTextDisplayComponent(
	deserializedTextDisplayComponent: TextDisplayComponent,
): APITextDisplayComponent {
	const { content, id, type } = deserializedTextDisplayComponent;
	const serializedTextDisplayComponent: TextDisplayComponent = {
		content,
		type,
	};

	if (id) serializedTextDisplayComponent.id = id;

	return serializedTextDisplayComponent;
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

export function serializeThumbnailComponent(deserializedThumbnailComponent: ThumbnailComponent): APIThumbnailComponent {
	const { description, id, media, spoiler, type } = deserializedThumbnailComponent;
	const serializedThumbnailComponent: APIThumbnailComponent = {
		media: serializeUnfurledMediaItem(media),
		type,
	};

	if (description) serializedThumbnailComponent.description = description;
	if (id) serializedThumbnailComponent.id = id;
	if (spoiler) serializedThumbnailComponent.spoiler = spoiler;

	return serializedThumbnailComponent;
}

export function serializeUnfurledMediaItem(deserializedUnfurledMediaItem: UnfurledMediaItem): APIUnfurledMediaItem {
	const { attachmentId, contentType, height, proxyUrl, url, width } = deserializedUnfurledMediaItem;
	const serializedUnfurledMediaItem: APIUnfurledMediaItem = {
		url,
	};

	if (attachmentId) serializedUnfurledMediaItem.attachment_id = attachmentId;
	if (contentType) serializedUnfurledMediaItem.content_type = contentType;
	if (height) serializedUnfurledMediaItem.height = height;
	if (proxyUrl) serializedUnfurledMediaItem.proxy_url = proxyUrl;
	if (width) serializedUnfurledMediaItem.width = width;

	return serializedUnfurledMediaItem;
}
