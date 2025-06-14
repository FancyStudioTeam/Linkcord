import type { APIMessageComponents } from "../payloads/component.js";
import type {
  APIAllowedMentions,
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
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages-query-string-params
 */
export interface RESTGetChannelMessageQueryStringParams {
  after?: Snowflake;
  around?: Snowflake;
  before?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-reactions-query-string-params
 */
export interface RESTGetChannelMessageReactionsQueryStringParams {
  after?: Snowflake;
  limit?: number;
  type?: ReactionTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface RESTPatchChannelMessageJSONParams {
  allowed_mentions?: APIAllowedMentions | null;
  attachments?: APIPartialAttachment[] | null;
  components?: APIMessageComponents[] | null;
  content?: string | null;
  embeds?: APIEmbed[] | null;
  flags?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface RESTPostChannelMessageJSONParams {
  allowed_mentions?: APIAllowedMentions;
  attachments?: APIPartialAttachment[];
  components?: APIMessageComponents[];
  content?: string;
  embeds?: APIEmbed[];
  enforce_nonce?: boolean;
  flags?: number;
  message_reference?: APIMessageReference;
  nonce?: number | string;
  poll?: RESTCreatePollRequest;
  sticker_ids?: Snowflake[];
  tts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface RESTPostChannelMessagesBulkJSONParams {
  messages: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-message
 */
export type RESTDeleteChannelMessage = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-own-reaction
 */
export type RESTDeleteChannelMessageReactionOwn = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-user-reaction
 */
export type RESTDeleteChannelMessageReactionUser = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions
 */
export type RESTDeleteChannelMessageReactionsBulk = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions-for-emoji
 */
export type RESTDeleteChannelMessageReactionsEmojiBulk = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-channel-message
 */
export type RESTGetChannelMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-reactions
 */
export type RESTGetChannelMessageReactions = APIUser[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages
 */
export type RESTGetChannelMessages = APIMessage[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#edit-message
 */
export type RESTPatchChannelMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTPostChannelMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#crosspost-message
 */
export type RESTPostChannelMessageCrosspost = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages
 */
export type RESTPostChannelMessagesBulk = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/message#create-reaction
 */
export type RESTPutChannelMessageReactionOwn = undefined;
