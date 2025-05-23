import type { APIApplication } from "../payloads/application.js";
import type { APIAuthorizationInformation } from "../payloads/oauth2.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information
 */
export type RESTGetCurrentAuthorizationInformation = APIAuthorizationInformation;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information
 */
export type RESTGetCurrentBotApplicationInformation = APIApplication;
