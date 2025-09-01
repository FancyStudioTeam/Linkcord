import type { Localizations } from "#types/miscellaneous/discord.js";
import type {
	ApplicationIntegrationTypes,
	InteractionContextTypes,
} from "#types/resources/Applications/enums.js";
import type { ApplicationCommandTypes } from "../enums.js";
import type {
	APIApplicationCommand,
	APIApplicationCommandOption,
	APIApplicationCommandPermissions,
	APIGuildApplicationCommand,
	APIGuildApplicationCommandPermissions,
} from "../structures/raw.js";

/**
 * Represents the query string parameters of the {@link RESTGetAPIApplicationCommands | `GET /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface RESTGetAPIApplicationCommandsQueryStringParams {
	/** Whether to include the full list of localized names and descriptions. */
	with_localizations?: boolean;
}

/**
 * Represents the query string parameters of the {@link RESTGetAPIGuildApplicationCommands | `GET /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params
 */
export interface RESTGetAPIGuildApplicationCommandsQueryStringParams {
	/** Whether to include the full list of localized names and descriptions. */
	with_localizations?: boolean;
}

/**
 * Represents the JSON parameters of the {@link RESTPatchAPIApplicationCommand | `PATCH /applications/(application.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface RESTPatchAPIApplicationCommandJSONParams {
	/** The contexts of the application command. */
	contexts?: InteractionContextTypes[];
	/** The default member permissions of the application command. */
	default_member_permissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	description_localizations?: Localizations | null;
	/** The integration types of the application command. */
	integration_types?: ApplicationIntegrationTypes[];
	/** The name of the application command. */
	name?: string;
	/** The localized name of the application command. */
	name_localizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: APIApplicationCommandOption[];
}

/**
 * Represents the JSON parameters of the {@link RESTPatchAPIGuildApplicationCommand | `PATCH /applications/(application.id)/guilds/(guild.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface RESTPatchAPIGuildApplicationCommandJSONParams {
	/** The default member permissions of the application command. */
	default_member_permissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	description_localizations?: Localizations | null;
	/** The name of the application command. */
	name?: string;
	/** The localized name of the application command. */
	name_localizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: APIApplicationCommandOption[];
}

/**
 * Represents the JSON parameters of the {@link RESTPostAPIApplicationCommand | `POST /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RESTPostAPIApplicationCommandJSONParams {
	/** The contexts of the application command. */
	contexts?: InteractionContextTypes[];
	/** The default member permissions of the application command. */
	default_member_permissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	description_localizations?: Localizations | null;
	/** The integration types of the application command. */
	integration_types?: ApplicationIntegrationTypes[];
	/** The name of the application command. */
	name: string;
	/** The localized name of the application command. */
	name_localizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: APIApplicationCommandOption[];
	/** The type of the application command. */
	type?: ApplicationCommandTypes;
}

/**
 * Represents the JSON parameters of the {@link RESTPostAPIGuildApplicationCommand | `POST /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RESTPostAPIGuildApplicationCommandJSONParams {
	/** The default member permissions of the application command. */
	default_member_permissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	description_localizations?: Localizations | null;
	/** The name of the application command. */
	name: string;
	/** The localized name of the application command. */
	name_localizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: APIApplicationCommandOption[];
	/** The type of the application command. */
	type?: ApplicationCommandTypes;
}

/**
 * Represents the JSON parameters of the {@link RESTPutAPIApplicationCommandPermissions | `PUT /applications/(application.id)/commands/(command.id)/permissions`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface RESTPutAPIApplicationCommandPermissionsJSONParams {
	/** The permissions of the application command. */
	permissions: APIApplicationCommandPermissions[];
}

/**
 * Represents the response of the {@link RESTDeleteAPIApplicationCommand | `DELETE /applications/(application.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command
 */
export type RESTDeleteAPIApplicationCommand = undefined;

/**
 * Represents the response of the {@link RESTDeleteAPIGuildApplicationCommand | `DELETE /applications/(application.id)/guilds/(guild.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command
 */
export type RESTDeleteAPIGuildApplicationCommand = undefined;

/**
 * Represents the response of the {@link RESTGetAPIApplicationCommand | `GET /applications/(application.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-command
 */
export type RESTGetAPIApplicationCommand = APIApplicationCommand;

/**
 * Represents the response of the {@link RESTGetAPIApplicationCommandPermissions | `GET /applications/(application.id)/commands/(command.id)/permissions`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
 */
export type RESTGetAPIApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * Represents the response of the {@link RESTGetAPIApplicationCommands | `GET /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetAPIApplicationCommands = APIApplicationCommand[];

/**
 * Represents the response of the {@link RESTGetAPIGuildApplicationCommand | `GET /applications/(application.id)/guilds/(guild.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command
 */
export type RESTGetAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * Represents the response of the {@link RESTGetAPIGuildApplicationCommandPermissions | `GET /applications/(application.id)/guilds/(guild.id)/commands/permissions`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions
 */
export type RESTGetAPIGuildApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * Represents the response of the {@link RESTGetAPIGuildApplicationCommands | `GET /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands
 */
export type RESTGetAPIGuildApplicationCommands = APIGuildApplicationCommand[];

/**
 * Represents the response of the {@link RESTPatchAPIApplicationCommand | `PATCH /applications/(application.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
 */
export type RESTPatchAPIApplicationCommand = APIApplicationCommand;

/**
 * Represents the response of the {@link RESTPatchAPIGuildApplicationCommand | `PATCH /applications/(application.id)/guilds/(guild.id)/commands/(command.id)`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
 */
export type RESTPatchAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * Represents the response of the {@link RESTPostAPIApplicationCommand | `POST /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
 */
export type RESTPostAPIApplicationCommand = APIApplicationCommand;

/**
 * Represents the response of the {@link RESTPostAPIGuildApplicationCommand | `POST /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
 */
export type RESTPostAPIGuildApplicationCommand = APIGuildApplicationCommand;

/**
 * Represents the response of the {@link RESTPutAPIApplicationCommandPermissions | `PUT /applications/(application.id)/commands/(command.id)/permissions`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export type RESTPutAPIApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * Represents the response of the {@link RESTPutAPIApplicationCommands | `PUT /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
 */
export type RESTPutAPIApplicationCommands = APIApplicationCommand[];

/**
 * Represents the JSON parameters of the {@link RESTPutAPIApplicationCommandsJSONParams | `PUT /applications/(application.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type RESTPutAPIApplicationCommandsJSONParams = APIApplicationCommand[];

/**
 * Represents the response of the {@link RESTPutAPIGuildApplicationCommands | `PUT /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
 */
export type RESTPutAPIGuildApplicationCommands = APIGuildApplicationCommand[];

/**
 * Represents the JSON parameters of the {@link RESTPutAPIGuildApplicationCommandsJSONParams | `PUT /applications/(application.id)/guilds/(guild.id)/commands`} endpoint.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type RESTPutAPIGuildApplicationCommandsJSONParams = APIGuildApplicationCommand[];
