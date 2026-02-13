import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { PartialEmoji } from '#types/resources/Emojis/index.js';
import type { ButtonStyle, ComponentType, SelectMenuDefaultValueType, SeparatorSpacingSize, TextInputStyle } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface ActionRowComponent extends ComponentBase<ComponentType.ActionRow> {
	components: ActionRowChildComponent[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface ButtonComponentBase<Style extends ButtonStyle> extends ComponentBase<ComponentType.Button> {
	disabled?: boolean;
	style: Style;
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface ChannelSelectMenuComponent extends ResolvableSelectMenuComponentBase<ComponentType.ChannelSelect> {
	channelTypes?: ChannelType[];
}

/**
 * @undocumented
 */
export interface CheckboxComponent extends ComponentBase<ComponentType.Checkbox> {
	customId: string;
	default?: boolean;
}

/**
 * @undocumented
 */
export interface CheckboxGroupComponent extends ComponentBase<ComponentType.CheckboxGroup> {
	customId: string;
	maxValues?: number;
	minValues?: number;
	options: CheckboxComponent[];
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface ComponentBase<Type extends ComponentType> {
	id?: number;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface ContainerComponent extends ComponentBase<ComponentType.Container> {
	accentColor?: number;
	components: ContainerChildComponent[];
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface FileComponent extends ComponentBase<ComponentType.File> {
	file: UnfurledMediaItem;
	name?: string;
	size?: number;
	spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-upload-file-upload-structure
 */
export interface FileUploadComponent extends ComponentBase<ComponentType.FileUpload> {
	customId: string;
	maxValues?: number;
	minValues?: number;
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface InteractiveButtonComponentBase<Type extends InteractiveButtonComponentStyle> extends TextableButtonComponentBase<Type> {
	customId: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface LabelComponent extends ComponentBase<ComponentType.Label> {
	component: LabelChildComponent;
	description?: string;
	label: string;
}

/**
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface LinkButtonComponent extends TextableButtonComponentBase<ButtonStyle.Link> {
	url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface MediaGalleryComponent extends ComponentBase<ComponentType.MediaGallery> {
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
export interface PremiumButtonComponent extends ButtonComponentBase<ButtonStyle.Premium> {
	skuId: Snowflake;
}

/**
 * @undocumented
 */
export interface RadioGroupComponent extends ComponentBase<ComponentType.RadioGroup> {
	customId: string;
	options: CheckboxComponent[];
	required?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface ResolvableSelectMenuComponentBase<Type extends ResolvableSelectMenuComponentType> extends SelectMenuComponentBase<Type> {
	defaultValues?: SelectMenuDefaultValue[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface SectionComponent extends ComponentBase<ComponentType.Section> {
	accessory: SectionAccessory;
	components: SectionChildComponent[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface SelectMenuComponentBase<Type extends SelectMenuComponentType> extends ComponentBase<Type> {
	customId: string;
	disabled?: boolean;
	maxValues?: number;
	minValues?: number;
	placeholder?: string;
	required?: boolean;
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
export interface SeparatorComponent extends ComponentBase<ComponentType.Separator> {
	divider?: boolean;
	spacing?: SeparatorSpacingSize;
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface StringSelectMenuComponent extends SelectMenuComponentBase<ComponentType.StringSelect> {
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
export interface TextDisplayComponent extends ComponentBase<ComponentType.TextDisplay> {
	content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface TextInputComponent extends ComponentBase<ComponentType.TextInput> {
	customId: string;
	maxLength?: number;
	minLength?: number;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyle;
	value?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export interface TextableButtonComponentBase<Style extends TextableButtonComponentStyle> extends ButtonComponentBase<Style> {
	emoji?: PartialEmoji;
	label?: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface ThumbnailComponent extends ComponentBase<ComponentType.Thumbnail> {
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
export type ActionRowChildComponent = ButtonComponent | SelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type ButtonComponent = InteractiveButtonComponent | LinkButtonComponent | PremiumButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-child-components
 */
export type ContainerChildComponent =
	| ActionRowComponent
	| FileComponent
	| MediaGalleryComponent
	| SectionComponent
	| SeparatorComponent
	| TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type DangerButtonComponent = InteractiveButtonComponentBase<ButtonStyle.Danger>;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type InteractiveButtonComponent = DangerButtonComponent | PrimaryButtonComponent | SecondaryButtonComponent | SuccessButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button
 */
export type InteractiveButtonComponentStyle = Exclude<TextableButtonComponentStyle, ButtonStyle.Link>;

/**
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type LabelChildComponent = FileUploadComponent | SelectMenuComponent | TextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type MentionableSelectMenuComponent = ResolvableSelectMenuComponentBase<ComponentType.MentionableSelect>;

/**
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type MessageChildComponent =
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
export type ModalChildComponent = LabelComponent | TextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type PrimaryButtonComponent = InteractiveButtonComponentBase<ButtonStyle.Primary>;

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
export type RoleSelectMenuComponent = ResolvableSelectMenuComponentBase<ComponentType.RoleSelect>;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type SecondaryButtonComponent = InteractiveButtonComponentBase<ButtonStyle.Secondary>;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type SectionAccessory = ButtonComponent | ThumbnailComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type SectionChildComponent = TextDisplayComponent;

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
export type SuccessButtonComponent = InteractiveButtonComponentBase<ButtonStyle.Success>;

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
export type UserSelectMenuComponent = ResolvableSelectMenuComponentBase<ComponentType.UserSelect>;
