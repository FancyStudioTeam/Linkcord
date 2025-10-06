import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelTypes } from "#types/resources/Channels/enums.js";
import type { PartialEmoji } from "#types/resources/Emojis/index.js";
import type {
	ButtonStyles,
	ComponentTypes,
	SelectMenuDefaultValueType,
	SeparatorSpacingSizes,
	TextInputStyle,
} from "../enums.js";

/**
 * Represents an action row component.
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface ActionRowComponent extends BaseComponent<ComponentTypes.ActionRow> {
	/** The components of the action row. */
	components: ActionRowComponents[];
}

/**
 * Represents the base structure of a button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface BaseButtonComponent<Style extends ButtonStyles> extends BaseComponent<ComponentTypes.Button> {
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** The style of the button. */
	style: Style;
}

/**
 * Represents the base structure of a component.
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface BaseComponent<Type extends ComponentTypes> {
	/** The ID of the component. */
	id?: number;
	/** The type of the component. */
	type: Type;
}

/**
 * Represents the base structure of a resolved select menu component.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface BaseResolvedSelectMenuComponent<Type extends ResolvedSelectMenuComponentTypes>
	extends BaseSelectMenuComponent<Type> {
	/** The default values of the select menu. */
	defaultValues?: SelectMenuDefaultValue[];
}

/**
 * Represents the base structure of a select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface BaseSelectMenuComponent<Type extends SelectMenuTypes> extends BaseComponent<Type> {
	/** The custom ID of the select menu. */
	customId: string;
	/** Whether the select menu is disabled. */
	disabled?: boolean;
	/** The maximum values of the select menu. */
	maxValues?: number;
	/** The minimum values of the select menu. */
	minValues?: number;
	/** The placeholder of the select menu. */
	placeholder?: string;
	/** Whether the select menu is required for the modal. */
	required?: boolean;
}

/**
 * Represents a button component for buttons with a custom ID.
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface BaseTextButtonComponent<Type extends TextableButtonComponentStyles>
	extends BaseTextableButtonComponent<Type> {
	/** The custom ID of the button. */
	customId: string;
}

/**
 * Represents the base structure of a textable button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface BaseTextableButtonComponent<Style extends TextableButtonComponentStyles>
	extends BaseButtonComponent<Style> {
	/** The emoji of the button. */
	emoji?: PartialEmoji;
	/** The label of the button. */
	label?: string;
}

/**
 * Represents a channel select menu component.
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface ChannelSelectMenuComponent extends BaseResolvedSelectMenuComponent<ComponentTypes.ChannelSelect> {
	/** The channels of the select menu. */
	channelTypes?: ChannelTypes[];
}

/**
 * Represents a container component.
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface ContainerComponent extends BaseComponent<ComponentTypes.Container> {
	/** The accent color of the container. */
	accentColor?: number;
	/** The components of the container. */
	components: ContainerComponents[];
	/** Whether the container is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a file component.
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface FileComponent extends BaseComponent<ComponentTypes.File> {
	/** The file of the component. */
	file: UnfurledMediaItem;
	/** The name of the file. */
	name?: string;
	/** The size of the file. */
	size?: number;
	/** Whether the file is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a label component.
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface LabelComponent extends BaseComponent<ComponentTypes.Label> {
	/** The component of the label. */
	component: LabelComponents;
	/** The description of the label. */
	description?: string;
	/** The text of the label. */
	label: string;
}

/**
 * Represents a button component for buttons with a URL.
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface LinkButtonComponent extends BaseTextableButtonComponent<ButtonStyles.Link> {
	/** The URL of the button. */
	url: string;
}

/**
 * Represents a media gallery component.
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface MediaGalleryComponent extends BaseComponent<ComponentTypes.MediaGallery> {
	/** The items of the media gallery. */
	items: MediaGalleryItem[];
}

/**
 * Represents a media gallery item.
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface MediaGalleryItem {
	/** The description of the media item. */
	description?: string;
	/** The media of the media item. */
	media: UnfurledMediaItem;
	/** Whether the media item is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a button component for buttons with a sku ID.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface PremiumButtonComponent extends BaseButtonComponent<ButtonStyles.Premium> {
	/** The ID of the sku of the button. */
	skuId: Snowflake;
}

/**
 * Represents a section component.
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface SectionComponent extends BaseComponent<ComponentTypes.Section> {
	/** The accessory of the section. */
	accessory: SectionAccessory;
	/** The components of the section. */
	components: SectionComponents[];
}

/**
 * Represents the default value of a select menu component.
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface SelectMenuDefaultValue {
	/** The type of the default value. */
	type: SelectMenuDefaultValueType;
	/** The ID of the default value. */
	id: Snowflake;
}

/**
 * Represents a separator component.
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface SeparatorComponent extends BaseComponent<ComponentTypes.Separator> {
	/** Whether to display a divider between the components. */
	divider?: boolean;
	/** The size of the spacing of the separator. */
	spacing?: SeparatorSpacingSizes;
}

/**
 * Represents a select menu for string values.
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface StringSelectMenuComponent extends BaseSelectMenuComponent<ComponentTypes.StringSelect> {
	/** The string options of the select menu. */
	options: StringSelectMenuOption[];
}

