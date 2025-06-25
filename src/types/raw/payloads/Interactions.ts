import type { RESTCreatePollRequest } from "../rest/index.js";
import type { Snowflake } from "../shared/discord.js";
import { ApplicationIntegrationTypes } from "./Applications.js";
import type {
  APIAutocompleteChoice,
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
} from "./application-command.js";
import type {
  APIInteractionBase,
  APIMessageComponentInteractionDataBase,
  APIMessageComponentSelectInteractionDataBase,
} from "./base/interaction.js";
import type { APIChannel } from "./channel.js";
import type { APIMessageComponents, APIModalComponents, APITextInputComponent, ComponentTypes } from "./component.js";
import type { APIGuildMember } from "./Guilds.js";
import type {
  APIAllowedMentions,
  APIAttachment,
  APIEmbed,
  APIMessage,
  APIPartialMessage,
  MessageFlags,
} from "./Messages.js";
import type { APIRole } from "./Permissions.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
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
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
 */
export interface APIApplicationCommandInteractionDataOption {
  focused?: boolean;
  name: string;
  options?: APIApplicationCommandInteractionDataOption[];
  type: ApplicationCommandOptionTypes;
  value?: boolean | number | string;
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
  components?: APIMessageComponents[];
  content?: string;
  embeds?: APIEmbed[];
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
  activity_instance?: APIInteractionCallbackResourceActivityInstance;
  type: InteractionCallbackTypes;
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
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface APIModalSubmitInteractionData {
  components: APIModalComponents[];
  custom_id: string;
}

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
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIApplicationCommandInteraction = APIInteractionBase<
  InteractionTypes.ApplicationCommand,
  APIApplicationCommandInteractionData
>;

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
export type APIMessageComponentButtonInteractionData = APIMessageComponentInteractionDataBase<ComponentTypes.Button>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIMessageComponentInteraction = APIInteractionBase<
  InteractionTypes.MessageComponent,
  APIMessageComponentInteractionData
>;

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
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 */
export type APIMessageComponentStringSelectInteractionData =
  APIMessageComponentSelectInteractionDataBase<ComponentTypes.StringSelect>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIModalSubmitInteraction = APIInteractionBase<InteractionTypes.ModalSubmit, APIModalSubmitInteractionData>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type APIPingInteraction = APIInteractionBase<InteractionTypes.Ping, never>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type APIResolvedDataMember = Omit<APIGuildMember, "deaf" | "mute" | "user">;

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
  Modal = 9,
  Pong = 1,
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
