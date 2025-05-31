import type { APIComponent } from "../payloads/component.js";
import type {
  APIAllowedMentions,
  APIAttachment,
  APIEmbed,
  APIMessage,
  APIMessageReference,
  APIPartialAttachment,
  ReactionTypes,
} from "../payloads/message.js";
import type { APIUser } from "../payloads/user.js";
import type { Snowflake } from "../shared/discord.js";
import type { RESTCreatePollRequest } from "./poll.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface RESTBulkDeleteMessagesJSONParams {
  messages: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-message-json-params
 */
export interface RESTCreateMessageJSONParams {
  allowed_mentions?: APIAllowedMentions;
  attachments?: APIPartialAttachment[];
  components?: APIComponent[];
  content?: string;
  embeds?: APIEmbed[];
  enforce_nonce?: boolean;
  flags?: number;
  message_reference?: APIMessageReference;
  nonce?: number | string;
  payload_json?: string;
  poll?: RESTCreatePollRequest;
  sticker_ids?: Snowflake[];
  tts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages-query-string-params
 */
export interface RESTGetChannelMessagesStringParams {
  after?: Snowflake;
  around?: Snowflake;
  before?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-reactions-query-string-params
 */
export interface RESTGetReactionsStringParams {
  after?: Snowflake;
  limit?: number;
  type?: ReactionTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface RESTEditMessageJSONParams {
  allowed_mentions?: APIAllowedMentions | null;
  attachments?: APIAttachment[] | null;
  components?: APIComponent[] | null;
  content?: string | null;
  embeds?: APIEmbed[] | null;
  flags?: number | null;
  payload_json?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages
 */
export type RESTBulkDeleteMessages = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTCreateMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-reaction
 */
export type RESTCreateReaction = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#crosspost-message
 */
export type RESTCrosspostMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions
 */
export type RESTDeleteAllReactions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions-for-emoji
 */
export type RESTDeleteAllReactionsForEmoji = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-message
 */
export type RESTDeleteMessage = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-own-reaction
 */
export type RESTDeleteOwnReaction = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-user-reaction
 */
export type RESTDeleteUserReaction = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-channel-message
 */
export type RESTGetChannelMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages
 */
export type RESTGetChannelMessages = APIMessage[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-reactions
 */
export type RESTGetReactions = APIUser[];
