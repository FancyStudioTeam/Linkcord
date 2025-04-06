import type { Snowflake } from "#types/shared";
import type { ChannelTypes } from "./channel.js";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface APIActionRow {
  components: APIActionRowComponent[];
  type: ComponentTypes.ActionRow;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface APIButton {
  custom_id?: string;
  disabled?: boolean;
  emoji?: APIPartialEmoji;
  label?: string;
  sku_id?: Snowflake;
  style: ButtonStyles;
  type: ComponentTypes.Button;
  url?: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export interface APISelectMenu {
  channel_types?: ChannelTypes[];
  custom_id: string;
  default_values?: APISelectMenuDefaultValue[];
  disabled?: boolean;
  max_values?: number;
  min_values?: number;
  options?: APISelectMenuOption[];
  type:
    | ComponentTypes.StringSelect
    | ComponentTypes.UserSelect
    | ComponentTypes.RoleSelect
    | ComponentTypes.MentionableSelect
    | ComponentTypes.ChannelSelect;
  placeholder?: string;
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
export interface APITextInput {
  custom_id: string;
  label: string;
  max_length?: number;
  min_length?: number;
  placeholder?: string;
  required?: boolean;
  style: TextInputStyles;
  type: ComponentTypes.TextInput;
  value?: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
export type APIActionRowComponent = APIActionRow | APIButton | APISelectMenu | APITextInput;

/**
 * https://discord.com/developers/docs/interactions/message-components#message-components
 */
// TODO: Add `APIUIKitComponent` type.
export type APIComponent = APIActionRowComponent;

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
