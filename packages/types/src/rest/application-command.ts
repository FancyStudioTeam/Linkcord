import type {
  APIApplicationCommand,
  APIApplicationCommandOption,
  APIApplicationCommandPermissions,
  APIGuildApplicationCommandPermissions,
  ApplicationCommandTypes,
} from "../payloads/application-command.js";
import type { IntegrationTypes } from "../payloads/guild.js";
import type { InteractionContextTypes } from "../payloads/interaction.js";
import type { Localizations, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export interface RESTBulkOverwriteGuildApplicationCommandsJSONParams {
  contexts: InteractionContextTypes[];
  default_member_permissions?: string | null;
  description: string;
  description_localizations?: Localizations | null;
  id?: Snowflake;
  integration_types: IntegrationTypes[];
  name: string;
  name_localizations?: Localizations | null;
  nsfw?: boolean;
  options?: APIApplicationCommandOption[];
  type?: ApplicationCommandTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RESTCreateGlobalApplicationCommandJSONParams {
  contexts?: InteractionContextTypes[];
  default_member_permissions?: string | null;
  description?: string;
  description_localizations?: Localizations | null;
  integration_types?: IntegrationTypes[];
  name: string;
  name_localizations?: Localizations | null;
  nsfw?: boolean;
  options?: APIApplicationCommandOption[];
  type?: ApplicationCommandTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RESTCreateGuildApplicationCommandJSONParams
  extends Omit<RESTCreateGlobalApplicationCommandJSONParams, "contexts" | "integration_types"> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface RESTEditApplicationCommandPermissionsJSONParams {
  permissions: APIApplicationCommandPermissions[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface RESTEditGlobalApplicationCommandJSONParams
  extends Omit<Partial<RESTCreateGlobalApplicationCommandJSONParams>, "type"> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface RESTEditGuildApplicationCommandJSONParams
  extends Omit<Partial<RESTEditGlobalApplicationCommandJSONParams>, "contexts" | "integration_types"> {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface RESTGetGlobalApplicationCommandsQueryStringParams {
  with_localizations?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
 */
export type RESTBulkOverwriteGlobalApplicationCommands = APIApplicationCommand[];

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
 */
export type RESTBulkOverwriteGuildApplicationCommands = APIApplicationCommand[];

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
 */
export type RESTCreateGlobalApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
 */
export type RESTCreateGuildApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
 */
export type RESTEditGlobalApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
 */
export type RESTEditGuildApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export type RESTEditApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command
 */
export type RESTDeleteGlobalApplicationCommand = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command
 */
export type RESTDeleteGuildApplicationCommand = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
 */
export type RESTGetApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-command
 */
export type RESTGetGlobalApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands
 */
export type RESTGetGlobalApplicationCommands = APIApplicationCommand[];

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command
 */
export type RESTGetGuildApplicationCommand = APIApplicationCommand;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions
 */
export type RESTGetGuildApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands
 */
export type RESTGetGuildApplicationCommands = APIApplicationCommand[];
