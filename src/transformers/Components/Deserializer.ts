import {
	type APIButtonComponent,
	type APIChannelSelectMenuComponent,
	type APIFileUploadComponent,
	type APIInteractiveButtonComponent,
	type APILinkButtonComponent,
	type APIMediaGalleryComponent,
	type APIMediaGalleryItem,
	type APIMentionableSelectMenuComponent,
	type APIPremiumButtonComponent,
	type APIRoleSelectMenuComponent,
	type APISelectMenuDefaultValue,
	type APISeparatorComponent,
	type APITextDisplayComponent,
	type APITextInputComponent,
	type APIThumbnailComponent,
	type APIUnfurledMediaItem,
	type APIUserSelectMenuComponent,
	type ButtonComponent,
	ButtonStyle,
	type ChannelSelectMenuComponent,
	type FileUploadComponent,
	type InteractiveButtonComponent,
	type LinkButtonComponent,
	type MediaGalleryComponent,
	type MediaGalleryItem,
	type MentionableSelectMenuComponent,
	type PremiumButtonComponent,
	type RoleSelectMenuComponent,
	type SelectMenuDefaultValue,
	type SeparatorComponent,
	type TextDisplayComponent,
	type TextInputComponent,
	type ThumbnailComponent,
	type UnfurledMediaItem,
	type UserSelectMenuComponent,
} from "#types/index.js";

/*
 * TODO: Add "emoji" for component transformers.
 */

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeButtonComponent(buttonComponent: APIButtonComponent): ButtonComponent {
	const { style } = buttonComponent;

	switch (style) {
		case ButtonStyle.Link:
			return deserializeLinkButtonComponent(buttonComponent);
		case ButtonStyle.Premium:
			return deserializePremiumButtonComponent(buttonComponent);
		default:
			return deserializeInteractiveButtonComponent(buttonComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export function deserializeChannelSelectMenuComponent(
	channelSelectMenuComponent: APIChannelSelectMenuComponent,
): ChannelSelectMenuComponent {
	return {
		channelTypes: channelSelectMenuComponent.channel_types,
		customId: channelSelectMenuComponent.custom_id,
		defaultValues: deserializeSelectMenuDefaultValuesArray(channelSelectMenuComponent.default_values ?? []),
		disabled: channelSelectMenuComponent.disabled,
		id: channelSelectMenuComponent.id,
		maxValues: channelSelectMenuComponent.max_values,
		minValues: channelSelectMenuComponent.min_values,
		placeholder: channelSelectMenuComponent.placeholder,
		required: channelSelectMenuComponent.required,
		type: channelSelectMenuComponent.type,
	};
}

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
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeInteractiveButtonComponent(
	interactiveButtonComponent: APIInteractiveButtonComponent,
): InteractiveButtonComponent {
	return {
		customId: interactiveButtonComponent.custom_id,
		disabled: interactiveButtonComponent.disabled,
		id: interactiveButtonComponent.id,
		label: interactiveButtonComponent.label,
		style: interactiveButtonComponent.style,
		type: interactiveButtonComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeLinkButtonComponent(linkButtonComponent: APILinkButtonComponent): LinkButtonComponent {
	return {
		disabled: linkButtonComponent.disabled,
		id: linkButtonComponent.id,
		label: linkButtonComponent.label,
		style: linkButtonComponent.style,
		type: linkButtonComponent.type,
		url: linkButtonComponent.url,
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
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export function deserializeMentionableSelectMenuComponent(
	mentionableSelectMenuComponent: APIMentionableSelectMenuComponent,
): MentionableSelectMenuComponent {
	return {
		customId: mentionableSelectMenuComponent.custom_id,
		defaultValues: deserializeSelectMenuDefaultValuesArray(mentionableSelectMenuComponent.default_values ?? []),
		disabled: mentionableSelectMenuComponent.disabled,
		id: mentionableSelectMenuComponent.id,
		maxValues: mentionableSelectMenuComponent.max_values,
		minValues: mentionableSelectMenuComponent.min_values,
		placeholder: mentionableSelectMenuComponent.placeholder,
		required: mentionableSelectMenuComponent.required,
		type: mentionableSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export function deserializeRoleSelectMenuComponent(
	roleSelectMenuComponent: APIRoleSelectMenuComponent,
): RoleSelectMenuComponent {
	return {
		customId: roleSelectMenuComponent.custom_id,
		defaultValues: deserializeSelectMenuDefaultValuesArray(roleSelectMenuComponent.default_values ?? []),
		disabled: roleSelectMenuComponent.disabled,
		id: roleSelectMenuComponent.id,
		maxValues: roleSelectMenuComponent.max_values,
		minValues: roleSelectMenuComponent.min_values,
		placeholder: roleSelectMenuComponent.placeholder,
		required: roleSelectMenuComponent.required,
		type: roleSelectMenuComponent.type,
	};
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
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializePremiumButtonComponent(
	premiumButtonComponent: APIPremiumButtonComponent,
): PremiumButtonComponent {
	return {
		disabled: premiumButtonComponent.disabled,
		id: premiumButtonComponent.id,
		skuId: premiumButtonComponent.sku_id,
		style: premiumButtonComponent.style,
		type: premiumButtonComponent.type,
	};
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