/**
 * Represents a select menu option.
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface StringSelectMenuOption {
	/** Whether the option is default. */
	default?: boolean;
	/** The description of the select menu option. */
	description?: string;
	/** The emoji of the select menu option. */
	emoji?: PartialEmoji;
	/** The label of the select menu option. */
	label: string;
	/** The value of the select menu option. */
	value: string;
}

/**
 * Represents a text display component.
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface TextDisplayComponent extends BaseComponent<ComponentTypes.TextDisplay> {
	/** The content of the text display. */
	content: string;
}

/**
 * Represents a text input component.
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface TextInputComponent extends BaseComponent<ComponentTypes.TextInput> {
	/** The custom ID of the text input. */
	customId: string;
	/** The maximum length of the text input. */
	maxLength?: number;
	/** The minimum length of the text input. */
	minLength?: number;
	/** The placeholder of the text input. */
	placeholder?: string;
	/** Whether the text input is required for the modal. */
	required?: boolean;
	/** The style of the text input. */
	style: TextInputStyle;
	/** The default value of the text input. */
	value?: string;
}

/**
 * Represents a thumbnail component.
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface ThumbnailComponent extends BaseComponent<ComponentTypes.Thumbnail> {
	/** The description of the thumbnail. */
	description?: string;
	/** The media of the thumbnail. */
	media: UnfurledMediaItem;
	/** Whether the thumbnail is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents an unfurled media item.
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface UnfurledMediaItem {
	/** The ID of the attachment of the media item. */
	attachmentId?: string;
	/** The content type of the media item. */
	contentType?: string;
	/** The height of the media item. */
	height?: number;
	/** The proxy URL of the media item. */
	proxyUrl?: string;
	/** The URL of the media item. */
	url: string;
	/** The width of the media item. */
	width?: number;
}

/**
 * Represents a component for action row components.
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export type ActionRowComponents = ButtonComponent | SelectMenuComponent;

/**
 * Represents a button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type ButtonComponent = LinkButtonComponent | PremiumButtonComponent | TextButtonComponent;

/**
 * Represents a component.
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type Component =
	| ButtonComponent
	| SelectMenuComponent
	| SeparatorComponent
	| TextDisplayComponent
	| TextInputComponent;

/**
 * Represents a component for container components.
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
 * Represents a danger button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type DangerButtonComponent = BaseTextButtonComponent<ButtonStyles.Danger>;

/**
 * Represents a component for label components.
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type LabelComponents = SelectMenuComponent | TextInputComponent;

/**
 * Represents a mentionable select menu component.
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type MentionableSelectMenuComponent = BaseResolvedSelectMenuComponent<ComponentTypes.MentionableSelect>;

/**
 * Represents a component for messages.
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
 * Represents a component for modals.
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type ModalComponent = LabelComponent | TextInputComponent;

/**
 * Represents a primary button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type PrimaryButtonComponent = BaseTextButtonComponent<ButtonStyles.Primary>;

/**
 * Represents a resolveable select menu component type.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type ResolvedSelectMenuComponentTypes = Exclude<SelectMenuTypes, ComponentTypes.StringSelect>;

/**
 * Represents a role select menu component.
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type RoleSelectMenuComponent = BaseResolvedSelectMenuComponent<ComponentTypes.RoleSelect>;

/**
 * Represents a secondary button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type SecondaryButtonComponent = BaseTextButtonComponent<ButtonStyles.Secondary>;

/**
 * Represents an accessory of a section component.
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type SectionAccessory = ButtonComponent | ThumbnailComponent;

/**
 * Represents a component for section components.
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type SectionComponents = TextDisplayComponent;

/**
 * Represents a select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type SelectMenuComponent = ResolvedSelectMenuComponent | StringSelectMenuComponent;

/**
 * Represents a select menu component type.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type SelectMenuTypes =
	| ComponentTypes.ChannelSelect
	| ComponentTypes.MentionableSelect
	| ComponentTypes.RoleSelect
	| ComponentTypes.StringSelect
	| ComponentTypes.UserSelect;

/**
 * Represents a success button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type SuccessButtonComponent = BaseTextButtonComponent<ButtonStyles.Success>;

/**
 * Represents a resolveable select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type ResolvedSelectMenuComponent =
	| ChannelSelectMenuComponent
	| MentionableSelectMenuComponent
	| RoleSelectMenuComponent
	| UserSelectMenuComponent;

/**
 * Represents a text button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type TextButtonComponent =
	| DangerButtonComponent
	| PrimaryButtonComponent
	| SecondaryButtonComponent
	| SuccessButtonComponent;

/**
 * Represents a textable button component style.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type TextableButtonComponentStyles =
	| ButtonStyles.Danger
	| ButtonStyles.Link
	| ButtonStyles.Primary
	| ButtonStyles.Secondary
	| ButtonStyles.Success;

/**
 * Represents a user select menu component.
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type UserSelectMenuComponent = BaseResolvedSelectMenuComponent<ComponentTypes.UserSelect>;
