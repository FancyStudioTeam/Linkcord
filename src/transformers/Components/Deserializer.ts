import type {
	APIFileUploadComponent,
	APIMediaGalleryItem,
	APISelectMenuDefaultValue,
	APISeparatorComponent,
	APITextDisplayComponent,
	APITextInputComponent,
	APIThumbnailComponent,
	APIUnfurledMediaItem,
	APIUserSelectMenuComponent,
	FileUploadComponent,
	MediaGalleryItem,
	SelectMenuDefaultValue,
	SeparatorComponent,
	TextDisplayComponent,
	TextInputComponent,
	ThumbnailComponent,
	UnfurledMediaItem,
	UserSelectMenuComponent,
} from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export function deserializeFileUploadComponent(fileUploadComponent: APIFileUploadComponent): FileUploadComponent {
	return {
		customId: fileUploadComponent.custom_id,
		id: fileUploadComponent.id,
		maxValues: fileUploadComponent.max_values,
		minValues: fileUploadComponent.min_values,
		required: fileUploadComponent.required,
		type: fileUploadComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function deserializeMediaGalleryItem(serializedMediaGalleryItem: APIMediaGalleryItem): MediaGalleryItem {
	const { description, media, spoiler } = serializedMediaGalleryItem;
	const deserializedMediaGalleryItem: MediaGalleryItem = {
		media: deserializeUnfurledMediaItem(media),
	};

	if (description) deserializedMediaGalleryItem.description = description;
	if (spoiler) deserializedMediaGalleryItem.spoiler = spoiler;

	return deserializedMediaGalleryItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function deserializeSelectMenuDefaultValue(
	selectMenuDefaultValue: APISelectMenuDefaultValue,
): SelectMenuDefaultValue {
	return {
		id: selectMenuDefaultValue.id,
		type: selectMenuDefaultValue.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function deserializeSelectMenuDefaultValuesArray(
	selectMenuDefaultValuesArray: APISelectMenuDefaultValue[],
): SelectMenuDefaultValue[] {
	return selectMenuDefaultValuesArray.map(deserializeSelectMenuDefaultValue);
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
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

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export function deserializeUserSelectMenuComponent(
	userSelectMenuComponent: APIUserSelectMenuComponent,
): UserSelectMenuComponent {
	return {
		customId: userSelectMenuComponent.custom_id,
		defaultValues: deserializeSelectMenuDefaultValuesArray(userSelectMenuComponent.default_values ?? []),
		disabled: userSelectMenuComponent.disabled,
		id: userSelectMenuComponent.id,
		maxValues: userSelectMenuComponent.max_values,
		minValues: userSelectMenuComponent.min_values,
		placeholder: userSelectMenuComponent.placeholder,
		required: userSelectMenuComponent.required,
		type: userSelectMenuComponent.type,
	};
}
