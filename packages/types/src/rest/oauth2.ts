import type { APIApplication, APIAuthorizationInformation } from "#payloads";

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
