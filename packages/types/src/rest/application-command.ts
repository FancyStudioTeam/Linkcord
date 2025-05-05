import type {
  APIApplicationCommand,
  APIApplicationCommandOption,
  APIApplicationCommandPermissions,
  APIGuildApplicationCommandPermissions,
  ApplicationCommandTypes,
  IntegrationTypes,
  InteractionContextTypes,
} from "#payloads";
import type { Localizations, Nullable, Snowflake } from "#shared";

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export interface RESTBulkOverwriteGuildApplicationCommandsJSONParams {
  contexts: InteractionContextTypes[];
  default_member_permissions?: Nullable<string>;
  description: string;
  description_localizations?: Nullable<Localizations>;
  id?: Snowflake;
  integration_types: IntegrationTypes[];
  name: string;
  name_localizations?: Nullable<Localizations>;
  nsfw?: boolean;
  options?: APIApplicationCommandOption[];
  type?: ApplicationCommandTypes;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RESTCreateGlobalApplicationCommandJSONParams {
  contexts?: InteractionContextTypes[];
  default_member_permissions?: Nullable<string>;
  description?: string;
  description_localizations?: Nullable<Localizations>;
  integration_types?: IntegrationTypes[];
  name: string;
  name_localizations?: Nullable<Localizations>;
  nsfw?: boolean;
  options?: APIApplicationCommandOption[];
  type?: ApplicationCommandTypes;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RESTCreateGuildApplicationCommandJSONParams
  extends Omit<RESTCreateGlobalApplicationCommandJSONParams, "contexts" | "integration_types"> {}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface RESTEditApplicationCommandPermissionsJSONParams {
  permissions: APIApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface RESTEditGlobalApplicationCommandJSONParams
  extends Omit<Partial<RESTCreateGlobalApplicationCommandJSONParams>, "type"> {}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface RESTEditGuildApplicationCommandJSONParams
  extends Omit<Partial<RESTEditGlobalApplicationCommandJSONParams>, "contexts" | "integration_types"> {}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface RESTGetGlobalApplicationCommandsQueryStringParams {
  with_localizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
 */
export type RESTBulkOverwriteGlobalApplicationCommands = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
 */
export type RESTBulkOverwriteGuildApplicationCommands = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
 */
export type RESTCreateGlobalApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
 */
export type RESTCreateGuildApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
 */
export type RESTEditGlobalApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
 */
export type RESTEditGuildApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
 */
export type RESTEditApplicationCommandPermissions = APIGuildApplicationCommandPermissions;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command
 */
export type RESTDeleteGlobalApplicationCommand = undefined;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command
 */
export type RESTDeleteGuildApplicationCommand = undefined;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
 */
export type RESTGetApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-command
 */
export type RESTGetGlobalApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands
 */
export type RESTGetGlobalApplicationCommands = APIApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command
 */
export type RESTGetGuildApplicationCommand = APIApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions
 */
export type RESTGetGuildApplicationCommandPermissions = APIGuildApplicationCommandPermissions[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands
 */
export type RESTGetGuildApplicationCommands = APIApplicationCommand[];
