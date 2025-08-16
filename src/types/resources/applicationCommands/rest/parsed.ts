import type { Localizations } from "#types/miscellaneous/discord.js";
import type {
	ApplicationIntegrationTypes,
	InteractionContextTypes,
} from "#types/resources/applications/enums.js";
import type { ApplicationCommandTypes } from "../enums.js";
import type {
	ApplicationCommandOption,
	ApplicationCommandPermissions,
} from "../structures/parsed.js";

/**
 * The options to use when creating an application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreateApplicationCommandOptions {
	/** The contexts of the application command. */
	contexts?: InteractionContextTypes[];
	/** The default member permissions of the application command. */
	defaultMemberPermissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	descriptionLocalizations?: Localizations | null;
	/** The integration types of the application command. */
	integrationTypes?: ApplicationIntegrationTypes[];
	/** The name of the application command. */
	name: string;
	/** The localized name of the application command. */
	nameLocalizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: ApplicationCommandOption[];
	/** The type of the application command. */
	type?: ApplicationCommandTypes;
}

/**
 * The options to use when creating a guild application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface CreateGuildApplicationCommandOptions {
	/** The default member permissions of the application command. */
	defaultMemberPermissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	descriptionLocalizations?: Localizations | null;
	/** The name of the application command. */
	name: string;
	/** The localized name of the application command. */
	nameLocalizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: ApplicationCommandOption[];
	/** The type of the application command. */
	type?: ApplicationCommandTypes;
}

/**
 * The options to use when editing an application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface EditApplicationCommandOptions {
	/** The contexts of the application command. */
	contexts?: InteractionContextTypes[];
	/** The default member permissions of the application command. */
	defaultMemberPermissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	descriptionLocalizations?: Localizations | null;
	/** The integration types of the application command. */
	integrationTypes?: ApplicationIntegrationTypes[];
	/** The name of the application command. */
	name?: string;
	/** The localized name of the application command. */
	nameLocalizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: ApplicationCommandOption[];
}

/**
 * The options to use when editing an application command permissions.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface EditApplicationCommandPermissionsOptions {
	/** The permissions of the application command. */
	permissions: ApplicationCommandPermissions[];
}

/**
 * The options to use when editing a guild application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface EditGuildApplicationCommandOptions {
	/** The default member permissions of the application command. */
	defaultMemberPermissions?: string | null;
	/** The description of the application command. */
	description?: string;
	/** The localized description of the application command. */
	descriptionLocalizations?: Localizations | null;
	/** The name of the application command. */
	name?: string;
	/** The localized name of the application command. */
	nameLocalizations?: Localizations | null;
	/** Whether the command is age-restricted. */
	nsfw?: boolean;
	/** The options of the application command. */
	options?: ApplicationCommandOption[];
}

/**
 * The options to use when getting the application commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface GetApplicationCommandsOptions {
	/** Whether to include the full list of localized names and descriptions. */
	withLocalizations?: boolean;
}

/**
 * The options to use when getting the guild application commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params
 */
export interface GetGuildApplicationCommandsOptions {
	/** Whether to include the full list of localized names and descriptions. */
	withLocalizations?: boolean;
}

/**
 * The options to use when bulk editing application commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type EditApplicationCommandBulkOptions = CreateApplicationCommandOptions[];

/**
 * The options to use when bulk editing guild application commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type EditGuildApplicationCommandBulkOptions = CreateGuildApplicationCommandOptions[];
