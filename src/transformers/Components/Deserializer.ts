import {
	type ActionRowComponent,
	type ActionRowComponents,
	type APIActionRowComponent,
	type APIActionRowComponents,
	type APIButtonComponent,
	type APIChannelSelectMenuComponent,
	type APIContainerComponent,
	type APIContainerComponents,
	type APIFileComponent,
	type APIFileUploadComponent,
	type APIInteractiveButtonComponent,
	type APILabelComponent,
	type APILabelComponents,
	type APILinkButtonComponent,
	type APIMediaGalleryComponent,
	type APIMediaGalleryItem,
	type APIMentionableSelectMenuComponent,
	type APIPremiumButtonComponent,
	type APIRoleSelectMenuComponent,
	type APISectionAccessory,
	type APISectionComponent,
	type APISectionComponents,
	type APISelectMenuComponent,
	type APISelectMenuDefaultValue,
	type APISeparatorComponent,
	type APIStringSelectMenuComponent,
	type APIStringSelectMenuOption,
	type APITextDisplayComponent,
	type APITextInputComponent,
	type APIThumbnailComponent,
	type APIUnfurledMediaItem,
	type APIUserSelectMenuComponent,
	type ButtonComponent,
	ButtonStyle,
	type ChannelSelectMenuComponent,
	ComponentType,
	type ContainerComponent,
	type ContainerComponents,
	type FileComponent,
	type FileUploadComponent,
	type InteractiveButtonComponent,
	type LabelComponent,
	type LabelComponents,
	type LinkButtonComponent,
	type MediaGalleryComponent,
	type MediaGalleryItem,
	type MentionableSelectMenuComponent,
	type PremiumButtonComponent,
	type RoleSelectMenuComponent,
	type SectionAccessory,
	type SectionComponent,
	type SectionComponents,
	type SelectMenuComponent,
	type SelectMenuDefaultValue,
	type SeparatorComponent,
	type StringSelectMenuComponent,
	type StringSelectMenuOption,
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
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export function deserializeActionRowComponent(actionRowComponent: APIActionRowComponent): ActionRowComponent {
	return {
		components: deserializeActionRowComponentsArray(actionRowComponent.components),
		id: actionRowComponent.id,
		type: actionRowComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function deserializeActionRowComponents(actionRowComponents: APIActionRowComponents): ActionRowComponents {
	const { type } = actionRowComponents;

	switch (type) {
		case ComponentType.Button:
			return deserializeButtonComponent(actionRowComponents);
		default:
			return deserializeSelectMenuComponent(actionRowComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function deserializeActionRowComponentsArray(
	actionRowComponentsArray: APIActionRowComponents[],
): ActionRowComponents[] {
	return actionRowComponentsArray.map(deserializeActionRowComponents);
}

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
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export function deserializeContainerComponent(containerComponent: APIContainerComponent): ContainerComponent {
	return {
		accentColor: containerComponent.accent_color,
		components: deserializeContainerComponentsArray(containerComponent.components),
		id: containerComponent.id,
		spoiler: containerComponent.spoiler,
		type: containerComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function deserializeContainerComponents(containerComponents: APIContainerComponents): ContainerComponents {
	const { type } = containerComponents;

	switch (type) {
		case ComponentType.ActionRow:
			return deserializeActionRowComponent(containerComponents);
		case ComponentType.File:
			return deserializeFileComponent(containerComponents);
		case ComponentType.MediaGallery:
			return deserializeMediaGalleryComponent(containerComponents);
		case ComponentType.Section:
			return deserializeSectionComponent(containerComponents);
		case ComponentType.Separator:
			return deserializeSeparatorComponent(containerComponents);
		case ComponentType.TextDisplay:
			return deserializeTextDisplayComponent(containerComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function deserializeContainerComponentsArray(
	containerComponentsArray: APIContainerComponents[],
): ContainerComponents[] {
	return containerComponentsArray.map(deserializeContainerComponents);
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export function deserializeFileComponent(fileComponent: APIFileComponent): FileComponent {
	return {
		file: deserializeUnfurledMediaItem(fileComponent.file),
		id: fileComponent.id,
		name: fileComponent.name,
		size: fileComponent.size,
		spoiler: fileComponent.spoiler,
		type: fileComponent.type,
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
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export function deserializeLabelComponent(labelComponent: APILabelComponent): LabelComponent {
	return {
		component: deserializeLabelComponents(labelComponent.component),
		description: labelComponent.description,
		id: labelComponent.id,
		label: labelComponent.label,
		type: labelComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export function deserializeLabelComponents(labelComponents: APILabelComponents): LabelComponents {
	const { type } = labelComponents;

	switch (type) {
		case ComponentType.FileUpload:
			return deserializeFileUploadComponent(labelComponents);
		case ComponentType.TextInput:
			return deserializeTextInputComponent(labelComponents);
		default:
			return deserializeSelectMenuComponent(labelComponents);
	}
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
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export function deserializeSectionAccessory(sectionAccessory: APISectionAccessory): SectionAccessory {
	const { type } = sectionAccessory;

	switch (type) {
		case ComponentType.Button:
			return deserializeButtonComponent(sectionAccessory);
		case ComponentType.Thumbnail:
			return deserializeThumbnailComponent(sectionAccessory);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export function deserializeSectionComponent(sectionComponent: APISectionComponent): SectionComponent {
	return {
		accessory: deserializeSectionAccessory(sectionComponent.accessory),
		components: deserializeSectionComponentsArray(sectionComponent.components),
		id: sectionComponent.id,
		type: sectionComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function deserializeSectionComponents(sectionComponents: APISectionComponents): SectionComponents {
	const { type } = sectionComponents;

	switch (type) {
		case ComponentType.TextDisplay:
			return deserializeTextDisplayComponent(sectionComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function deserializeSectionComponentsArray(sectionComponentsArray: APISectionComponents[]): SectionComponents[] {
	return sectionComponentsArray.map(deserializeSectionComponents);
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function deserializeSelectMenuComponent(selectMenuComponent: APISelectMenuComponent): SelectMenuComponent {
	const { type } = selectMenuComponent;

	switch (type) {
		case ComponentType.ChannelSelect:
			return deserializeChannelSelectMenuComponent(selectMenuComponent);
		case ComponentType.MentionableSelect:
			return deserializeMentionableSelectMenuComponent(selectMenuComponent);
		case ComponentType.RoleSelect:
			return deserializeRoleSelectMenuComponent(selectMenuComponent);
		case ComponentType.StringSelect:
			return deserializeStringSelectMenuComponent(selectMenuComponent);
		case ComponentType.UserSelect:
			return deserializeUserSelectMenuComponent(selectMenuComponent);
	}
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
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function deserializeStringSelectMenuComponent(
	stringSelectMenuComponent: APIStringSelectMenuComponent,
): StringSelectMenuComponent {
	return {
		customId: stringSelectMenuComponent.custom_id,
		disabled: stringSelectMenuComponent.disabled,
		id: stringSelectMenuComponent.id,
		maxValues: stringSelectMenuComponent.max_values,
		minValues: stringSelectMenuComponent.min_values,
		options: deserializeStringSelectMenuOptionsArray(stringSelectMenuComponent.options),
		placeholder: stringSelectMenuComponent.placeholder,
		required: stringSelectMenuComponent.required,
		type: stringSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function deserializeStringSelectMenuOption(
	stringSelectMenuOption: APIStringSelectMenuOption,
): StringSelectMenuOption {
	return {
		default: stringSelectMenuOption.default,
		description: stringSelectMenuOption.description,
		label: stringSelectMenuOption.label,
		value: stringSelectMenuOption.value,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function deserializeStringSelectMenuOptionsArray(
	stringSelectMenuOptionsArray: StringSelectMenuOption[],
): APIStringSelectMenuOption[] {
	return stringSelectMenuOptionsArray.map(deserializeStringSelectMenuOption);
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
