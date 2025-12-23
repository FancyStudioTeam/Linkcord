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
	type APIMessageComponent,
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
	type MessageComponent,
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
export function serializeActionRowComponent(actionRowComponent: ActionRowComponent): APIActionRowComponent {
	return {
		components: serializeActionRowComponentsArray(actionRowComponent.components),
		id: actionRowComponent.id,
		type: actionRowComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function serializeActionRowComponents(actionRowComponents: ActionRowComponents): APIActionRowComponents {
	const { type } = actionRowComponents;

	switch (type) {
		case ComponentType.Button:
			return serializeButtonComponent(actionRowComponents);
		default:
			return serializeSelectMenuComponent(actionRowComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function serializeActionRowComponentsArray(actionRowComponentsArray: ActionRowComponents[]): APIActionRowComponents[] {
	return actionRowComponentsArray.map(serializeActionRowComponents);
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeButtonComponent(buttonComponent: ButtonComponent): APIButtonComponent {
	const { style } = buttonComponent;

	switch (style) {
		case ButtonStyle.Link:
			return serializeLinkButtonComponent(buttonComponent);
		case ButtonStyle.Premium:
			return serializePremiumButtonComponent(buttonComponent);
		default:
			return serializeInteractiveButtonComponent(buttonComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export function serializeChannelSelectMenuComponent(channelSelectMenuComponent: ChannelSelectMenuComponent): APIChannelSelectMenuComponent {
	return {
		channel_types: channelSelectMenuComponent.channelTypes,
		custom_id: channelSelectMenuComponent.customId,
		default_values: serializeSelectMenuDefaultValuesArray(channelSelectMenuComponent.defaultValues ?? []),
		disabled: channelSelectMenuComponent.disabled,
		id: channelSelectMenuComponent.id,
		max_values: channelSelectMenuComponent.maxValues,
		min_values: channelSelectMenuComponent.minValues,
		placeholder: channelSelectMenuComponent.placeholder,
		required: channelSelectMenuComponent.required,
		type: channelSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export function serializeContainerComponent(containerComponent: ContainerComponent): APIContainerComponent {
	return {
		accent_color: containerComponent.accentColor,
		components: serializeContainerComponentsArray(containerComponent.components),
		id: containerComponent.id,
		spoiler: containerComponent.spoiler,
		type: containerComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function serializeContainerComponents(containerComponents: ContainerComponents): APIContainerComponents {
	const { type } = containerComponents;

	switch (type) {
		case ComponentType.ActionRow:
			return serializeActionRowComponent(containerComponents);
		case ComponentType.File:
			return serializeFileComponent(containerComponents);
		case ComponentType.MediaGallery:
			return serializeMediaGalleryComponent(containerComponents);
		case ComponentType.Section:
			return serializeSectionComponent(containerComponents);
		case ComponentType.Separator:
			return serializeSeparatorComponent(containerComponents);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(containerComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function serializeContainerComponentsArray(containerComponentsArray: ContainerComponents[]): APIContainerComponents[] {
	return containerComponentsArray.map(serializeContainerComponents);
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export function serializeFileComponent(fileComponent: FileComponent): APIFileComponent {
	return {
		file: serializeUnfurledMediaItem(fileComponent.file),
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
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeInteractiveButtonComponent(interactiveButtonComponent: InteractiveButtonComponent): APIInteractiveButtonComponent {
	return {
		custom_id: interactiveButtonComponent.customId,
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
export function serializeLabelComponent(labelComponent: LabelComponent): APILabelComponent {
	return {
		component: serializeLabelComponents(labelComponent.component),
		description: labelComponent.description,
		id: labelComponent.id,
		label: labelComponent.label,
		type: labelComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export function serializeLabelComponents(labelComponents: LabelComponents): APILabelComponents {
	const { type } = labelComponents;

	switch (type) {
		case ComponentType.FileUpload:
			return serializeFileUploadComponent(labelComponents);
		case ComponentType.TextInput:
			return serializeTextInputComponent(labelComponents);
		default:
			return serializeSelectMenuComponent(labelComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeLinkButtonComponent(linkButtonComponent: LinkButtonComponent): APILinkButtonComponent {
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
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export function serializeMentionableSelectMenuComponent(
	mentionableSelectMenuComponent: MentionableSelectMenuComponent,
): APIMentionableSelectMenuComponent {
	return {
		custom_id: mentionableSelectMenuComponent.customId,
		default_values: serializeSelectMenuDefaultValuesArray(mentionableSelectMenuComponent.defaultValues ?? []),
		disabled: mentionableSelectMenuComponent.disabled,
		id: mentionableSelectMenuComponent.id,
		max_values: mentionableSelectMenuComponent.maxValues,
		min_values: mentionableSelectMenuComponent.minValues,
		placeholder: mentionableSelectMenuComponent.placeholder,
		required: mentionableSelectMenuComponent.required,
		type: mentionableSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function serializeMessageComponent(messageComponent: MessageComponent): APIMessageComponent {
	const { type } = messageComponent;

	switch (type) {
		case ComponentType.ActionRow:
			return serializeActionRowComponent(messageComponent);
		case ComponentType.Container:
			return serializeContainerComponent(messageComponent);
		case ComponentType.File:
			return serializeFileComponent(messageComponent);
		case ComponentType.MediaGallery:
			return serializeMediaGalleryComponent(messageComponent);
		case ComponentType.Section:
			return serializeSectionComponent(messageComponent);
		case ComponentType.Separator:
			return serializeSeparatorComponent(messageComponent);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(messageComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function serializeMessageComponentsArray(messageComponentsArray: MessageComponent[]): APIMessageComponent[] {
	return messageComponentsArray.map(serializeMessageComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializePremiumButtonComponent(premiumButtonComponent: PremiumButtonComponent): APIPremiumButtonComponent {
	return {
		disabled: premiumButtonComponent.disabled,
		id: premiumButtonComponent.id,
		sku_id: premiumButtonComponent.skuId,
		style: premiumButtonComponent.style,
		type: premiumButtonComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export function serializeRoleSelectMenuComponent(roleSelectMenuComponent: RoleSelectMenuComponent): APIRoleSelectMenuComponent {
	return {
		custom_id: roleSelectMenuComponent.customId,
		default_values: serializeSelectMenuDefaultValuesArray(roleSelectMenuComponent.defaultValues ?? []),
		disabled: roleSelectMenuComponent.disabled,
		id: roleSelectMenuComponent.id,
		max_values: roleSelectMenuComponent.maxValues,
		min_values: roleSelectMenuComponent.minValues,
		placeholder: roleSelectMenuComponent.placeholder,
		required: roleSelectMenuComponent.required,
		type: roleSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export function serializeSectionAccessory(sectionAccessory: SectionAccessory): APISectionAccessory {
	const { type } = sectionAccessory;

	switch (type) {
		case ComponentType.Button:
			return serializeButtonComponent(sectionAccessory);
		case ComponentType.Thumbnail:
			return serializeThumbnailComponent(sectionAccessory);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export function serializeSectionComponent(sectionComponent: SectionComponent): APISectionComponent {
	return {
		accessory: serializeSectionAccessory(sectionComponent.accessory),
		components: serializeSectionComponentsArray(sectionComponent.components),
		id: sectionComponent.id,
		type: sectionComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function serializeSectionComponents(sectionComponents: SectionComponents): APISectionComponents {
	const { type } = sectionComponents;

	switch (type) {
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(sectionComponents);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function serializeSectionComponentsArray(sectionComponentsArray: APISectionComponents[]): SectionComponents[] {
	return sectionComponentsArray.map(serializeSectionComponents);
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function serializeSelectMenuComponent(selectMenuComponent: SelectMenuComponent): APISelectMenuComponent {
	const { type } = selectMenuComponent;

	switch (type) {
		case ComponentType.ChannelSelect:
			return serializeChannelSelectMenuComponent(selectMenuComponent);
		case ComponentType.MentionableSelect:
			return serializeMentionableSelectMenuComponent(selectMenuComponent);
		case ComponentType.RoleSelect:
			return serializeRoleSelectMenuComponent(selectMenuComponent);
		case ComponentType.StringSelect:
			return serializeStringSelectMenuComponent(selectMenuComponent);
		case ComponentType.UserSelect:
			return serializeUserSelectMenuComponent(selectMenuComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function serializeSelectMenuDefaultValue(selectMenuDefaultValue: SelectMenuDefaultValue): APISelectMenuDefaultValue {
	return {
		id: selectMenuDefaultValue.id,
		type: selectMenuDefaultValue.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function serializeSelectMenuDefaultValuesArray(selectMenuDefaultValuesArray: SelectMenuDefaultValue[]): APISelectMenuDefaultValue[] {
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
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function serializeStringSelectMenuComponent(stringSelectMenuComponent: StringSelectMenuComponent): APIStringSelectMenuComponent {
	return {
		custom_id: stringSelectMenuComponent.customId,
		disabled: stringSelectMenuComponent.disabled,
		id: stringSelectMenuComponent.id,
		max_values: stringSelectMenuComponent.maxValues,
		min_values: stringSelectMenuComponent.minValues,
		options: serializeStringSelectMenuOptionsArray(stringSelectMenuComponent.options),
		placeholder: stringSelectMenuComponent.placeholder,
		required: stringSelectMenuComponent.required,
		type: stringSelectMenuComponent.type,
	};
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function serializeStringSelectMenuOption(stringSelectMenuOption: StringSelectMenuOption): APIStringSelectMenuOption {
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
export function serializeStringSelectMenuOptionsArray(stringSelectMenuOptionsArray: StringSelectMenuOption[]): APIStringSelectMenuOption[] {
	return stringSelectMenuOptionsArray.map(serializeStringSelectMenuOption);
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
export function serializeUserSelectMenuComponent(userSelectMenuComponent: UserSelectMenuComponent): APIUserSelectMenuComponent {
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
