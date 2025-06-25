import type { APIApplication } from "../payloads/Applications.js";
import type { APIAuthorizationInformation } from "../payloads/OAuth2.js";

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
