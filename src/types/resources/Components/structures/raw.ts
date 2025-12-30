import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { RawPartialEmoji } from '#types/resources/Emojis/index.js';
import type { ButtonStyle, ComponentType, SelectMenuDefaultValueType, SeparatorSpacingSize, TextInputStyle } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface APIActionRowComponent extends APIComponentBase<ComponentType.ActionRow> {
	components: APIActionRowComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIButtonComponentBase<Style extends ButtonStyle> extends APIComponentBase<ComponentType.Button> {
	disabled?: boolean;
	style: Style;
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface APIChannelSelectMenuComponent extends APIResolvableSelectMenuComponentBase<ComponentType.ChannelSelect> {
	channel_types?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface APIComponentBase<Type extends ComponentType> {
	id?: number;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface APIContainerComponent extends APIComponentBase<ComponentType.Container> {
	accent_color?: number;
	components: APIContainerComponents[];
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface APIFileComponent extends APIComponentBase<ComponentType.File> {
	file: APIUnfurledMediaItem;
	name?: string;
	size?: number;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export interface APIFileUploadComponent extends APIComponentBase<ComponentType.FileUpload> {
	custom_id: string;
	max_values?: number;
	min_values?: number;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface APIInteractiveButtonComponentBase<Type extends APIInteractiveButtonComponentStyle>
	extends APITextableButtonComponentBase<Type> {
	custom_id: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface APILabelComponent extends APIComponentBase<ComponentType.Label> {
	component: APILabelComponents;
	description?: string;
	label: string;
}

/**
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface APILinkButtonComponent extends APITextableButtonComponentBase<ButtonStyle.Link> {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface APIMediaGalleryComponent extends APIComponentBase<ComponentType.MediaGallery> {
	items: APIMediaGalleryItem[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface APIMediaGalleryItem {
	description?: string;
	media: APIUnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIPremiumButtonComponent extends APIButtonComponentBase<ButtonStyle.Premium> {
	sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface APIResolvableSelectMenuComponentBase<Type extends APIResolvableSelectMenuComponentType>
	extends APISelectMenuComponentBase<Type> {
	default_values?: APISelectMenuDefaultValue[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface APISectionComponent extends APIComponentBase<ComponentType.Section> {
	accessory: APISectionAccessory;
	components: APISectionComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface APISelectMenuComponentBase<Type extends APISelectMenuComponentType> extends APIComponentBase<Type> {
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
export interface APISelectMenuDefaultValue {
	type: SelectMenuDefaultValueType;
	id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface APISeparatorComponent extends APIComponentBase<ComponentType.Separator> {
	divider?: boolean;
	spacing?: SeparatorSpacingSize;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuComponent extends APISelectMenuComponentBase<ComponentType.StringSelect> {
	options: APIStringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuOption {
	default?: boolean;
	description?: string;
	emoji?: RawPartialEmoji;
	label: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface APITextDisplayComponent extends APIComponentBase<ComponentType.TextDisplay> {
	content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface APITextInputComponent extends APIComponentBase<ComponentType.TextInput> {
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
export interface APITextableButtonComponentBase<Style extends APITextableButtonComponentStyle> extends APIButtonComponentBase<Style> {
	emoji?: RawPartialEmoji;
	label?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface APIThumbnailComponent extends APIComponentBase<ComponentType.Thumbnail> {
	description?: string;
	media: APIUnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface APIUnfurledMediaItem {
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
export type APIActionRowComponents = APIButtonComponent | APISelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIButtonComponent = APIInteractiveButtonComponent | APILinkButtonComponent | APIPremiumButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export type APIContainerComponents =
	| APIActionRowComponent
	| APIFileComponent
	| APIMediaGalleryComponent
	| APISectionComponent
	| APISeparatorComponent
	| APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIDangerButtonComponent = APIInteractiveButtonComponentBase<ButtonStyle.Danger>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type APIInteractiveButtonComponent =
	| APIDangerButtonComponent
	| APIPrimaryButtonComponent
	| APISecondaryButtonComponent
	| APISuccessButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type APIInteractiveButtonComponentStyle = Exclude<APITextableButtonComponentStyle, ButtonStyle.Link>;

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type APILabelComponents = APIFileUploadComponent | APISelectMenuComponent | APITextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type APIMentionableSelectMenuComponent = APIResolvableSelectMenuComponentBase<ComponentType.MentionableSelect>;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type APIMessageComponents =
	| APIActionRowComponent
	| APIContainerComponent
	| APIFileComponent
	| APIMediaGalleryComponent
	| APISectionComponent
	| APISeparatorComponent
	| APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type APIModalComponents = APILabelComponent | APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIPrimaryButtonComponent = APIInteractiveButtonComponentBase<ButtonStyle.Primary>;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type APIResolvableSelectMenuComponent =
	| APIChannelSelectMenuComponent
	| APIMentionableSelectMenuComponent
	| APIRoleSelectMenuComponent
	| APIUserSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APIResolvableSelectMenuComponentType = Exclude<APISelectMenuComponentType, ComponentType.StringSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type APIRoleSelectMenuComponent = APIResolvableSelectMenuComponentBase<ComponentType.RoleSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APISecondaryButtonComponent = APIInteractiveButtonComponentBase<ButtonStyle.Secondary>;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type APISectionAccessory = APIButtonComponent | APIThumbnailComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type APISectionComponents = APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type APISelectMenuComponent = APIResolvableSelectMenuComponent | APIStringSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APISelectMenuComponentType =
	| ComponentType.ChannelSelect
	| ComponentType.MentionableSelect
	| ComponentType.RoleSelect
	| ComponentType.StringSelect
	| ComponentType.UserSelect;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APISuccessButtonComponent = APIInteractiveButtonComponentBase<ButtonStyle.Success>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type APITextableButtonComponentStyle =
	| ButtonStyle.Danger
	| ButtonStyle.Link
	| ButtonStyle.Primary
	| ButtonStyle.Secondary
	| ButtonStyle.Success;

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type APIUserSelectMenuComponent = APIResolvableSelectMenuComponentBase<ComponentType.UserSelect>;
