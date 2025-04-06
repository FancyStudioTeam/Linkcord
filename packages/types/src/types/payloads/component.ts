import type { Nullable, Snowflake } from "#types/shared";
import type {
  APIButtonComponentBase,
  APIComponentBase,
  APIComponentV2Base,
  APISelectMenuComponentBase,
} from "./base/component.js";
import type { ChannelTypes } from "./channel.js";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface APIActionRowComponent extends Omit<APIComponentBase<ComponentTypes.ActionRow>, "disabled"> {
  components: APIActionRowComponents[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonComponentWithCustomId
  extends APIButtonComponentBase<
    ButtonStyles.Danger | ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success
  > {
  custom_id: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonComponentWithSKUId
  extends Omit<APIButtonComponentBase<ButtonStyles.Premium>, "emoji" | "label"> {
  sku_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonComponentWithUrl extends APIButtonComponentBase<ButtonStyles.Link> {
  url: string;
}

/**
 * TODO: Add Discord reference url for `APIContainerComponent`.
 */
export interface APIContainerComponent extends APIComponentV2Base<ComponentTypes.Container> {
  accent_color?: number;
  components: APIContainerComponents[];
  spoiler?: boolean;
}

/**
 * TODO: Add Discord reference url for `APIFileComponent`.
 */
export interface APIFileComponent extends APIComponentV2Base<ComponentTypes.File> {
  file: APIUnfurledMediaItem;
  spoiler?: boolean;
}

/**
 * TODO: Add Discord reference url for `APIMediaGalleryComponent`.
 */
export interface APIMediaGalleryComponent extends APIComponentV2Base<ComponentTypes.MediaGallery> {
  items: APIMediaGalleryItem[];
}

/**
 * TODO: Add Discord reference url for `APIMediaGalleryItem`.
 */
export interface APIMediaGalleryItem {
  description?: Nullable<string>;
  media: APIUnfurledMediaItem;
  spoiler?: boolean;
}

/**
 * TODO: Add Discord reference url for `APISectionComponent`.
 */
export interface APISectionComponent extends APIComponentV2Base<ComponentTypes.Section> {
  accessory: APISectionAccessory;
  components: APITextDisplayComponent[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuComponentWithChannelTypes
  extends APISelectMenuComponentBase<ComponentTypes.ChannelSelect> {
  channel_types?: ChannelTypes[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuComponentWithDefaultValues
  extends APISelectMenuComponentBase<
    | ComponentTypes.ChannelSelect
    | ComponentTypes.UserSelect
    | ComponentTypes.MentionableSelect
    | ComponentTypes.RoleSelect
  > {
  default_values?: APISelectMenuDefaultValue[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuComponentWithOptions extends APISelectMenuComponentBase<ComponentTypes.StringSelect> {
  options: APISelectMenuOption[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure
 */
export interface APISelectMenuDefaultValue {
  id: Snowflake;
  type: SelectMenuDefaultValueTypes;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
 */
export interface APISelectMenuOption {
  default?: boolean;
  description?: string;
  emoji?: APIPartialEmoji;
  label: string;
  value: string;
}

/**
 * TODO: Add Discord reference url for `APISeparatorComponent`.
 */
export interface APISeparatorComponent extends APIComponentV2Base<ComponentTypes.Separator> {
  divider?: boolean;
  spacing?: SeparatorSpacingSizes;
}

/**
 * TODO: Add Discord reference url for `APITextDisplayComponent`.
 */
export interface APITextDisplayComponent extends APIComponentV2Base<ComponentTypes.TextDisplay> {
  content: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure
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
 * TODO: Add Discord reference url for `APIThumbnailComponent`.
 */
export interface APIThumbnailComponent extends APIComponentV2Base<ComponentTypes.Thumbnail> {
  description?: Nullable<string>;
  media: APIUnfurledMediaItem;
  spoiler?: boolean;
}

/**
 * TODO: Add Discord reference url for `APIUnfurledMediaItem`.
 */
export interface APIUnfurledMediaItem {
  url: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
export type APIActionRowComponents =
  | APIActionRowComponent
  | APIButtonComponent
  | APISelectMenuComponent
  | APITextInputComponent;

/**
 * https://discord.com/developers/docs/interactions/message-components#buttons
 */
export type APIButtonComponent =
  | APIButtonComponentWithCustomId
  | APIButtonComponentWithSKUId
  | APIButtonComponentWithUrl;

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
export type APIComponent = APIActionRowComponents | APIComponentsV2;

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
export type APIComponentsV2 =
  | APIContainerComponent
  | APIMediaGalleryComponent
  | APISectionComponent
  | APISeparatorComponent
  | APITextDisplayComponent
  | APIThumbnailComponent;

/**
 * TODO: Add Discord reference url for `APIContainerComponents`.
 */
export type APIContainerComponents =
  | APIFileComponent
  | APIMediaGalleryComponent
  | APISectionComponent
  | APISeparatorComponent
  | APITextDisplayComponent;

/**
 * TODO: Add Discord reference url for `APISectionAccessory`.
 */
export type APISectionAccessory = APIButtonComponent | APIThumbnailComponent;

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menus
 */
export type APISelectMenuComponent =
  | APISelectMenuComponentWithChannelTypes
  | APISelectMenuComponentWithDefaultValues
  | APISelectMenuComponentWithOptions;

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
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
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-types
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
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure
 */
export enum SelectMenuDefaultValueTypes {
  Channel = "channel",
  Role = "role",
  User = "user",
}

/**
 * TODO: Add Discord reference url for `SeparatorSpacingSizes`.
 */
export enum SeparatorSpacingSizes {
  Small = 1,
  Large = 2,
}

/**
 * https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles
 */
export enum TextInputStyles {
  Short = 1,
  Paragraph = 2,
}
