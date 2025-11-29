import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelType } from "#types/resources/Channels/enums.js";
import type { PartialEmoji } from "#types/resources/Emojis/index.js";
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
export interface ActionRowComponent extends BaseComponent<ComponentType.ActionRow> {
	components: ActionRowComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface BaseButtonComponent<Style extends ButtonStyle> extends BaseComponent<ComponentType.Button> {
	disabled?: boolean;
	style: Style;
}

/**
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface BaseComponent<Type extends ComponentType> {
	id?: number;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface BaseInteractableButtonComponent<Type extends InteractableButtonComponentStyle>
	extends BaseTextableButtonComponent<Type> {
	customId: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface BaseResolvableSelectMenuComponent<Type extends ResolvableSelectMenuComponentType>
	extends BaseSelectMenuComponent<Type> {
	defaultValues?: SelectMenuDefaultValue[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface BaseSelectMenuComponent<Type extends SelectMenuComponentType> extends BaseComponent<Type> {
	customId: string;
	disabled?: boolean;
	maxValues?: number;
	minValues?: number;
	placeholder?: string;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface BaseTextableButtonComponent<Style extends TextableButtonComponentStyle>
	extends BaseButtonComponent<Style> {
	emoji?: PartialEmoji;
	label?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface ChannelSelectMenuComponent extends BaseResolvableSelectMenuComponent<ComponentType.ChannelSelect> {
	channelTypes?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface ContainerComponent extends BaseComponent<ComponentType.Container> {
	accentColor?: number;
	components: ContainerComponents[];
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface FileComponent extends BaseComponent<ComponentType.File> {
	file: UnfurledMediaItem;
	name?: string;
	size?: number;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export interface FileUploadComponent extends BaseComponent<ComponentType.FileUpload> {
	customId: string;
	maxValues?: number;
	minValues?: number;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface LabelComponent extends BaseComponent<ComponentType.Label> {
	component: LabelComponents;
	description?: string;
	label: string;
}

/**
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface LinkButtonComponent extends BaseTextableButtonComponent<ButtonStyle.Link> {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface MediaGalleryComponent extends BaseComponent<ComponentType.MediaGallery> {
	items: MediaGalleryItem[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface MediaGalleryItem {
	description?: string;
	media: UnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface PremiumButtonComponent extends BaseButtonComponent<ButtonStyle.Premium> {
	skuId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface SectionComponent extends BaseComponent<ComponentType.Section> {
	accessory: SectionAccessory;
	components: SectionComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface SelectMenuDefaultValue {
	type: SelectMenuDefaultValueType;
	id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface SeparatorComponent extends BaseComponent<ComponentType.Separator> {
	divider?: boolean;
	spacing?: SeparatorSpacingSize;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface StringSelectMenuComponent extends BaseSelectMenuComponent<ComponentType.StringSelect> {
	options: StringSelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface StringSelectMenuOption {
	default?: boolean;
	description?: string;
	emoji?: PartialEmoji;
	label: string;
	value: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface TextDisplayComponent extends BaseComponent<ComponentType.TextDisplay> {
	content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface TextInputComponent extends BaseComponent<ComponentType.TextInput> {
	customId: string;
	maxLength?: number;
	minLength?: number;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyle;
	value?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface ThumbnailComponent extends BaseComponent<ComponentType.Thumbnail> {
	description?: string;
	media: UnfurledMediaItem;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface UnfurledMediaItem {
	attachmentId?: string;
	contentType?: string;
	height?: number;
	proxyUrl?: string;
	url: string;
	width?: number;
}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export type ActionRowComponents = ButtonComponent | SelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type ButtonComponent = InteractableButtonComponent | LinkButtonComponent | PremiumButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export type ContainerComponents =
	| ActionRowComponent
	| FileComponent
	| MediaGalleryComponent
	| SectionComponent
	| SeparatorComponent
	| TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type DangerButtonComponent = BaseInteractableButtonComponent<ButtonStyle.Danger>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type InteractableButtonComponent =
	| DangerButtonComponent
	| PrimaryButtonComponent
	| SecondaryButtonComponent
	| SuccessButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type InteractableButtonComponentStyle = Exclude<TextableButtonComponentStyle, ButtonStyle.Link>;

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type LabelComponents = FileUploadComponent | SelectMenuComponent | TextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type MentionableSelectMenuComponent = BaseResolvableSelectMenuComponent<ComponentType.MentionableSelect>;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type MessageComponent =
	| ActionRowComponent
	| ContainerComponent
	| FileComponent
	| MediaGalleryComponent
	| SectionComponent
	| SeparatorComponent
	| TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type ModalComponent = LabelComponent | TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type PrimaryButtonComponent = BaseInteractableButtonComponent<ButtonStyle.Primary>;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type ResolvableSelectMenuComponent =
	| ChannelSelectMenuComponent
	| MentionableSelectMenuComponent
	| RoleSelectMenuComponent
	| UserSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type ResolvableSelectMenuComponentType = Exclude<SelectMenuComponentType, ComponentType.StringSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type RoleSelectMenuComponent = BaseResolvableSelectMenuComponent<ComponentType.RoleSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type SecondaryButtonComponent = BaseInteractableButtonComponent<ButtonStyle.Secondary>;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type SectionAccessory = ButtonComponent | ThumbnailComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type SectionComponents = TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type SelectMenuComponent = ResolvableSelectMenuComponent | StringSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type SelectMenuComponentType =
	| ComponentType.ChannelSelect
	| ComponentType.MentionableSelect
	| ComponentType.RoleSelect
	| ComponentType.StringSelect
	| ComponentType.UserSelect;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type SuccessButtonComponent = BaseInteractableButtonComponent<ButtonStyle.Success>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type TextableButtonComponentStyle =
	| ButtonStyle.Danger
	| ButtonStyle.Link
	| ButtonStyle.Primary
	| ButtonStyle.Secondary
	| ButtonStyle.Success;

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type UserSelectMenuComponent = BaseResolvableSelectMenuComponent<ComponentType.UserSelect>;
