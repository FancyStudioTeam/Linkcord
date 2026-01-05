import { deserializePartialEmoji } from '#transformers/Emojis/Deserializer.js';
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
export function deserializeActionRowChildComponent(rawActionRowChildComponent: RawActionRowChildComponent): ActionRowChildComponent {
	const { type } = rawActionRowChildComponent;

	switch (type) {
		case ComponentType.Button:
			return deserializeButtonComponent(rawActionRowChildComponent);
		default:
			return deserializeSelectMenuComponent(rawActionRowChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export function deserializeActionRowChildComponentsArray(
	rawActionRowChildComponentsArray: RawActionRowChildComponent[],
): ActionRowChildComponent[] {
	return rawActionRowChildComponentsArray.map(deserializeActionRowChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export function deserializeActionRowComponent(rawActionRowComponent: RawActionRowComponent): ActionRowComponent {
	const { components, id, type } = rawActionRowComponent;
	const actionRowComponent: ActionRowComponent = {
		components: deserializeActionRowChildComponentsArray(components),
		type,
	};

	if (!isUndefined(id)) {
		actionRowComponent.id = id;
	}

	return actionRowComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeButtonComponent(rawButtonComponent: RawButtonComponent): ButtonComponent {
	const { style } = rawButtonComponent;

	switch (style) {
		case ButtonStyle.Link:
			return deserializeLinkButtonComponent(rawButtonComponent);
		case ButtonStyle.Premium:
			return deserializePremiumButtonComponent(rawButtonComponent);
		default:
			return deserializeInteractiveButtonComponent(rawButtonComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export function deserializeChannelSelectMenuComponent(
	rawChannelSelectMenuComponent: RawChannelSelectMenuComponent,
): ChannelSelectMenuComponent {
	const { channel_types, custom_id, default_values, disabled, id, max_values, min_values, placeholder, required, type } =
		rawChannelSelectMenuComponent;
	const channelSelectMenuComponent: ChannelSelectMenuComponent = {
		customId: custom_id,
		type,
	};

	if (!isUndefined(channel_types)) {
		channelSelectMenuComponent.channelTypes = channel_types;
	}

	if (!isUndefined(default_values)) {
		channelSelectMenuComponent.defaultValues = deserializeSelectMenuDefaultValuesArray(default_values);
	}

	if (!isUndefined(disabled)) {
		channelSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		channelSelectMenuComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		channelSelectMenuComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		channelSelectMenuComponent.minValues = min_values;
	}

	if (!isUndefined(placeholder)) {
		channelSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		channelSelectMenuComponent.required = required;
	}

	return channelSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function deserializeContainerChildComponent(rawContainerChildComponent: RawContainerChildComponent): ContainerChildComponent {
	const { type } = rawContainerChildComponent;

	switch (type) {
		case ComponentType.ActionRow:
			return deserializeActionRowComponent(rawContainerChildComponent);
		case ComponentType.File:
			return deserializeFileComponent(rawContainerChildComponent);
		case ComponentType.MediaGallery:
			return deserializeMediaGalleryComponent(rawContainerChildComponent);
		case ComponentType.Section:
			return deserializeSectionComponent(rawContainerChildComponent);
		case ComponentType.Separator:
			return deserializeSeparatorComponent(rawContainerChildComponent);
		case ComponentType.TextDisplay:
			return deserializeTextDisplayComponent(rawContainerChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export function deserializeContainerChildComponentsArray(
	rawContainerChildComponentsArray: RawContainerChildComponent[],
): ContainerChildComponent[] {
	return rawContainerChildComponentsArray.map(deserializeContainerChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export function deserializeContainerComponent(rawContainerComponent: RawContainerComponent): ContainerComponent {
	const { accent_color, components, id, spoiler, type } = rawContainerComponent;
	const containerComponent: ContainerComponent = {
		components: deserializeContainerChildComponentsArray(components),
		type,
	};

	if (!isUndefined(accent_color)) {
		containerComponent.accentColor = accent_color;
	}

	if (!isUndefined(id)) {
		containerComponent.id = id;
	}

	if (!isUndefined(spoiler)) {
		containerComponent.spoiler = spoiler;
	}

	return containerComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export function deserializeFileComponent(rawFileComponent: RawFileComponent): FileComponent {
	const { file, id, name, size, spoiler, type } = rawFileComponent;
	const fileComponent: FileComponent = {
		file: deserializeUnfurledMediaItem(file),
		type,
	};

	if (!isUndefined(id)) {
		fileComponent.id = id;
	}

	if (!isUndefined(name)) {
		fileComponent.name = name;
	}

	if (!isUndefined(size)) {
		fileComponent.size = size;
	}

	if (!isUndefined(spoiler)) {
		fileComponent.spoiler;
	}

	return fileComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export function deserializeFileUploadComponent(rawFileUploadComponent: RawFileUploadComponent): FileUploadComponent {
	const { custom_id, id, max_values, min_values, required, type } = rawFileUploadComponent;
	const fileUploadComponent: FileUploadComponent = {
		customId: custom_id,
		type,
	};

	if (!isUndefined(id)) {
		fileUploadComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		fileUploadComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		fileUploadComponent.minValues = min_values;
	}

	if (!isUndefined(required)) {
		fileUploadComponent.required = required;
	}

	return fileUploadComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeInteractiveButtonComponent(
	rawInteractiveButtonComponent: RawInteractiveButtonComponent,
): InteractiveButtonComponent {
	const { custom_id, disabled, id, emoji, label, style, type } = rawInteractiveButtonComponent;
	const interactiveButtonComponent: InteractiveButtonComponent = {
		customId: custom_id,
		style,
		type,
	};

	if (!isUndefined(disabled)) {
		interactiveButtonComponent.disabled = disabled;
	}

	if (!isUndefined(emoji)) {
		interactiveButtonComponent.emoji = deserializePartialEmoji(emoji);
	}

	if (!isUndefined(id)) {
		interactiveButtonComponent.id = id;
	}

	if (!isUndefined(label)) {
		interactiveButtonComponent.label = label;
	}

	return interactiveButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export function deserializeLabelChildComponent(rawLabelChildComponent: RawLabelChildComponent): LabelChildComponent {
	const { type } = rawLabelChildComponent;

	switch (type) {
		case ComponentType.FileUpload:
			return deserializeFileUploadComponent(rawLabelChildComponent);
		case ComponentType.TextInput:
			return deserializeTextInputComponent(rawLabelChildComponent);
		default:
			return deserializeSelectMenuComponent(rawLabelChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export function deserializeLabelComponent(rawLabelComponent: RawLabelComponent): LabelComponent {
	const { component, description, id, label, type } = rawLabelComponent;
	const labelComponent: LabelComponent = {
		component: deserializeLabelChildComponent(component),
		label,
		type,
	};

	if (!isUndefined(description)) {
		labelComponent.description = description;
	}

	if (!isUndefined(id)) {
		labelComponent.id = id;
	}

	return labelComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializeLinkButtonComponent(rawLinkButtonComponent: RawLinkButtonComponent): LinkButtonComponent {
	const { disabled, emoji, id, label, style, type, url } = rawLinkButtonComponent;
	const linkButtonComponent: LinkButtonComponent = {
		style,
		type,
		url,
	};

	if (!isUndefined(disabled)) {
		linkButtonComponent.disabled = disabled;
	}

	if (!isUndefined(emoji)) {
		linkButtonComponent.emoji = deserializePartialEmoji(emoji);
	}

	if (!isUndefined(id)) {
		linkButtonComponent.id = id;
	}

	if (!isUndefined(label)) {
		linkButtonComponent.label = label;
	}

	return linkButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export function deserializeMediaGalleryComponent(rawMediaGalleryComponent: RawMediaGalleryComponent): MediaGalleryComponent {
	const { id, items, type } = rawMediaGalleryComponent;
	const mediaGalleryComponent: MediaGalleryComponent = {
		items: deserializeMediaGalleryItemsArray(items),
		type,
	};

	if (!isUndefined(id)) {
		mediaGalleryComponent.id = id;
	}

	return mediaGalleryComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function deserializeMediaGalleryItem(rawMediaGalleryItem: RawMediaGalleryItem): MediaGalleryItem {
	const { description, media, spoiler } = rawMediaGalleryItem;
	const mediaGalleryItem: MediaGalleryItem = {
		media: deserializeUnfurledMediaItem(media),
	};

	if (!isUndefined(description)) {
		mediaGalleryItem.description = description;
	}

	if (!isUndefined(spoiler)) {
		mediaGalleryItem.spoiler = spoiler;
	}

	return mediaGalleryItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export function deserializeMediaGalleryItemsArray(rawMediaGalleryItemsArray: RawMediaGalleryItem[]): MediaGalleryItem[] {
	return rawMediaGalleryItemsArray.map(deserializeMediaGalleryItem);
}

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export function deserializeMentionableSelectMenuComponent(
	rawMentionableSelectMenuComponent: RawMentionableSelectMenuComponent,
): MentionableSelectMenuComponent {
	const { custom_id, default_values, disabled, id, max_values, min_values, placeholder, required, type } =
		rawMentionableSelectMenuComponent;
	const mentionableSelectMenuComponent: MentionableSelectMenuComponent = {
		customId: custom_id,
		type,
	};

	if (!isUndefined(default_values)) {
		mentionableSelectMenuComponent.defaultValues = deserializeSelectMenuDefaultValuesArray(default_values);
	}

	if (!isUndefined(disabled)) {
		mentionableSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		mentionableSelectMenuComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		mentionableSelectMenuComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		mentionableSelectMenuComponent.minValues = min_values;
	}

	if (!isUndefined(placeholder)) {
		mentionableSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		mentionableSelectMenuComponent.required = required;
	}

	return mentionableSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function deserializeMessageChildComponent(rawMessageChildComponent: RawMessageChildComponent): MessageChildComponent {
	const { type } = rawMessageChildComponent;

	switch (type) {
		case ComponentType.ActionRow:
			return deserializeActionRowComponent(rawMessageChildComponent);
		case ComponentType.Container:
			return deserializeContainerComponent(rawMessageChildComponent);
		case ComponentType.File:
			return deserializeFileComponent(rawMessageChildComponent);
		case ComponentType.MediaGallery:
			return deserializeMediaGalleryComponent(rawMessageChildComponent);
		case ComponentType.Section:
			return deserializeSectionComponent(rawMessageChildComponent);
		case ComponentType.Separator:
			return deserializeSeparatorComponent(rawMessageChildComponent);
		case ComponentType.TextDisplay:
			return deserializeTextDisplayComponent(rawMessageChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export function deserializeMessageChildComponentsArray(
	rawMessageChildComponentsArray: RawMessageChildComponent[],
): MessageChildComponent[] {
	return rawMessageChildComponentsArray.map(deserializeMessageChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export function deserializePremiumButtonComponent(rawPremiumButtonComponent: RawPremiumButtonComponent): PremiumButtonComponent {
	const { disabled, id, sku_id, style, type } = rawPremiumButtonComponent;
	const premiumButtonComponent: PremiumButtonComponent = {
		skuId: sku_id,
		style,
		type,
	};

	if (!isUndefined(disabled)) {
		premiumButtonComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		premiumButtonComponent.id = id;
	}

	return premiumButtonComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export function deserializeRoleSelectMenuComponent(rawRoleSelectMenuComponent: RawRoleSelectMenuComponent): RoleSelectMenuComponent {
	const { custom_id, default_values, disabled, id, max_values, min_values, placeholder, required, type } = rawRoleSelectMenuComponent;
	const roleSelectMenuComponent: RoleSelectMenuComponent = {
		customId: custom_id,
		type,
	};

	if (!isUndefined(default_values)) {
		roleSelectMenuComponent.defaultValues = deserializeSelectMenuDefaultValuesArray(default_values);
	}

	if (!isUndefined(disabled)) {
		roleSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		roleSelectMenuComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		roleSelectMenuComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		roleSelectMenuComponent.minValues = min_values;
	}

	if (!isUndefined(placeholder)) {
		roleSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		roleSelectMenuComponent.required = required;
	}

	return roleSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export function deserializeSectionAccessory(rawSectionAccessory: RawSectionAccessory): SectionAccessory {
	const { type } = rawSectionAccessory;

	switch (type) {
		case ComponentType.Button:
			return deserializeButtonComponent(rawSectionAccessory);
		case ComponentType.Thumbnail:
			return deserializeThumbnailComponent(rawSectionAccessory);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function deserializeSectionChildComponent(rawSectionChildComponent: RawSectionChildComponent): SectionChildComponent {
	const { type } = rawSectionChildComponent;

	switch (type) {
		case ComponentType.TextDisplay:
			return deserializeTextDisplayComponent(rawSectionChildComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export function deserializeSectionChildComponentsArray(
	rawSectionChildComponentsArray: RawSectionChildComponent[],
): SectionChildComponent[] {
	return rawSectionChildComponentsArray.map(deserializeSectionChildComponent);
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export function deserializeSectionComponent(rawSectionComponent: RawSectionComponent): SectionComponent {
	const { accessory, components, id, type } = rawSectionComponent;
	const sectionComponent: SectionComponent = {
		accessory: deserializeSectionAccessory(accessory),
		components: deserializeSectionChildComponentsArray(components),
		type,
	};

	if (!isUndefined(id)) {
		sectionComponent.id = id;
	}

	return sectionComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function deserializeSelectMenuComponent(rawSelectMenuComponent: RawSelectMenuComponent): SelectMenuComponent {
	const { type } = rawSelectMenuComponent;

	switch (type) {
		case ComponentType.ChannelSelect:
			return deserializeChannelSelectMenuComponent(rawSelectMenuComponent);
		case ComponentType.MentionableSelect:
			return deserializeMentionableSelectMenuComponent(rawSelectMenuComponent);
		case ComponentType.RoleSelect:
			return deserializeRoleSelectMenuComponent(rawSelectMenuComponent);
		case ComponentType.StringSelect:
			return deserializeStringSelectMenuComponent(rawSelectMenuComponent);
		case ComponentType.UserSelect:
			return deserializeUserSelectMenuComponent(rawSelectMenuComponent);
	}
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function deserializeSelectMenuDefaultValue(rawSelectMenuDefaultValue: RawSelectMenuDefaultValue): SelectMenuDefaultValue {
	const { id, type } = rawSelectMenuDefaultValue;
	const selectMenuDefaultValue: SelectMenuDefaultValue = {
		id,
		type,
	};

	return selectMenuDefaultValue;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export function deserializeSelectMenuDefaultValuesArray(
	rawSelectMenuDefaultValuesArray: RawSelectMenuDefaultValue[],
): SelectMenuDefaultValue[] {
	return rawSelectMenuDefaultValuesArray.map(deserializeSelectMenuDefaultValue);
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export function deserializeSeparatorComponent(rawSeparatorComponent: RawSeparatorComponent): SeparatorComponent {
	const { divider, id, spacing, type } = rawSeparatorComponent;
	const separatorComponent: SeparatorComponent = {
		type,
	};

	if (!isUndefined(divider)) {
		separatorComponent.divider = divider;
	}

	if (!isUndefined(id)) {
		separatorComponent.id = id;
	}

	if (!isUndefined(spacing)) {
		separatorComponent.spacing = spacing;
	}

	return separatorComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export function deserializeStringSelectMenuComponent(
	rawStringSelectMenuComponent: RawStringSelectMenuComponent,
): StringSelectMenuComponent {
	const { custom_id, disabled, id, max_values, min_values, options, placeholder, required, type } = rawStringSelectMenuComponent;
	const stringSelectMenuComponent: StringSelectMenuComponent = {
		customId: custom_id,
		options: deserializeStringSelectMenuOptionsArray(options),
		type,
	};

	if (!isUndefined(disabled)) {
		stringSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		stringSelectMenuComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		stringSelectMenuComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		stringSelectMenuComponent.minValues = min_values;
	}

	if (!isUndefined(placeholder)) {
		stringSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		stringSelectMenuComponent.required = required;
	}

	return stringSelectMenuComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function deserializeStringSelectMenuOption(rawStringSelectMenuOption: RawStringSelectMenuOption): StringSelectMenuOption {
	const { default: _default, description, emoji, label, value } = rawStringSelectMenuOption;
	const stringSelectMenuOption: StringSelectMenuOption = {
		label,
		value,
	};

	if (!isUndefined(_default)) {
		stringSelectMenuOption.default = _default;
	}

	if (!isUndefined(description)) {
		stringSelectMenuOption.description = description;
	}

	if (!isUndefined(emoji)) {
		stringSelectMenuOption.emoji = deserializePartialEmoji(emoji);
	}

	return stringSelectMenuOption;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export function deserializeStringSelectMenuOptionsArray(
	rawStringSelectMenuOptionsArray: RawStringSelectMenuOption[],
): StringSelectMenuOption[] {
	return rawStringSelectMenuOptionsArray.map(deserializeStringSelectMenuOption);
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export function deserializeTextDisplayComponent(rawTextDisplayComponent: RawTextDisplayComponent): TextDisplayComponent {
	const { content, id, type } = rawTextDisplayComponent;
	const textDisplayComponent: TextDisplayComponent = {
		content,
		type,
	};

	if (!isUndefined(id)) {
		textDisplayComponent.id = id;
	}

	return textDisplayComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export function deserializeTextInputComponent(rawTextInputComponent: RawTextInputComponent): TextInputComponent {
	const { custom_id, id, max_length, min_length, placeholder, required, style, type, value } = rawTextInputComponent;
	const textInputComponent: TextInputComponent = {
		customId: custom_id,
		style,
		type,
	};

	if (!isUndefined(id)) {
		textInputComponent.id = id;
	}

	if (!isUndefined(max_length)) {
		textInputComponent.maxLength = max_length;
	}

	if (!isUndefined(min_length)) {
		textInputComponent.minLength = min_length;
	}

	if (!isUndefined(placeholder)) {
		textInputComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		textInputComponent.required = required;
	}

	if (!isUndefined(value)) {
		textInputComponent.value = value;
	}

	return textInputComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export function deserializeThumbnailComponent(rawThumbnailComponent: RawThumbnailComponent): ThumbnailComponent {
	const { description, id, media, spoiler, type } = rawThumbnailComponent;
	const thumbnailComponent: ThumbnailComponent = {
		media: deserializeUnfurledMediaItem(media),
		type,
	};

	if (!isUndefined(description)) {
		thumbnailComponent.description = description;
	}

	if (!isUndefined(id)) {
		thumbnailComponent.id = id;
	}

	if (!isUndefined(spoiler)) {
		thumbnailComponent.spoiler = spoiler;
	}

	return thumbnailComponent;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-unfurled-media-item-structure
 */
export function deserializeUnfurledMediaItem(rawUnfurledMediaItem: RawUnfurledMediaItem): UnfurledMediaItem {
	const { attachment_id, content_type, height, proxy_url, url, width } = rawUnfurledMediaItem;
	const unfurledMediaItem: UnfurledMediaItem = {
		url,
	};

	if (!isUndefined(attachment_id)) {
		unfurledMediaItem.attachmentId = attachment_id;
	}

	if (!isUndefined(content_type)) {
		unfurledMediaItem.contentType = content_type;
	}

	if (!isUndefined(height)) {
		unfurledMediaItem.height = height;
	}

	if (!isUndefined(proxy_url)) {
		unfurledMediaItem.proxyUrl = proxy_url;
	}

	if (!isUndefined(width)) {
		unfurledMediaItem.width = width;
	}

	return unfurledMediaItem;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export function deserializeUserSelectMenuComponent(rawUserSelectMenuComponent: RawUserSelectMenuComponent): UserSelectMenuComponent {
	const { custom_id, default_values, disabled, id, max_values, min_values, placeholder, required, type } = rawUserSelectMenuComponent;
	const userSelectMenuComponent: UserSelectMenuComponent = {
		customId: custom_id,
		type,
	};

	if (!isUndefined(default_values)) {
		userSelectMenuComponent.defaultValues = deserializeSelectMenuDefaultValuesArray(default_values);
	}

	if (!isUndefined(disabled)) {
		userSelectMenuComponent.disabled = disabled;
	}

	if (!isUndefined(id)) {
		userSelectMenuComponent.id = id;
	}

	if (!isUndefined(max_values)) {
		userSelectMenuComponent.maxValues = max_values;
	}

	if (!isUndefined(min_values)) {
		userSelectMenuComponent.minValues = min_values;
	}

	if (!isUndefined(placeholder)) {
		userSelectMenuComponent.placeholder = placeholder;
	}

	if (!isUndefined(required)) {
		userSelectMenuComponent.required = required;
	}

	return userSelectMenuComponent;
}
