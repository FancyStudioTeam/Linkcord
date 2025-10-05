import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelTypes } from "#types/resources/Channels/enums.js";
import type { APIPartialEmoji } from "#types/resources/Emojis/index.js";
import type {
	ButtonStyles,
	ComponentTypes,
	SelectMenuDefaultValueTypes,
	SeparatorSpacingSizes,
	TextInputStyle,
} from "../enums.js";

/**
 * Represents an action row component.
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export interface APIActionRowComponent extends APIBaseComponent<ComponentTypes.ActionRow> {
	/** The components of the action row. */
	components: APIActionRowComponents[];
}

/**
 * Represents the base structure of a button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIBaseButtonComponent<Style extends ButtonStyles> extends APIBaseComponent<ComponentTypes.Button> {
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** The style of the button. */
	style: Style;
}

/**
 * Represents the base structure of a component.
 * @see https://discord.com/developers/docs/components/reference#anatomy-of-a-component
 */
export interface APIBaseComponent<Type extends ComponentTypes> {
	/** The ID of the component. */
	id?: number;
	/** The type of the component. */
	type: Type;
}

/**
 * Represents the base structure of a resolved select menu component.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export interface APIBaseResolvedSelectMenuComponent<Type extends APIResolvedSelectMenuComponentTypes>
	extends APIBaseSelectMenuComponent<Type> {
	/** The default values of the select menu. */
	default_values?: APISelectMenuDefaultValue[];
}

/**
 * Represents the base structure of a select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface APIBaseSelectMenuComponent<Type extends APISelectMenuTypes> extends APIBaseComponent<Type> {
	/** The custom ID of the select menu. */
	custom_id: string;
	/** Whether the select menu is disabled. */
	disabled?: boolean;
	/** The maximum values of the select menu. */
	max_values?: number;
	/** The minimum values of the select menu. */
	min_values?: number;
	/** The placeholder of the select menu. */
	placeholder?: string;
	/** Whether the select menu is required for the modal. */
	required?: boolean;
}

/**
 * Represents a button component for buttons with a custom ID.
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface APIBaseTextButtonComponent<Type extends APITextableButtonComponentStyles>
	extends APIBaseTextableButtonComponent<Type> {
	/** The custom ID of the button. */
	custom_id: string;
}

/**
 * Represents the base structure of a textable button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIBaseTextableButtonComponent<Style extends APITextableButtonComponentStyles>
	extends APIBaseButtonComponent<Style> {
	/** The emoji of the button. */
	emoji?: APIPartialEmoji;
	/** The label of the button. */
	label?: string;
}

/**
 * Represents a channel select menu component.
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface APIChannelSelectMenuComponent
	extends APIBaseResolvedSelectMenuComponent<ComponentTypes.ChannelSelect> {
	/** The channels of the select menu. */
	channel_types?: ChannelTypes[];
}

/**
 * Represents a container component.
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface APIContainerComponent extends APIBaseComponent<ComponentTypes.Container> {
	/** The accent color of the container. */
	accent_color?: number;
	/** The components of the container. */
	components: APIContainerComponents[];
	/** Whether the container is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a file component.
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface APIFileComponent extends APIBaseComponent<ComponentTypes.File> {
	/** The file of the component. */
	file: APIUnfurledMediaItem;
	/** The name of the file. */
	name: string;
	/** The size of the file. */
	size?: number;
	/** Whether the file is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a label component.
 * @see https://discord.com/developers/docs/components/reference#label-label-structure
 */
export interface APILabelComponent extends APIBaseComponent<ComponentTypes.Label> {
	/** The component of the label. */
	component: APILabelComponents;
	/** The description of the label. */
	description?: string;
	/** The text of the label. */
	label: string;
}

/**
 * Represents a button component for buttons with a URL.
 * @see https://discord.com/developers/docs/components/button#link-button-structure
 */
export interface APILinkButtonComponent extends APIBaseTextableButtonComponent<ButtonStyles.Link> {
	/** The URL of the button. */
	url: string;
}

/**
 * Represents a media gallery component.
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface APIMediaGalleryComponent extends APIBaseComponent<ComponentTypes.MediaGallery> {
	/** The items of the media gallery. */
	items: APIMediaGalleryItem[];
}

/**
 * Represents a media gallery item.
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface APIMediaGalleryItem {
	/** The description of the media item. */
	description?: string;
	/** The media of the media item. */
	media: APIUnfurledMediaItem;
	/** Whether the media item is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents a button component for buttons with a sku ID.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIPremiumButtonComponent extends APIBaseButtonComponent<ButtonStyles.Premium> {
	/** The ID of the sku of the button. */
	sku_id: Snowflake;
}

/**
 * Represents a section component.
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface APISectionComponent extends APIBaseComponent<ComponentTypes.Section> {
	/** The accessory of the section. */
	accessory: APISectionAccessory;
	/** The components of the section. */
	components: APISectionComponents[];
}

/**
 * Represents the default value of a select menu component.
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface APISelectMenuDefaultValue {
	/** The type of the default value. */
	type: SelectMenuDefaultValueTypes;
	/** The ID of the default value. */
	id: Snowflake;
}

/**
 * Represents a separator component.
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface APISeparatorComponent extends APIBaseComponent<ComponentTypes.Separator> {
	/** Whether to display a divider between the components. */
	divider?: boolean;
	/** The size of the spacing of the separator. */
	spacing?: SeparatorSpacingSizes;
}

