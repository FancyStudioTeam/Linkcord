import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelType } from "#types/resources/Channels/enums.js";
import type { APIPartialEmoji } from "#types/resources/Emojis/index.js";
import type {
	ButtonStyle,
	ComponentType,
	SelectMenuDefaultValueType,
	SeparatorSpacingSize,
	TextInputStyle,
} from "../enums.js";

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface APIActionRowComponent extends APIBaseComponent<ComponentType.ActionRow> {
	components: APIActionRowComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIBaseButtonComponent<Style extends ButtonStyle> extends APIBaseComponent<ComponentType.Button> {
	disabled?: boolean;
	style: Style;
}

/**
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface APIBaseComponent<Type extends ComponentType> {
	id?: number;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface APIBaseInteractableButtonComponent<Type extends APIInteractableButtonComponentStyle>
	extends APIBaseTextableButtonComponent<Type> {
	custom_id: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface APIBaseResolvableSelectMenuComponent<Type extends APIResolvableSelectMenuComponentType>
	extends APIBaseSelectMenuComponent<Type> {
	default_values?: APISelectMenuDefaultValue[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface APIBaseSelectMenuComponent<Type extends APISelectMenuComponentType> extends APIBaseComponent<Type> {
	custom_id: string;
	disabled?: boolean;
	max_values?: number;
	min_values?: number;
	placeholder?: string;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface APIBaseTextableButtonComponent<Style extends APITextableButtonComponentStyle>
	extends APIBaseButtonComponent<Style> {
	emoji?: APIPartialEmoji;
	label?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface APIChannelSelectMenuComponent
	extends APIBaseResolvableSelectMenuComponent<ComponentType.ChannelSelect> {
	channel_types?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface APIContainerComponent extends APIBaseComponent<ComponentType.Container> {
	accent_color?: number;
	components: APIContainerComponents[];
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface APIFileComponent extends APIBaseComponent<ComponentType.File> {
	file: APIUnfurledMediaItem;
	name: string;
	size?: number;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export interface APIFileUploadComponent extends APIBaseComponent<ComponentType.FileUpload> {
	custom_id: string;
	max_values?: number;
	min_values?: number;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface APILabelComponent extends APIBaseComponent<ComponentType.Label> {
	component: APILabelComponents;
	description?: string;
	label: string;
}

/**
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface APILinkButtonComponent extends APIBaseTextableButtonComponent<ButtonStyle.Link> {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface APIMediaGalleryComponent extends APIBaseComponent<ComponentType.MediaGallery> {
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
export interface APIPremiumButtonComponent extends APIBaseButtonComponent<ButtonStyle.Premium> {
	sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface APISectionComponent extends APIBaseComponent<ComponentType.Section> {
	accessory: APISectionAccessory;
	components: APISectionComponents[];
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
export interface APISeparatorComponent extends APIBaseComponent<ComponentType.Separator> {
	divider?: boolean;
	spacing?: SeparatorSpacingSize;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuComponent extends APIBaseSelectMenuComponent<ComponentType.StringSelect> {
	options: APIStringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuOption {
	default?: boolean;
	description?: string;
	emoji?: APIPartialEmoji;
	label: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface APITextDisplayComponent extends APIBaseComponent<ComponentType.TextDisplay> {
	content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface APITextInputComponent extends APIBaseComponent<ComponentType.TextInput> {
	custom_id: string;
	max_length?: number;
	min_length?: number;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyle;
	value?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface APIThumbnailComponent extends APIBaseComponent<ComponentType.Thumbnail> {
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
export type APIButtonComponent = APIInteractableButtonComponent | APILinkButtonComponent | APIPremiumButtonComponent;

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
export type APIDangerButtonComponent = APIBaseInteractableButtonComponent<ButtonStyle.Danger>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type APIInteractableButtonComponent =
	| APIDangerButtonComponent
	| APIPrimaryButtonComponent
	| APISecondaryButtonComponent
	| APISuccessButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type APIInteractableButtonComponentStyle = Exclude<APITextableButtonComponentStyle, ButtonStyle.Link>;

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type APILabelComponents = APIFileUploadComponent | APISelectMenuComponent | APITextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type APIMentionableSelectMenuComponent = APIBaseResolvableSelectMenuComponent<ComponentType.MentionableSelect>;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type APIMessageComponent =
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
export type APIModalComponent = APILabelComponent | APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIPrimaryButtonComponent = APIBaseInteractableButtonComponent<ButtonStyle.Primary>;

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
export type APIRoleSelectMenuComponent = APIBaseResolvableSelectMenuComponent<ComponentType.RoleSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APISecondaryButtonComponent = APIBaseInteractableButtonComponent<ButtonStyle.Secondary>;

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
export type APISuccessButtonComponent = APIBaseInteractableButtonComponent<ButtonStyle.Success>;

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
export type APIUserSelectMenuComponent = APIBaseResolvableSelectMenuComponent<ComponentType.UserSelect>;
