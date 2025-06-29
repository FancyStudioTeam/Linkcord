import type { Snowflake } from "../shared/discord.js";
import type {
    APIActionRowComponentBase,
    APIButtonComponentBase,
    APIComponentBase,
    APIResolvedSelectMenuComponentBase,
    APISelectMenuComponentBase,
} from "./base/component.js";
import type { ChannelTypes } from "./Channels.js";
import type { APIPartialEmoji } from "./Emojis.js";

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface APIChannelSelectMenuComponent
    extends APIResolvedSelectMenuComponentBase<ComponentTypes.ChannelSelect> {
    channel_types?: ChannelTypes[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface APIContainerComponent extends APIComponentBase<ComponentTypes.Container> {
    accent_color?: number;
    components: APIContainerComponents[];
    spoiler?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface APIFileComponent extends APIComponentBase<ComponentTypes.File> {
    file: APIUnfurledMediaItem;
    spoiler?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APILinkButtonComponent extends APIButtonComponentBase<ButtonStyles.Link> {
    url: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface APIMediaGalleryComponent extends APIComponentBase<ComponentTypes.MediaGallery> {
    items: APIMediaGalleryItem[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-item-structure
 */
export interface APIMediaGalleryItem {
    description?: string;
    media: APIUnfurledMediaItem;
    spoiler?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIPremiumButtonComponent
    extends Omit<APIButtonComponentBase<ButtonStyles.Premium>, "emoji" | "label"> {
    sku_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APITextButtonComponent
    extends APIButtonComponentBase<
        ButtonStyles.Danger | ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success
    > {
    custom_id: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface APISectionComponent extends APIComponentBase<ComponentTypes.Section> {
    accessory: APISectionAccessory;
    components: APITextDisplayComponent[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface APIStringSelectMenuComponent
    extends APISelectMenuComponentBase<ComponentTypes.StringSelect> {
    options: APISelectMenuOption[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface APISelectMenuDefaultValue {
    id: Snowflake;
    type: SelectMenuDefaultValueTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#string-select-select-option-structure
 */
export interface APISelectMenuOption {
    default?: boolean;
    description?: string;
    emoji?: APIPartialEmoji;
    label: string;
    value: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface APISeparatorComponent extends APIComponentBase<ComponentTypes.Separator> {
    divider?: boolean;
    spacing?: SeparatorSpacingSizes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface APITextDisplayComponent extends APIComponentBase<ComponentTypes.TextDisplay> {
    content: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface APITextInputComponent
    extends Omit<APIComponentBase<ComponentTypes.TextInput>, "disabled"> {
    custom_id: string;
    label: string;
    max_length?: number;
    min_length?: number;
    placeholder?: string;
    required?: boolean;
    style: TextInputStyles;
    value?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface APIThumbnailComponent extends APIComponentBase<ComponentTypes.Thumbnail> {
    description?: string;
    media: APIUnfurledMediaItem;
    spoiler?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface APIUnfurledMediaItem {
    content_type?: string;
    height?: number | null;
    proxy_url?: string;
    url: string;
    width?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export type APIActionRowComponent = APIMessageActionRowComponent | APIModalActionRowComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIButtonComponent =
    | APILinkButtonComponent
    | APIPremiumButtonComponent
    | APITextButtonComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIComponent = APIContentComponents | APIInteractiveComponents | APILayoutComponents;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export type APIContainerComponents =
    | APIFileComponent
    | APIMediaGalleryComponent
    | APIMessageActionRowComponent
    | APISectionComponent
    | APISeparatorComponent
    | APITextDisplayComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIContentComponents =
    | APIMediaGalleryComponent
    | APIThumbnailComponent
    | APITextDisplayComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIInteractiveComponents =
    | APIButtonComponent
    | APISelectMenuComponent
    | APITextInputComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APILayoutComponents =
    | APIActionRowComponent
    | APIContainerComponent
    | APISectionComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export type APIMentionableSelectMenuComponent =
    APIResolvedSelectMenuComponentBase<ComponentTypes.MentionableSelect>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export type APIMessageActionRowComponent = APIActionRowComponentBase<APIMessageActionRowComponents>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export type APIMessageActionRowComponents = APIButtonComponent | APISelectMenuComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APIMessageComponent =
    | APIContainerComponent
    | APIFileComponent
    | APIMediaGalleryComponent
    | APIMessageActionRowComponent
    | APISectionComponent
    | APISeparatorComponent
    | APITextDisplayComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export type APIModalActionRowComponent = APIActionRowComponentBase<APIModalActionRowComponents>;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APIModalActionRowComponents = APITextInputComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export type APIModalComponents = APIModalActionRowComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIResolvedSelectMenu =
    | APIChannelSelectMenuComponent
    | APIMentionableSelectMenuComponent
    | APIRoleSelectMenuComponent
    | APIUserSelectMenuComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export type APIRoleSelectMenuComponent =
    APIResolvedSelectMenuComponentBase<ComponentTypes.RoleSelect>;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export type APISectionAccessory = APIButtonComponent | APIThumbnailComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APISelectMenuComponent = APIResolvedSelectMenu | APIStringSelectMenuComponent;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export type APIUserSelectMenuComponent =
    APIResolvedSelectMenuComponentBase<ComponentTypes.UserSelect>;

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#button-button-styles
 */
export enum ButtonStyles {
    Danger = 4,
    Link = 5,
    Premium = 6,
    Primary = 1,
    Secondary = 2,
    Success = 3,
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export enum ComponentTypes {
    ActionRow = 1,
    Button = 2,
    ChannelSelect = 8,
    Container = 17,
    File = 13,
    MediaGallery = 12,
    MentionableSelect = 7,
    RoleSelect = 6,
    Section = 9,
    Separator = 14,
    StringSelect = 3,
    TextDisplay = 10,
    TextInput = 4,
    Thumbnail = 11,
    UserSelect = 5,
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export enum SelectMenuDefaultValueTypes {
    Channel = "channel",
    Role = "role",
    User = "user",
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export enum SeparatorSpacingSizes {
    Small = 1,
    Large = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-styles
 */
export enum TextInputStyles {
    Short = 1,
    Paragraph = 2,
}
