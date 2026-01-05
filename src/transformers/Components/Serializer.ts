import { serializePartialEmoji } from '#transformers/Emojis/Serializer.js';
import {
	type ActionRowChildComponent,
	type ActionRowComponent,
	type ButtonComponent,
	ButtonStyle,
	type ChannelSelectMenuComponent,
	ComponentType,
	type ContainerChildComponent,
	type ContainerComponent,
	type FileComponent,
	type FileUploadComponent,
	type InteractiveButtonComponent,
	type LabelChildComponent,
	type LabelComponent,
	type LinkButtonComponent,
	type MediaGalleryComponent,
	type MediaGalleryItem,
	type MentionableSelectMenuComponent,
	type MessageChildComponent,
	type PremiumButtonComponent,
	type RawActionRowChildComponent,
	type RawActionRowComponent,
	type RawButtonComponent,
	type RawChannelSelectMenuComponent,
	type RawContainerChildComponent,
	type RawContainerComponent,
	type RawFileComponent,
	type RawFileUploadComponent,
	type RawInteractiveButtonComponent,
	type RawLabelChildComponent,
	type RawLabelComponent,
	type RawLinkButtonComponent,
	type RawMediaGalleryComponent,
	type RawMediaGalleryItem,
	type RawMentionableSelectMenuComponent,
	type RawMessageChildComponent,
	type RawPremiumButtonComponent,
	type RawRoleSelectMenuComponent,
	type RawSectionAccessory,
	type RawSectionChildComponent,
	type RawSectionComponent,
	type RawSelectMenuComponent,
	type RawSelectMenuDefaultValue,
	type RawSeparatorComponent,
	type RawStringSelectMenuComponent,
	type RawStringSelectMenuOption,
	type RawTextDisplayComponent,
	type RawTextInputComponent,
	type RawThumbnailComponent,
	type RawUnfurledMediaItem,
	type RawUserSelectMenuComponent,
	type RoleSelectMenuComponent,
	type SectionAccessory,
	type SectionChildComponent,
	type SectionComponent,
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
} from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function serializeActionRowChildComponent(actionRowChildComponent: ActionRowChildComponent): RawActionRowChildComponent {
	const { type } = actionRowChildComponent;

	switch (type) {
		case ComponentType.Button:
			return serializeButtonComponent(actionRowChildComponent);
		default:
			return serializeSelectMenuComponent(actionRowChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function serializeActionRowChildComponentsArray(
	actionRowChildComponentsArray: ActionRowChildComponent[],
): RawActionRowChildComponent[] {
	return actionRowChildComponentsArray.map(serializeActionRowChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export function serializeActionRowComponent(actionRowComponent: ActionRowComponent): RawActionRowComponent {
	const { components, id, type } = actionRowComponent;
	const rawActionRowComponent: RawActionRowComponent = {
		components: serializeActionRowChildComponentsArray(components),
		type,
	};

	if (!isUndefined(id)) {
		rawActionRowComponent.id = id;
	}

	return rawActionRowComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeButtonComponent(buttonComponent: ButtonComponent): RawButtonComponent {
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
export function serializeChannelSelectMenuComponent(channelSelectMenuComponent: ChannelSelectMenuComponent): RawChannelSelectMenuComponent {
	const { channelTypes, customId, defaultValues, disabled, id, maxValues, minValues, placeholder, required, type } =
		channelSelectMenuComponent;
	const rawChannelSelectMenuComponent: RawChannelSelectMenuComponent = {
		custom_id: customId,
		type,
	};

	if (!isUndefined(channelTypes)) {
		rawChannelSelectMenuComponent.channel_types = channelTypes;
	}

	if (!isUndefined(defaultValues)) {
		rawChannelSelectMenuComponent.default_values = serializeSelectMenuDefaultValuesArray(defaultValues);
	}

	if (!isUndefined(disabled)) {
		rawChannelSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawChannelSelectMenuComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawChannelSelectMenuComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawChannelSelectMenuComponent.min_values = minValues;
	}

	if (!isUndefined(placeholder)) {
		rawChannelSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawChannelSelectMenuComponent.required = required;
	}

	return rawChannelSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function serializeContainerChildComponent(containerChildComponent: ContainerChildComponent): RawContainerChildComponent {
	const { type } = containerChildComponent;

	switch (type) {
		case ComponentType.ActionRow:
			return serializeActionRowComponent(containerChildComponent);
		case ComponentType.File:
			return serializeFileComponent(containerChildComponent);
		case ComponentType.MediaGallery:
			return serializeMediaGalleryComponent(containerChildComponent);
		case ComponentType.Section:
			return serializeSectionComponent(containerChildComponent);
		case ComponentType.Separator:
			return serializeSeparatorComponent(containerChildComponent);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(containerChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function serializeContainerChildComponentsArray(
	containerChildComponentsArray: ContainerChildComponent[],
): RawContainerChildComponent[] {
	return containerChildComponentsArray.map(serializeContainerChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export function serializeContainerComponent(containerComponent: ContainerComponent): RawContainerComponent {
	const { accentColor, components, id, spoiler, type } = containerComponent;
	const rawContainerComponent: RawContainerComponent = {
		components: serializeContainerChildComponentsArray(components),
		type,
	};

	if (!isUndefined(accentColor)) {
		rawContainerComponent.accent_color = accentColor;
	}

	if (!isUndefined(id)) {
		rawContainerComponent.id = id;
	}

	if (!isUndefined(spoiler)) {
		rawContainerComponent.spoiler = spoiler;
	}

	return rawContainerComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export function serializeFileComponent(fileComponent: FileComponent): RawFileComponent {
	const { file, id, name, size, spoiler, type } = fileComponent;
	const rawFileComponent: RawFileComponent = {
		file: serializeUnfurledMediaItem(file),
		type,
	};

	if (!isUndefined(id)) {
		rawFileComponent.id = id;
	}

	if (!isUndefined(name)) {
		rawFileComponent.name = name;
	}

	if (!isUndefined(size)) {
		rawFileComponent.size = size;
	}

	if (!isUndefined(spoiler)) {
		rawFileComponent.spoiler = spoiler;
	}

	return rawFileComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export function serializeFileUploadComponent(fileUploadComponent: FileUploadComponent): RawFileUploadComponent {
	const { customId, id, maxValues, minValues, required, type } = fileUploadComponent;
	const rawFileUploadComponent: RawFileUploadComponent = {
		custom_id: customId,
		type,
	};

	if (!isUndefined(id)) {
		rawFileUploadComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawFileUploadComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawFileUploadComponent.min_values = minValues;
	}

	if (!isUndefined(required)) {
		rawFileUploadComponent.required = required;
	}

	return rawFileUploadComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeInteractiveButtonComponent(interactiveButtonComponent: InteractiveButtonComponent): RawInteractiveButtonComponent {
	const { customId, disabled, emoji, id, label, style, type } = interactiveButtonComponent;
	const rawInteractiveButtonComponent: RawInteractiveButtonComponent = {
		custom_id: customId,
		style,
		type,
	};

	if (!isUndefined(disabled)) {
		rawInteractiveButtonComponent.disabled = disabled;
	}

	if (!isUndefined(emoji)) {
		rawInteractiveButtonComponent.emoji = serializePartialEmoji(emoji);
	}

	if (!isUndefined(id)) {
		rawInteractiveButtonComponent.id = id;
	}

	if (!isUndefined(label)) {
		rawInteractiveButtonComponent.label = label;
	}

	return rawInteractiveButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export function serializeLabelChildComponent(labelChildComponent: LabelChildComponent): RawLabelChildComponent {
	const { type } = labelChildComponent;

	switch (type) {
		case ComponentType.FileUpload:
			return serializeFileUploadComponent(labelChildComponent);
		case ComponentType.TextInput:
			return serializeTextInputComponent(labelChildComponent);
		default:
			return serializeSelectMenuComponent(labelChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export function serializeLabelComponent(labelComponent: LabelComponent): RawLabelComponent {
	const { component, description, id, label, type } = labelComponent;
	const rawLabelComponent: RawLabelComponent = {
		component: serializeLabelChildComponent(component),
		label,
		type,
	};

	if (!isUndefined(description)) {
		rawLabelComponent.description = description;
	}

	if (!isUndefined(id)) {
		rawLabelComponent.id = id;
	}

	return rawLabelComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializeLinkButtonComponent(linkButtonComponent: LinkButtonComponent): RawLinkButtonComponent {
	const { disabled, emoji, id, label, style, type, url } = linkButtonComponent;
	const rawLinkButtonComponent: RawLinkButtonComponent = {
		style,
		type,
		url,
	};

	if (!isUndefined(disabled)) {
		rawLinkButtonComponent.disabled = disabled;
	}

	if (!isUndefined(emoji)) {
		rawLinkButtonComponent.emoji = emoji;
	}

	if (!isUndefined(id)) {
		rawLinkButtonComponent.id = id;
	}

	if (!isUndefined(label)) {
		rawLinkButtonComponent.label = label;
	}

	return rawLinkButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export function serializeMediaGalleryComponent(mediaGalleryComponent: MediaGalleryComponent): RawMediaGalleryComponent {
	const { id, items, type } = mediaGalleryComponent;
	const rawMediaGalleryComponent: RawMediaGalleryComponent = {
		items: serializeMediaGalleryItemsArray(items),
		type,
	};

	if (!isUndefined(id)) {
		rawMediaGalleryComponent.id = id;
	}

	return rawMediaGalleryComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function serializeMediaGalleryItem(mediaGalleryItem: MediaGalleryItem): RawMediaGalleryItem {
	const { description, media, spoiler } = mediaGalleryItem;
	const rawMediaGalleryItem: RawMediaGalleryItem = {
		media: serializeUnfurledMediaItem(media),
	};

	if (!isUndefined(description)) {
		rawMediaGalleryItem.description = description;
	}

	if (!isUndefined(spoiler)) {
		rawMediaGalleryItem.spoiler = spoiler;
	}

	return rawMediaGalleryItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function serializeMediaGalleryItemsArray(mediaGalleryItemsArray: MediaGalleryItem[]): RawMediaGalleryItem[] {
	return mediaGalleryItemsArray.map(serializeMediaGalleryItem);
}

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export function serializeMentionableSelectMenuComponent(
	mentionableSelectMenuComponent: MentionableSelectMenuComponent,
): RawMentionableSelectMenuComponent {
	const { customId, defaultValues, disabled, id, maxValues, minValues, placeholder, required, type } = mentionableSelectMenuComponent;
	const rawMentionableSelectMenuComponent: RawMentionableSelectMenuComponent = {
		custom_id: customId,
		type,
	};

	if (!isUndefined(defaultValues)) {
		rawMentionableSelectMenuComponent.default_values = serializeSelectMenuDefaultValuesArray(defaultValues);
	}

	if (!isUndefined(disabled)) {
		rawMentionableSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawMentionableSelectMenuComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawMentionableSelectMenuComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawMentionableSelectMenuComponent.min_values = minValues;
	}

	if (!isUndefined(placeholder)) {
		rawMentionableSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawMentionableSelectMenuComponent.required = required;
	}

	return rawMentionableSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function serializeMessageChildComponent(messageChildComponent: MessageChildComponent): RawMessageChildComponent {
	const { type } = messageChildComponent;

	switch (type) {
		case ComponentType.ActionRow:
			return serializeActionRowComponent(messageChildComponent);
		case ComponentType.Container:
			return serializeContainerComponent(messageChildComponent);
		case ComponentType.File:
			return serializeFileComponent(messageChildComponent);
		case ComponentType.MediaGallery:
			return serializeMediaGalleryComponent(messageChildComponent);
		case ComponentType.Section:
			return serializeSectionComponent(messageChildComponent);
		case ComponentType.Separator:
			return serializeSeparatorComponent(messageChildComponent);
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(messageChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function serializeMessageChildComponentsArray(messageChildComponentsArray: MessageChildComponent[]): RawMessageChildComponent[] {
	return messageChildComponentsArray.map(serializeMessageChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function serializePremiumButtonComponent(premiumButtonComponent: PremiumButtonComponent): RawPremiumButtonComponent {
	const { disabled, id, skuId, style, type } = premiumButtonComponent;
	const rawPremiumButtonComponent: RawPremiumButtonComponent = {
		sku_id: skuId,
		style,
		type,
	};

	if (!isUndefined(disabled)) {
		rawPremiumButtonComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawPremiumButtonComponent.id = id;
	}

	return rawPremiumButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export function serializeRoleSelectMenuComponent(roleSelectMenuComponent: RoleSelectMenuComponent): RawRoleSelectMenuComponent {
	const { customId, defaultValues, disabled, id, maxValues, minValues, placeholder, required, type } = roleSelectMenuComponent;
	const rawRoleSelectMenuComponent: RawRoleSelectMenuComponent = {
		custom_id: customId,
		type,
	};

	if (!isUndefined(defaultValues)) {
		rawRoleSelectMenuComponent.default_values = serializeSelectMenuDefaultValuesArray(defaultValues);
	}

	if (!isUndefined(disabled)) {
		rawRoleSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawRoleSelectMenuComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawRoleSelectMenuComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawRoleSelectMenuComponent.min_values = minValues;
	}

	if (!isUndefined(placeholder)) {
		rawRoleSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawRoleSelectMenuComponent.required = required;
	}

	return rawRoleSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export function serializeSectionAccessory(sectionAccessory: SectionAccessory): RawSectionAccessory {
	const { type } = sectionAccessory;

	switch (type) {
		case ComponentType.Button:
			return serializeButtonComponent(sectionAccessory);
		case ComponentType.Thumbnail:
			return serializeThumbnailComponent(sectionAccessory);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function serializeSectionChildComponent(sectionChildComponent: SectionChildComponent): RawSectionChildComponent {
	const { type } = sectionChildComponent;

	switch (type) {
		case ComponentType.TextDisplay:
			return serializeTextDisplayComponent(sectionChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function serializeSectionChildComponentsArray(sectionChildComponentsArray: SectionChildComponent[]): RawSectionChildComponent[] {
	return sectionChildComponentsArray.map(serializeSectionChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export function serializeSectionComponent(sectionComponent: SectionComponent): RawSectionComponent {
	const { accessory, components, id, type } = sectionComponent;
	const rawSectionComponent: RawSectionComponent = {
		accessory: serializeSectionAccessory(accessory),
		components: serializeSectionChildComponentsArray(components),
		type,
	};

	if (!isUndefined(id)) {
		rawSectionComponent.id = id;
	}

	return rawSectionComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function serializeSelectMenuComponent(selectMenuComponent: SelectMenuComponent): RawSelectMenuComponent {
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
export function serializeSelectMenuDefaultValue(selectMenuDefaultValue: SelectMenuDefaultValue): RawSelectMenuDefaultValue {
	const { id, type } = selectMenuDefaultValue;
	const rawSelectMenuDefaultValue: RawSelectMenuDefaultValue = {
		id,
		type,
	};

	return rawSelectMenuDefaultValue;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function serializeSelectMenuDefaultValuesArray(selectMenuDefaultValuesArray: SelectMenuDefaultValue[]): RawSelectMenuDefaultValue[] {
	return selectMenuDefaultValuesArray.map(serializeSelectMenuDefaultValue);
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export function serializeSeparatorComponent(separatorComponent: SeparatorComponent): RawSeparatorComponent {
	const { divider, id, spacing, type } = separatorComponent;
	const rawSeparatorComponent: RawSeparatorComponent = {
		type,
	};

	if (!isUndefined(divider)) {
		rawSeparatorComponent.divider = divider;
	}

	if (!isUndefined(id)) {
		rawSeparatorComponent.id = id;
	}

	if (!isUndefined(spacing)) {
		rawSeparatorComponent.spacing = spacing;
	}

	return rawSeparatorComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function serializeStringSelectMenuComponent(stringSelectMenuComponent: StringSelectMenuComponent): RawStringSelectMenuComponent {
	const { customId, disabled, id, maxValues, minValues, options, placeholder, required, type } = stringSelectMenuComponent;
	const rawStringSelectMenuComponent: RawStringSelectMenuComponent = {
		custom_id: customId,
		options: serializeStringSelectMenuOptionsArray(options),
		type,
	};

	if (!isUndefined(disabled)) {
		rawStringSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawStringSelectMenuComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawStringSelectMenuComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawStringSelectMenuComponent.min_values = minValues;
	}

	if (!isUndefined(placeholder)) {
		rawStringSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawStringSelectMenuComponent.required = required;
	}

	return rawStringSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function serializeStringSelectMenuOption(stringSelectMenuOption: StringSelectMenuOption): RawStringSelectMenuOption {
	const { default: _default, description, emoji, label, value } = stringSelectMenuOption;
	const rawStringSelectMenuOption: RawStringSelectMenuOption = {
		label,
		value,
	};

	if (!isUndefined(_default)) {
		rawStringSelectMenuOption.default = _default;
	}

	if (!isUndefined(description)) {
		rawStringSelectMenuOption.description = description;
	}

	if (!isUndefined(emoji)) {
		rawStringSelectMenuOption.emoji = serializePartialEmoji(emoji);
	}

	return rawStringSelectMenuOption;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function serializeStringSelectMenuOptionsArray(stringSelectMenuOptionsArray: StringSelectMenuOption[]): RawStringSelectMenuOption[] {
	return stringSelectMenuOptionsArray.map(serializeStringSelectMenuOption);
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export function serializeTextDisplayComponent(textDisplayComponent: TextDisplayComponent): RawTextDisplayComponent {
	const { content, id, type } = textDisplayComponent;
	const rawTextDisplayComponent: RawTextDisplayComponent = {
		content,
		type,
	};

	if (!isUndefined(id)) {
		rawTextDisplayComponent.id = id;
	}

	return rawTextDisplayComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export function serializeTextInputComponent(textInputComponent: TextInputComponent): RawTextInputComponent {
	const { customId, id, maxLength, minLength, placeholder, required, style, type, value } = textInputComponent;
	const rawTextInputComponent: RawTextInputComponent = {
		custom_id: customId,
		style,
		type,
	};

	if (!isUndefined(id)) {
		rawTextInputComponent.id = id;
	}

	if (!isUndefined(maxLength)) {
		rawTextInputComponent.max_length = maxLength;
	}

	if (!isUndefined(minLength)) {
		rawTextInputComponent.min_length = minLength;
	}

	if (!isUndefined(placeholder)) {
		rawTextInputComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawTextInputComponent.required = required;
	}

	if (!isUndefined(value)) {
		rawTextInputComponent.value = value;
	}

	return rawTextInputComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export function serializeThumbnailComponent(thumbnailComponent: ThumbnailComponent): RawThumbnailComponent {
	const { description, id, media, spoiler, type } = thumbnailComponent;
	const rawThumbnailComponent: RawThumbnailComponent = {
		media: serializeUnfurledMediaItem(media),
		type,
	};

	if (!isUndefined(description)) {
		rawThumbnailComponent.description = description;
	}

	if (!isUndefined(id)) {
		rawThumbnailComponent.id = id;
	}

	if (!isUndefined(spoiler)) {
		rawThumbnailComponent.spoiler = spoiler;
	}

	return rawThumbnailComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
export function serializeUnfurledMediaItem(unfurledMediaItem: UnfurledMediaItem): RawUnfurledMediaItem {
	const { attachmentId, contentType, height, proxyUrl, url, width } = unfurledMediaItem;
	const rawUnfurledMediaItem: RawUnfurledMediaItem = {
		url,
	};

	if (!isUndefined(attachmentId)) {
		rawUnfurledMediaItem.attachment_id = attachmentId;
	}

	if (!isUndefined(contentType)) {
		rawUnfurledMediaItem.content_type = contentType;
	}

	if (!isUndefined(height)) {
		rawUnfurledMediaItem.height = height;
	}

	if (!isUndefined(proxyUrl)) {
		rawUnfurledMediaItem.proxy_url = proxyUrl;
	}

	if (!isUndefined(width)) {
		rawUnfurledMediaItem.width = width;
	}

	return rawUnfurledMediaItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export function serializeUserSelectMenuComponent(userSelectMenuComponent: UserSelectMenuComponent): RawUserSelectMenuComponent {
	const { customId, defaultValues, disabled, id, maxValues, minValues, placeholder, required, type } = userSelectMenuComponent;
	const rawUserSelectMenuComponent: RawUserSelectMenuComponent = {
		custom_id: customId,
		type,
	};

	if (!isUndefined(defaultValues)) {
		rawUserSelectMenuComponent.default_values = serializeSelectMenuDefaultValuesArray(defaultValues);
	}

	if (!isUndefined(disabled)) {
		rawUserSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		rawUserSelectMenuComponent.id = id;
	}

	if (!isUndefined(maxValues)) {
		rawUserSelectMenuComponent.max_values = maxValues;
	}

	if (!isUndefined(minValues)) {
		rawUserSelectMenuComponent.min_values = minValues;
	}

	if (!isUndefined(placeholder)) {
		rawUserSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		rawUserSelectMenuComponent.required = required;
	}

	return rawUserSelectMenuComponent;
}
