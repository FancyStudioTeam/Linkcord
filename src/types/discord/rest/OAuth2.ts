import type { APIApplication } from "../payloads/Applications.js";
import type { APIAuthorizationInformation } from "../payloads/OAuth2.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information
 */
export type RESTGetOAuth2ApplicationInformation = APIApplication;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information
 */
export type RESTGetOAuth2AuthorizationInformation = APIAuthorizationInformation;