/**
 * Represents a select menu for string values.
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuComponent extends APIBaseSelectMenuComponent<ComponentTypes.StringSelect> {
	/** The string options of the select menu. */
	options: APIStringSelectMenuOption[];
}

/**
 * Represents a select menu option.
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APIStringSelectMenuOption {
	/** Whether the option is default. */
	default?: boolean;
	/** The description of the select menu option. */
	description?: string;
	/** The emoji of the select menu option. */
	emoji?: APIPartialEmoji;
	/** The label of the select menu option. */
	label: string;
	/** The value of the select menu option. */
	value: string;
}

/**
 * Represents a text display component.
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface APITextDisplayComponent extends APIBaseComponent<ComponentTypes.TextDisplay> {
	/** The content of the text display. */
	content: string;
}

/**
 * Represents a text input component.
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface APITextInputComponent extends APIBaseComponent<ComponentTypes.TextInput> {
	/** The custom ID of the text input. */
	custom_id: string;
	/** The maximum length of the text input. */
	max_length?: number;
	/** The minimum length of the text input. */
	min_length?: number;
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
export interface APIThumbnailComponent extends APIBaseComponent<ComponentTypes.Thumbnail> {
	/** The description of the thumbnail. */
	description?: string;
	/** The media of the thumbnail. */
	media: APIUnfurledMediaItem;
	/** Whether the thumbnail is a spoiler. */
	spoiler?: boolean;
}

/**
 * Represents an unfurled media item.
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface APIUnfurledMediaItem {
	/** The ID of the attachment of the media item. */
	attachment_id?: string;
	/** The content type of the media item. */
	content_type?: string;
	/** The height of the media item. */
	height?: number;
	/** The proxy URL of the media item. */
	proxy_url?: string;
	/** The URL of the media item. */
	url: string;
	/** The width of the media item. */
	width?: number;
}

/**
 * Represents a component for action row components.
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-child-components
 */
export type APIActionRowComponents = APIButtonComponent | APISelectMenuComponent;

/**
 * Represents a button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIButtonComponent = APILinkButtonComponent | APIPremiumButtonComponent | APITextButtonComponent;

/**
 * Represents a component.
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type APIComponent =
	| APIButtonComponent
	| APISelectMenuComponent
	| APISeparatorComponent
	| APITextDisplayComponent
	| APITextInputComponent;

/**
 * Represents a component for container components.
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
 * Represents a danger button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIDangerButtonComponent = APIBaseTextButtonComponent<ButtonStyles.Danger>;

/**
 * Represents a component for label components.
 * @see https://discord.com/developers/docs/components/reference#label-label-child-components
 */
export type APILabelComponents = APISelectMenuComponent | APITextInputComponent;

/**
 * Represents a mentionable select menu component.
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type APIMentionableSelectMenuComponent = APIBaseResolvedSelectMenuComponent<ComponentTypes.MentionableSelect>;

/**
 * Represents a component for messages.
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
 * Represents a component for modals.
 * @see https://discord.com/developers/docs/components/component-object#component-object-component-types
 */
export type APIModalComponent = APILabelComponent | APITextInputComponent;

/**
 * Represents a primary button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIPrimaryButtonComponent = APIBaseTextButtonComponent<ButtonStyles.Primary>;

/**
 * Represents a resolveable select menu component type.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APIResolvedSelectMenuComponentTypes = Exclude<APISelectMenuTypes, ComponentTypes.StringSelect>;

/**
 * Represents a role select menu component.
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type APIRoleSelectMenuComponent = APIBaseResolvedSelectMenuComponent<ComponentTypes.RoleSelect>;

/**
 * Represents a secondary button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APISecondaryButtonComponent = APIBaseTextButtonComponent<ButtonStyles.Secondary>;

/**
 * Represents an accessory of a section component.
 * @see https://discord.com/developers/docs/components/reference#section-section-accessory-components
 */
export type APISectionAccessory = APIButtonComponent | APIThumbnailComponent;

/**
 * Represents a component for section components.
 * @see https://discord.com/developers/docs/components/reference#section-section-child-components
 */
export type APISectionComponents = APITextDisplayComponent;

/**
 * Represents a select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type APISelectMenuComponent = APIResolvedSelectMenuComponent | APIStringSelectMenuComponent;

/**
 * Represents a select menu component type.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APISelectMenuTypes =
	| ComponentTypes.ChannelSelect
	| ComponentTypes.MentionableSelect
	| ComponentTypes.RoleSelect
	| ComponentTypes.StringSelect
	| ComponentTypes.UserSelect;

/**
 * Represents a success button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APISuccessButtonComponent = APIBaseTextButtonComponent<ButtonStyles.Success>;

/**
 * Represents a resolveable select menu component.
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export type APIResolvedSelectMenuComponent =
	| APIChannelSelectMenuComponent
	| APIMentionableSelectMenuComponent
	| APIRoleSelectMenuComponent
	| APIUserSelectMenuComponent;

/**
 * Represents a text button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APITextButtonComponent =
	| APIDangerButtonComponent
	| APIPrimaryButtonComponent
	| APISecondaryButtonComponent
	| APISuccessButtonComponent;

/**
 * Represents a textable button component style.
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APITextableButtonComponentStyles =
	| ButtonStyles.Danger
	| ButtonStyles.Link
	| ButtonStyles.Primary
	| ButtonStyles.Secondary
	| ButtonStyles.Success;

/**
 * Represents a user select menu component.
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type APIUserSelectMenuComponent = APIBaseResolvedSelectMenuComponent<ComponentTypes.UserSelect>;
