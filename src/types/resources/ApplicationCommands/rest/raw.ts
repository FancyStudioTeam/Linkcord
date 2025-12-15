import type { Localizations } from "#types/miscellaneous/discord.js";
import type { ApplicationIntegrationType } from "#types/resources/Applications/enums.js";
import type { InteractionContextType } from "#types/resources/Interactions/enums.js";
import type { ApplicationCommandType } from "../enums.js";
import type {
	APIApplicationCommand,
	APIApplicationCommandOption,
	APIApplicationCommandPermissions,
	APIGuildApplicationCommand,
	APIGuildApplicationCommandPermissions,
} from "../structures/raw.js";

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface RESTGetAPIApplicationCommandsQueryStringParams {
	with_localizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params
 */
export interface RESTGetAPIGuildApplicationCommandsQueryStringParams {
	with_localizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface RESTPatchAPIApplicationCommandJSONParams {
	contexts?: InteractionContextType[];
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	integration_types?: ApplicationIntegrationType[];
	name?: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: APIApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface RESTPatchAPIGuildApplicationCommandJSONParams {
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	name?: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: APIApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RESTPostAPIApplicationCommandJSONParamsBase {
	contexts?: InteractionContextType[];
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	integration_types?: ApplicationIntegrationType[];
	name: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: APIApplicationCommandOption[];
	type: ApplicationCommandType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RESTPostAPIGuildApplicationCommandJSONParams {
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	name: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: APIApplicationCommandOption[];
	type?: ApplicationCommandType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface RESTPutAPIApplicationCommandPermissionsJSONParams {
	permissions: APIApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command
 */
export type RESTDeleteAPIApplicationCommand = undefined;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command
 */
export type RESTDeleteAPIGuildApplicationCommand = undefined;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-command
 */
export type RESTGetAPIApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
 */
export type RESTGetAPIApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetAPIApplicationCommands = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command
 */
export type RESTGetAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions
 */
export type RESTGetAPIGuildApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands
 */
export type RESTGetAPIGuildApplicationCommands = APIGuildApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
 */
export type RESTPatchAPIApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
 */
export type RESTPatchAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
 */
export type RESTPostAPIApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
 */
export type RESTPostAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export type RESTPutAPIApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
 */
export type RESTPutAPIApplicationCommands = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type RESTPutAPIApplicationCommandsJSONParams = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
 */
export type RESTPutAPIGuildApplicationCommands = APIGuildApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type RESTPutAPIGuildApplicationCommandsJSONParams = APIGuildApplicationCommand[];
