import type { Locale, Snowflake } from "#types/shared";
import { ApplicationIntegrationTypes } from "./application.js";
import type { APIPartialChannel, ChannelTypes } from "./channel.js";
import type { APIPartialEmoji } from "./emoji.js";
import type { APIEntitlement } from "./entitlement.js";
import type { APIGuildMember, APIPartialGuild } from "./guild.js";
import type { APIAttachment, APIMessage, APIPartialMessage } from "./message.js";
import type { APIRole } from "./permission.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface APIActionRow {
  components: APIComponent[];
  type: ComponentTypes.ActionRow;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface APIApplicationCommandInteractionData {
  guild_id?: Snowflake;
  id: Snowflake;
  name: string;
  options?: APIApplicationCommandInteractionDataOption[];
  resolved?: APIResolvedData;
  target_id?: Snowflake;
  type: ApplicationCommandTypes;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
 */
export interface APIApplicationCommandInteractionDataOption {
  focused?: boolean;
  name: string;
  options?: APIApplicationCommandInteractionDataOption[];
  type: ApplicationCommandOptionTypes;
  value?: string | number | boolean;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIAuthorizingIntegrationOwners {
  [ApplicationIntegrationTypes.GuildInstall]?: Snowflake;
  [ApplicationIntegrationTypes.UserInstall]?: Snowflake;
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
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIInteraction {
  app_permissions?: string;
  application_id: Snowflake;
  attachment_size_limit: number;
  authorizing_integration_owners: APIAuthorizingIntegrationOwners;
  channel?: APIPartialChannel;
  channel_id?: Snowflake;
  context?: InteractionContextTypes;
  data?: APIInteractionData;
  entitlements: APIEntitlement[];
  guild?: APIPartialGuild;
  guild_id?: Snowflake;
  guild_locale?: Locale;
  id: Snowflake;
  locale: Locale;
  member?: APIGuildMember;
  message?: APIMessage;
  token: string;
  type: InteractionTypes;
  user?: APIUser;
  version: number;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APIMessageComponentInteractionData {
  component_type: ComponentTypes;
  custom_id: string;
  resolved?: APIResolvedData;
  values?: string[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface APIModalSubmitInteractionData {
  components: APIComponent[];
  custom_id: string;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIResolvedData {
  attachments?: Record<Snowflake, APIAttachment>;
  channels?: Record<Snowflake, APIPartialChannel>;
  members?: Record<Snowflake, APIResolvedDataMember>;
  messages?: Record<Snowflake, APIPartialMessage>;
  roles?: Record<Snowflake, APIRole>;
  users?: Record<Snowflake, APIUser>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIResolvedDataMember extends Omit<APIGuildMember, "deaf" | "mute" | "user"> {}

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
export type APIComponent = APIActionRow | APIButton | APISelectMenu | APITextInput;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIInteractionData =
  | APIApplicationCommandInteractionData
  | APIMessageComponentInteractionData
  | APIModalSubmitInteractionData;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum ApplicationCommandOptionTypes {
  Attachment = 11,
  Boolean = 5,
  Channel = 7,
  Integer = 4,
  Mentionable = 9,
  Number = 10,
  Role = 8,
  String = 3,
  User = 6,
  SubCommand = 1,
  SubCommandGroup = 2,
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandTypes {
  ChatInput = 1,
  User = 2,
  Message = 3,
  PrimaryEntryPoint = 4,
}

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
  MentionableSelect = 7,
  RoleSelect = 6,
  StringSelect = 3,
  TextInput = 4,
  UserSelect = 5,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export enum InteractionCallbackTypes {
  ApplicationCommandAutocompleteResult = 8,
  ChannelMessageWithSource = 4,
  DeferredChannelMessageWithSource = 5,
  DeferredUpdateMessage = 6,
  LaunchActivity = 12,
  Modal = 9,
  Pong = 1,
  UpdateMessage = 7,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
 */
export enum InteractionContextTypes {
  BotDM = 1,
  Guild = 0,
  PrivateChannel = 2,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
export enum InteractionTypes {
  ApplicationCommand = 2,
  ApplicationCommandAutocomplete = 4,
  MessageComponent = 3,
  ModalSubmit = 5,
  Ping = 1,
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
