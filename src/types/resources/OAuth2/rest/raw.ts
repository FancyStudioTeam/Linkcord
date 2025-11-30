import type { ISO8601Date } from "#types/miscellaneous/discord.js";
import type { APIApplication, APIPartialApplication } from "#types/resources/Applications/index.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { OAuth2Scopes } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure
 */
export interface RESTGetAPICurrentAuthorizationInformation {
	application: APIPartialApplication;
	expires: ISO8601Date;
	scopes: OAuth2Scopes[];
	user?: APIUser;
}

/**
 * @see https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information
 */
export type RESTGetAPICurrentBotApplication = APIApplication;
