import type { RESTCreatePollRequest } from "#rest";
import type { Snowflake } from "#shared";
import type {
  APIAutocompleteChoice,
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
} from "./application-command.js";
import { ApplicationIntegrationTypes } from "./application.js";
import type {
  APIInteractionBase,
  APIMessageComponentInteractionDataBase,
  APIMessageComponentSelectInteractionDataBase,
} from "./base/interaction.js";
import type { APIChannel } from "./channel.js";
import type { APIComponent, APITextInputComponent, ComponentTypes } from "./component.js";
import type { APIGuildMember } from "./guild.js";
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
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIApplicationCommandInteraction
  extends APIInteractionBase<InteractionTypes.ApplicationCommand, APIApplicationCommandInteractionData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
export interface APIApplicationCommandInteractionData {
  guild_id?: Snowflake;
  id: Snowflake;
  name: string;
  /**
   * @remarks
   * - This can be partial when type is `APPLICATION_COMMAND_AUTOCOMPLETE`.
   */
  options?: APIApplicationCommandInteractionDataOption[];
  resolved?: APIResolvedData;
  target_id?: Snowflake;
  type: ApplicationCommandTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
 */
export interface APIApplicationCommandInteractionDataOption {
  focused?: boolean;
  name: string;
  options?: APIApplicationCommandInteractionDataOption[];
  type: ApplicationCommandOptionTypes;
  value?: APIApplicationCommandInteractionDataOptionValue;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIAuthorizingIntegrationOwners {
  [ApplicationIntegrationTypes.GuildInstall]?: Snowflake;
  [ApplicationIntegrationTypes.UserInstall]?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-object
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
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export interface APIInteractionCallbackDataAutocomplete {
  choices: APIAutocompleteChoice[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export interface APIInteractionCallbackDataMessage {
  allowed_mentions?: APIAllowedMentions;
  attachments?: APIAttachment[];
  components?: APIComponent[];
  content?: string;
  embeds?: APIEmbed[];
  /**
   * @remarks
   * - If you create a callback with type `DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE`,
   *   the only valid flag you may use is `EPHEMERAL`.
   */
  flags?: MessageFlags;
  poll?: RESTCreatePollRequest;
  tts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 */
export interface APIInteractionCallbackDataModal {
  custom_id: string;
  title: string;
  components: APITextInputComponent[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-resource-object
 */
export interface APIInteractionCallbackResource {
  /**
   * @remarks
   * - This field is only present when callback type is `LAUNCH_ACTIVITY`.
   */
  activity_instance?: APIInteractionCallbackResourceActivityInstance;
  type: InteractionCallbackTypes;
  /**
   * @remarks
   * - This field is only present when callback type is either
   *   `CHANNEL_MESSAGE_WITH_SOURCE` or `UPDATE_MESSAGE`.
   */
  message?: APIMessage;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-activity-instance-resource
 */
export interface APIInteractionCallbackResourceActivityInstance {
  id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-callback-interaction-callback-response-object
 */
export interface APIInteractionCallbackResponse {
  interaction: APIInteractionCallback;
  resource?: APIInteractionCallbackResource;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
 */
export interface APIInteractionResponse {
  type: InteractionCallbackTypes;
  data?: APIInteractionCallbackData;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APIMessageComponentButtonInteractionData
  extends APIMessageComponentInteractionDataBase<ComponentTypes.Button> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIMessageComponentInteraction
  extends APIInteractionBase<InteractionTypes.MessageComponent, APIMessageComponentInteractionData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APIMessageComponentResolvedSelectInteractionData
  extends APIMessageComponentSelectInteractionDataBase<
    | ComponentTypes.ChannelSelect
    | ComponentTypes.MentionableSelect
    | ComponentTypes.RoleSelect
    | ComponentTypes.UserSelect
  > {
  resolved: APIResolvedData;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export interface APIMessageComponentStringSelectInteractionData
  extends APIMessageComponentSelectInteractionDataBase<ComponentTypes.StringSelect> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIModalSubmitInteraction
  extends APIInteractionBase<InteractionTypes.ModalSubmit, APIModalSubmitInteractionData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface APIModalSubmitInteractionData {
  components: APIComponent[];
  custom_id: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export interface APIPingInteraction extends APIInteractionBase<InteractionTypes.Ping, never> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIResolvedData {
  attachments?: Record<Snowflake, APIAttachment>;
  channels?: Record<Snowflake, APIChannel>;
  members?: Record<Snowflake, APIResolvedDataMember>;
  messages?: Record<Snowflake, APIPartialMessage>;
  roles?: Record<Snowflake, APIRole>;
  users?: Record<Snowflake, APIUser>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIResolvedDataMember extends Omit<APIGuildMember, "deaf" | "mute" | "user"> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
 */
export type APIApplicationCommandInteractionDataOptionValue = boolean | number | string;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIInteraction =
  | APIApplicationCommandInteraction
  | APIMessageComponentInteraction
  | APIModalSubmitInteraction
  | APIPingInteraction;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
 */
export type APIInteractionCallbackData =
  | APIInteractionCallbackDataAutocomplete
  | APIInteractionCallbackDataMessage
  | APIInteractionCallbackDataModal;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIInteractionData =
  | APIApplicationCommandInteractionData
  | APIMessageComponentInteractionData
  | APIModalSubmitInteractionData;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type APIMessageComponentInteractionData =
  | APIMessageComponentButtonInteractionData
  | APIMessageComponentSelectMenuInteractionData;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type APIMessageComponentSelectMenuInteractionData =
  | APIMessageComponentResolvedSelectInteractionData
  | APIMessageComponentStringSelectInteractionData;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export enum InteractionCallbackTypes {
  ApplicationCommandAutocompleteResult = 8,
  ChannelMessageWithSource = 4,
  DeferredChannelMessageWithSource = 5,
  DeferredUpdateMessage = 6,
  LaunchActivity = 12,
  /**
   * @remarks
   * - This enum is not available for `MODAL_SUBMIT` and `PING` interactions.
   */
  Modal = 9,
  Pong = 1,
  /**
   * @remarks
   * - This enum is only valid for component interactions.
   */
  UpdateMessage = 7,
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
 */
export enum InteractionContextTypes {
  BotDM = 1,
  Guild = 0,
  PrivateChannel = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
export enum InteractionTypes {
  ApplicationCommand = 2,
  ApplicationCommandAutocomplete = 4,
  MessageComponent = 3,
  ModalSubmit = 5,
  Ping = 1,
}
