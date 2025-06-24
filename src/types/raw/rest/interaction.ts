import type { APIInteractionCallbackResponse, APIInteractionResponse } from "../payloads/interaction.js";
import type { APIMessage } from "../payloads/message.js";

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response-query-string-params
 */
export interface RESTCreateInteractionResponseStringParams {
  with_response: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message
 */
export type RESTCreateFollowupMessage = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
 */
export type RESTCreateInteractionResponse = APIInteractionCallbackResponse | undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
 */
export type RESTCreateInteractionResponseJSONParams = APIInteractionResponse;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/interaction#delete-followup-message
 */
export type RESTDeleteFollowupMessage = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/interaction#delete-original-interaction-response
 */
export type RESTDeleteOriginalInteractionResponse = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application-command#edit-followup-message
 */
export type RESTEditFollowupMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/interaction#edit-original-interaction-response
 */
export type RESTEditOriginalInteractionResponse = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/interaction#get-followup-message
 */
export type RESTGetFollowupMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/interaction#get-original-interaction-response
 */
export type RESTGetOriginalInteractionResponse = APIMessage;
