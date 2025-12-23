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
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export function deserializeMediaGalleryComponent(
	mediaGalleryComponent: APIMediaGalleryComponent,
): MediaGalleryComponent {
	return {
		id: mediaGalleryComponent.id,
		items: deserializeMediaGalleryItemsArray(mediaGalleryComponent.items),
		type: mediaGalleryComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function deserializeMediaGalleryItem(mediaGalleryItem: APIMediaGalleryItem): MediaGalleryItem {
	return {
		description: mediaGalleryItem.description,
		media: deserializeUnfurledMediaItem(mediaGalleryItem.media),
		spoiler: mediaGalleryItem.spoiler,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function deserializeMediaGalleryItemsArray(mediaGalleryItemsArray: APIMediaGalleryItem[]): MediaGalleryItem[] {
	return mediaGalleryItemsArray.map(deserializeMediaGalleryItem);
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
export function deserializeSeparatorComponent(separatorComponent: APISeparatorComponent): SeparatorComponent {
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
export function deserializeTextDisplayComponent(textDisplayComponent: APITextDisplayComponent): TextDisplayComponent {
	return {
		content: textDisplayComponent.content,
		id: textDisplayComponent.id,
		type: textDisplayComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export function deserializeTextInputComponent(textInputComponent: APITextInputComponent): TextInputComponent {
	return {
		customId: textInputComponent.custom_id,
		id: textInputComponent.id,
		maxLength: textInputComponent.max_length,
		minLength: textInputComponent.min_length,
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
export function deserializeThumbnailComponent(thumbnailComponent: APIThumbnailComponent): ThumbnailComponent {
	return {
		description: thumbnailComponent.description,
		id: thumbnailComponent.id,
		media: deserializeUnfurledMediaItem(thumbnailComponent.media),
		spoiler: thumbnailComponent.spoiler,
		type: thumbnailComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
export function deserializeUnfurledMediaItem(unfurledMediaItem: APIUnfurledMediaItem): UnfurledMediaItem {
	return {
		attachmentId: unfurledMediaItem.attachment_id,
		contentType: unfurledMediaItem.content_type,
		height: unfurledMediaItem.height,
		proxyUrl: unfurledMediaItem.proxy_url,
		url: unfurledMediaItem.url,
		width: unfurledMediaItem.width,
	};
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
