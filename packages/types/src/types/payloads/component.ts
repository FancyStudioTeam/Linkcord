import type { Snowflake } from "#types/shared";
import type { APIButtonComponentBase, APIComponentBase, APISelectMenuComponentBase } from "./base/component.js";
import type { ChannelTypes } from "./channel.js";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface APIActionRow extends Omit<APIComponentBase<ComponentTypes.ActionRow>, "disabled"> {
  components: APIActionRowComponent[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonWithCustomId
  extends APIButtonComponentBase<
    ButtonStyles.Danger | ButtonStyles.Primary | ButtonStyles.Secondary | ButtonStyles.Success
  > {
  custom_id: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonWithSKUId extends Omit<APIButtonComponentBase<ButtonStyles.Premium>, "emoji" | "label"> {
  sku_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButtonWithUrl extends APIButtonComponentBase<ButtonStyles.Link> {
  url: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuWithChannelTypes extends APISelectMenuComponentBase<ComponentTypes.ChannelSelect> {
  channel_types?: ChannelTypes[];
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenuWithDefaultValues
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
export interface APISelectMenuWithOptions extends APISelectMenuComponentBase<ComponentTypes.StringSelect> {
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
 * https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure
 */
export interface APITextInput extends Omit<APIComponentBase<ComponentTypes.TextInput>, "disabled"> {
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
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
export type APIActionRowComponent = APIActionRow | APIButton | APISelectMenu | APITextInput;

/**
 * https://discord.com/developers/docs/interactions/message-components#buttons
 */
export type APIButton = APIButtonWithCustomId | APIButtonWithSKUId | APIButtonWithUrl;

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
// TODO: Add `APIUIKitComponent` type.
export type APIComponent = APIActionRowComponent;

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menus
 */
export type APISelectMenu = APISelectMenuWithChannelTypes | APISelectMenuWithDefaultValues | APISelectMenuWithOptions;

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
 * https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles
 */
export enum TextInputStyles {
  Short = 1,
  Paragraph = 2,
}
