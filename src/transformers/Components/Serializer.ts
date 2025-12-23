import type {
	APIMediaGalleryItem,
	APISeparatorComponent,
	APITextDisplayComponent,
	APITextInputComponent,
	APIThumbnailComponent,
	APIUnfurledMediaItem,
	MediaGalleryItem,
	SeparatorComponent,
	TextDisplayComponent,
	TextInputComponent,
	ThumbnailComponent,
	UnfurledMediaItem,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function serializeMediaGalleryItem(deserializedMediaGalleryItem: MediaGalleryItem): APIMediaGalleryItem {
	const { description, media, spoiler } = deserializedMediaGalleryItem;
	const serializedMediaGalleryItem: APIMediaGalleryItem = {
		media: serializeUnfurledMediaItem(media),
	};

	if (description) serializedMediaGalleryItem.description = description;
	if (spoiler) serializedMediaGalleryItem.spoiler = spoiler;

	return serializedMediaGalleryItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
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
