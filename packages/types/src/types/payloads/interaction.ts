import type { RESTPollCreateRequest } from "#types/rest";
import type { Locale, Localizations, Snowflake } from "#types/shared";
import type { ApplicationCommandOptionTypes, ApplicationCommandTypes } from "./application-command.js";
import { ApplicationIntegrationTypes } from "./application.js";
import type { APIPartialChannel } from "./channel.js";
import type { APIComponent, APITextInputComponent, ComponentTypes } from "./component.js";
import type { APIEntitlement } from "./entitlement.js";
import type { APIGuildMember, APIPartialGuild } from "./guild.js";
import type {
  APIAllowedMentions,
  APIAttachment,
  APIEmbed,
  APIMessage,
  APIPartialMessage,
  MessageFlags,
} from "./message.js";
import type { APIRole } from "./permission.js";
import type { APIUser } from "./user.js";

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
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIAutocompleteChoice {
  name: string;
  name_localizations?: Localizations;
  value: string | number;
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
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-object
 */
export interface APIInteractionCallback {
  activity_instance_id?: Snowflake;
  id: Snowflake;
  response_message_ephemeral?: boolean;
  response_message_id?: Snowflake;
  response_message_loading?: boolean;
  type: InteractionTypes;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export interface APIInteractionCallbackDataAutocomplete {
  choices: APIAutocompleteChoice[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface APIInteractionCallbackDataMessage {
  allowed_mentions?: APIAllowedMentions;
  attachments?: APIAttachment[];
  components?: APIComponent[];
  content?: string;
  embeds?: APIEmbed[];
  flags?: MessageFlags;
  poll?: RESTPollCreateRequest;
  tts?: boolean;
}

/**
 * s
 */
export interface APIInteractionCallbackDataModal {
  custom_id: string;
  title: string;
  components: APITextInputComponent[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-resource-object
 */
export interface APIInteractionCallbackResource {
  activity_instance?: APIInteractionCallbackResourceActivityInstance;
  type: InteractionCallbackTypes;
  message?: APIMessage;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-activity-instance-resource
 */
export interface APIInteractionCallbackResourceActivityInstance {
  id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface APIInteractionCallbackResponse {
  interaction: APIInteractionCallback;
  resource?: APIInteractionCallbackResource;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export interface APIInteractionResponse {
  type: InteractionCallbackTypes;
  data?: APIInteractionCallbackData;
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
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
 */
export type APIInteractionCallbackData =
  | APIInteractionCallbackDataAutocomplete
  | APIInteractionCallbackDataMessage
  | APIInteractionCallbackDataModal;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIInteractionData =
  | APIApplicationCommandInteractionData
  | APIMessageComponentInteractionData
  | APIModalSubmitInteractionData;

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
