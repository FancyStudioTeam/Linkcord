import type { Nullable, Snowflake } from "#shared";
import type {
  APIButtonComponentBase,
  APIComponentBase,
  APIResolvedSelectMenuComponentBase,
  APISelectMenuComponentBase,
} from "./base/component.js";
import type { ChannelTypes } from "./channel.js";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * @see https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface APIActionRowComponent extends APIComponentBase<ComponentTypes.ActionRow> {
  components: APIActionRowComponents[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#channel-select-channel-select-structure
 */
export interface APIChannelSelectMenuComponent
  extends APIResolvedSelectMenuComponentBase<ComponentTypes.ChannelSelect> {
  channel_types?: ChannelTypes[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export interface APIContainerComponent extends APIComponentBase<ComponentTypes.Container> {
  accent_color?: number;
  components: APIContainerComponents[];
  spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#file-file-structure
 */
export interface APIFileComponent extends APIComponentBase<ComponentTypes.File> {
  file: APIUnfurledMediaItem;
  spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APILinkButtonComponent extends APIButtonComponentBase<ButtonStyles.Link> {
  url: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#media-gallery-media-gallery-structure
 */
export interface APIMediaGalleryComponent extends APIComponentBase<ComponentTypes.MediaGallery> {
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
 * @see https://discord.com/developers/docs/components/reference#mentionable-select-mentionable-select-structure
 */
export interface APIMentionableSelectMenuComponent
  extends APIResolvedSelectMenuComponentBase<ComponentTypes.MentionableSelect> {}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APIPremiumButtonComponent
  extends Omit<APIButtonComponentBase<ButtonStyles.Premium>, "emoji" | "label"> {
  sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/components/reference#role-select-role-select-structure
 */
export interface APIRoleSelectMenuComponent extends APIResolvedSelectMenuComponentBase<ComponentTypes.RoleSelect> {}

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export interface APITextButtonComponent
  extends APIButtonComponentBase<
    ButtonStyles.Danger | ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success
  > {
  custom_id: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export interface APISectionComponent extends APIComponentBase<ComponentTypes.Section> {
  accessory: APISectionAccessory;
  components: APITextDisplayComponent[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#string-select-string-select-structure
 */
export interface APIStringSelectMenuComponent extends APISelectMenuComponentBase<ComponentTypes.StringSelect> {
  options: APISelectMenuOption[];
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export interface APISelectMenuDefaultValue {
  id: Snowflake;
  type: SelectMenuDefaultValueTypes;
}

/**
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
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export interface APISeparatorComponent extends APIComponentBase<ComponentTypes.Separator> {
  divider?: boolean;
  spacing?: SeparatorSpacingSizes;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-display-text-display-structure
 */
export interface APITextDisplayComponent extends APIComponentBase<ComponentTypes.TextDisplay> {
  content: string;
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-structure
 */
export interface APITextInputComponent extends Omit<APIComponentBase<ComponentTypes.TextInput>, "disabled"> {
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
 * @see https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure
 */
export interface APIThumbnailComponent extends APIComponentBase<ComponentTypes.Thumbnail> {
  description?: string;
  media: APIUnfurledMediaItem;
  spoiler?: boolean;
}

/**
 * @see https://discord.com/developers/docs/components/reference#unfurled-media-item-structure
 */
export interface APIUnfurledMediaItem {
  content_type?: string;
  height?: Nullable<number>;
  proxy_url?: string;
  url: string;
  width?: Nullable<number>;
}

/**
 * @see https://discord.com/developers/docs/components/reference#user-select-user-select-structure
 */
export interface APIUserSelectMenuComponent extends APIResolvedSelectMenuComponentBase<ComponentTypes.UserSelect> {}

/**
 * @see https://discord.com/developers/docs/components/reference#action-row-action-row-structure
 */
export type APIActionRowComponents = APIInteractiveComponents;

/**
 * @see https://discord.com/developers/docs/components/reference#button-button-structure
 */
export type APIButtonComponent = APILinkButtonComponent | APIPremiumButtonComponent | APITextButtonComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIComponent = APIContentComponents | APIInteractiveComponents | APILayoutComponents;

/**
 * @see https://discord.com/developers/docs/components/reference#container-container-structure
 */
export type APIContainerComponents =
  | APIActionRowComponent
  | APIFileComponent
  | APIMediaGalleryComponent
  | APISectionComponent
  | APISeparatorComponent
  | APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIContentComponents = APIMediaGalleryComponent | APIThumbnailComponent | APITextDisplayComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIInteractiveComponents = APIButtonComponent | APISelectMenuComponent | APITextInputComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APILayoutComponents = APIActionRowComponent | APIContainerComponent | APISectionComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APIResolvedSelectMenu =
  | APIChannelSelectMenuComponent
  | APIMentionableSelectMenuComponent
  | APIRoleSelectMenuComponent
  | APIUserSelectMenuComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#section-section-structure
 */
export type APISectionAccessory = APIButtonComponent | APIThumbnailComponent;

/**
 * @see https://discord.com/developers/docs/components/reference#component-reference
 */
export type APISelectMenuComponent = APIResolvedSelectMenu | APIStringSelectMenuComponent;

/**
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
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export enum SelectMenuDefaultValueTypes {
  Channel = "channel",
  Role = "role",
  User = "user",
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export enum SeparatorSpacingSizes {
  Small = 1,
  Large = 2,
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-styles
 */
export enum TextInputStyles {
  Short = 1,
  Paragraph = 2,
}
