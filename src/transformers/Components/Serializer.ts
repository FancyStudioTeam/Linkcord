import type {
	APIFileUploadComponent,
	APIMediaGalleryComponent,
	APIMediaGalleryItem,
	APISelectMenuDefaultValue,
	APISeparatorComponent,
	APITextDisplayComponent,
	APITextInputComponent,
	APIThumbnailComponent,
	APIUnfurledMediaItem,
	APIUserSelectMenuComponent,
	FileUploadComponent,
	MediaGalleryComponent,
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
export function serializeFileUploadComponent(fileUploadComponent: FileUploadComponent): APIFileUploadComponent {
	return {
		custom_id: fileUploadComponent.customId,
		id: fileUploadComponent.id,
		max_values: fileUploadComponent.maxValues,
		min_values: fileUploadComponent.minValues,
		required: fileUploadComponent.required,
		type: fileUploadComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export function serializeMediaGalleryComponent(mediaGalleryComponent: MediaGalleryComponent): APIMediaGalleryComponent {
	return {
		id: mediaGalleryComponent.id,
		items: serializeMediaGalleryItemsArray(mediaGalleryComponent.items),
		type: mediaGalleryComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function serializeMediaGalleryItem(mediaGalleryItem: MediaGalleryItem): APIMediaGalleryItem {
	return {
		description: mediaGalleryItem.description,
		media: serializeUnfurledMediaItem(mediaGalleryItem.media),
		spoiler: mediaGalleryItem.spoiler,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function serializeMediaGalleryItemsArray(mediaGalleryItemsArray: MediaGalleryItem[]): APIMediaGalleryItem[] {
	return mediaGalleryItemsArray.map(serializeMediaGalleryItem);
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function serializeSelectMenuDefaultValue(
	selectMenuDefaultValue: SelectMenuDefaultValue,
): APISelectMenuDefaultValue {
	return {
		id: selectMenuDefaultValue.id,
		type: selectMenuDefaultValue.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function serializeSelectMenuDefaultValuesArray(
	selectMenuDefaultValuesArray: SelectMenuDefaultValue[],
): APISelectMenuDefaultValue[] {
	return selectMenuDefaultValuesArray.map(serializeSelectMenuDefaultValue);
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export function serializeSeparatorComponent(separatorComponent: SeparatorComponent): APISeparatorComponent {
	return {
		divider: separatorComponent.divider,
		id: separatorComponent.id,
		spacing: separatorComponent.spacing,
		type: separatorComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export function serializeTextDisplayComponent(textDisplayComponent: TextDisplayComponent): APITextDisplayComponent {
	return {
		content: textDisplayComponent.content,
		id: textDisplayComponent.id,
		type: textDisplayComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export function serializeTextInputComponent(textInputComponent: TextInputComponent): APITextInputComponent {
	return {
		custom_id: textInputComponent.customId,
		id: textInputComponent.id,
		max_length: textInputComponent.maxLength,
		min_length: textInputComponent.minLength,
		placeholder: textInputComponent.placeholder,
		required: textInputComponent.required,
		style: textInputComponent.style,
		type: textInputComponent.type,
		value: textInputComponent.value,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export function serializeThumbnailComponent(thumbnailComponent: ThumbnailComponent): APIThumbnailComponent {
	return {
		description: thumbnailComponent.description,
		id: thumbnailComponent.id,
		media: serializeUnfurledMediaItem(thumbnailComponent.media),
		spoiler: thumbnailComponent.spoiler,
		type: thumbnailComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
export function serializeUnfurledMediaItem(unfurledMediaItem: UnfurledMediaItem): APIUnfurledMediaItem {
	return {
		attachment_id: unfurledMediaItem.attachmentId,
		content_type: unfurledMediaItem.contentType,
		height: unfurledMediaItem.height,
		proxy_url: unfurledMediaItem.proxyUrl,
		url: unfurledMediaItem.url,
		width: unfurledMediaItem.width,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export function serializeUserSelectMenuComponent(
	userSelectMenuComponent: UserSelectMenuComponent,
): APIUserSelectMenuComponent {
	return {
		custom_id: userSelectMenuComponent.customId,
		default_values: serializeSelectMenuDefaultValuesArray(userSelectMenuComponent.defaultValues ?? []),
		disabled: userSelectMenuComponent.disabled,
		id: userSelectMenuComponent.id,
		max_values: userSelectMenuComponent.maxValues,
		min_values: userSelectMenuComponent.minValues,
		placeholder: userSelectMenuComponent.placeholder,
		required: userSelectMenuComponent.required,
		type: userSelectMenuComponent.type,
	};
}
