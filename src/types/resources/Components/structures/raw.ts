import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { RawPartialEmoji } from '#types/resources/Emojis/index.js';
import type { ButtonStyle, ComponentType, SelectMenuDefaultValueType, SeparatorSpacingSize, TextInputStyle } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface RawActionRowComponent extends RawComponentBase<ComponentType.ActionRow> {
	components: RawActionRowComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface RawButtonComponentBase<Style extends ButtonStyle> extends RawComponentBase<ComponentType.Button> {
	disabled?: boolean;
	style: Style;
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface RawChannelSelectMenuComponent extends RawResolvableSelectMenuComponentBase<ComponentType.ChannelSelect> {
	channel_types?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface RawComponentBase<Type extends ComponentType> {
	id?: number;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface RawContainerComponent extends RawComponentBase<ComponentType.Container> {
	accent_color?: number;
	components: RawContainerComponents[];
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface RawFileComponent extends RawComponentBase<ComponentType.File> {
	file: RawUnfurledMediaItem;
	name?: string;
	size?: number;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export interface RawFileUploadComponent extends RawComponentBase<ComponentType.FileUpload> {
	custom_id: string;
	max_values?: number;
	min_values?: number;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface RawInteractiveButtonComponentBase<Type extends RawInteractiveButtonComponentStyle>
	extends RawTextableButtonComponentBase<Type> {
	custom_id: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface RawLabelComponent extends RawComponentBase<ComponentType.Label> {
	component: RawLabelComponents;
	description?: string;
	label: string;
}

/**
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface RawLinkButtonComponent extends RawTextableButtonComponentBase<ButtonStyle.Link> {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface RawMediaGalleryComponent extends RawComponentBase<ComponentType.MediaGallery> {
	items: RawMediaGalleryItem[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface RawMediaGalleryItem {
	description?: string;
	media: RawUnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface RawPremiumButtonComponent extends RawButtonComponentBase<ButtonStyle.Premium> {
	sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface RawResolvableSelectMenuComponentBase<Type extends RawResolvableSelectMenuComponentType>
	extends RawSelectMenuComponentBase<Type> {
	default_values?: RawSelectMenuDefaultValue[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface RawSectionComponent extends RawComponentBase<ComponentType.Section> {
	accessory: RawSectionAccessory;
	components: RawSectionComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface RawSelectMenuComponentBase<Type extends RawSelectMenuComponentType> extends RawComponentBase<Type> {
	custom_id: string;
	disabled?: boolean;
	max_values?: number;
	min_values?: number;
	placeholder?: string;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface RawSelectMenuDefaultValue {
	type: SelectMenuDefaultValueType;
	id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface RawSeparatorComponent extends RawComponentBase<ComponentType.Separator> {
	divider?: boolean;
	spacing?: SeparatorSpacingSize;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface RawStringSelectMenuComponent extends RawSelectMenuComponentBase<ComponentType.StringSelect> {
	options: RawStringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface RawStringSelectMenuOption {
	default?: boolean;
	description?: string;
	emoji?: RawPartialEmoji;
	label: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface RawTextDisplayComponent extends RawComponentBase<ComponentType.TextDisplay> {
	content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface RawTextInputComponent extends RawComponentBase<ComponentType.TextInput> {
	custom_id: string;
	max_length?: number;
	min_length?: number;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyle;
	value?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface RawTextableButtonComponentBase<Style extends RawTextableButtonComponentStyle> extends RawButtonComponentBase<Style> {
	emoji?: RawPartialEmoji;
	label?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface RawThumbnailComponent extends RawComponentBase<ComponentType.Thumbnail> {
	description?: string;
	media: RawUnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface RawUnfurledMediaItem {
	attachment_id?: string;
	content_type?: string;
	height?: number;
	proxy_url?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export type RawActionRowComponents = RawButtonComponent | RawSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type RawButtonComponent = RawInteractiveButtonComponent | RawLinkButtonComponent | RawPremiumButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export type RawContainerComponents =
	| RawActionRowComponent
	| RawFileComponent
	| RawMediaGalleryComponent
	| RawSectionComponent
	| RawSeparatorComponent
	| RawTextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type RawDangerButtonComponent = RawInteractiveButtonComponentBase<ButtonStyle.Danger>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type RawInteractiveButtonComponent =
	| RawDangerButtonComponent
	| RawPrimaryButtonComponent
	| RawSecondaryButtonComponent
	| RawSuccessButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type RawInteractiveButtonComponentStyle = Exclude<RawTextableButtonComponentStyle, ButtonStyle.Link>;

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type RawLabelComponents = RawFileUploadComponent | RawSelectMenuComponent | RawTextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type RawMentionableSelectMenuComponent = RawResolvableSelectMenuComponentBase<ComponentType.MentionableSelect>;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type RawMessageComponents =
	| RawActionRowComponent
	| RawContainerComponent
	| RawFileComponent
	| RawMediaGalleryComponent
	| RawSectionComponent
	| RawSeparatorComponent
	| RawTextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type RawModalComponents = RawLabelComponent | RawTextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type RawPrimaryButtonComponent = RawInteractiveButtonComponentBase<ButtonStyle.Primary>;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type RawResolvableSelectMenuComponent =
	| RawChannelSelectMenuComponent
	| RawMentionableSelectMenuComponent
	| RawRoleSelectMenuComponent
	| RawUserSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type RawResolvableSelectMenuComponentType = Exclude<RawSelectMenuComponentType, ComponentType.StringSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type RawRoleSelectMenuComponent = RawResolvableSelectMenuComponentBase<ComponentType.RoleSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type RawSecondaryButtonComponent = RawInteractiveButtonComponentBase<ButtonStyle.Secondary>;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type RawSectionAccessory = RawButtonComponent | RawThumbnailComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type RawSectionComponents = RawTextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type RawSelectMenuComponent = RawResolvableSelectMenuComponent | RawStringSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type RawSelectMenuComponentType =
	| ComponentType.ChannelSelect
	| ComponentType.MentionableSelect
	| ComponentType.RoleSelect
	| ComponentType.StringSelect
	| ComponentType.UserSelect;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type RawSuccessButtonComponent = RawInteractiveButtonComponentBase<ButtonStyle.Success>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type RawTextableButtonComponentStyle =
	| ButtonStyle.Danger
	| ButtonStyle.Link
	| ButtonStyle.Primary
	| ButtonStyle.Secondary
	| ButtonStyle.Success;

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type RawUserSelectMenuComponent = RawResolvableSelectMenuComponentBase<ComponentType.UserSelect>;
