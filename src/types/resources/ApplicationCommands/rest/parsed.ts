import type { Localizations } from "#types/miscellaneous/discord.js";
import type { ApplicationIntegrationType } from "#types/resources/Applications/enums.js";
import type { InteractionContextType } from "#types/resources/Interactions/enums.js";
import type { ApplicationCommandType, EntryPointCommandHandlerType } from "../enums.js";
import type { ApplicationCommandOption, ApplicationCommandPermissions } from "../structures/parsed.js";

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreateApplicationCommandOptionsBase<Type extends ApplicationCommandType> {
	contexts?: InteractionContextType[];
	defaultMemberPermissions?: string | null;
	integrationTypes?: ApplicationIntegrationType[];
	name: string;
	nameLocalizations?: Localizations | null;
	nsfw?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreateChatInputApplicationCommandOptions
	extends CreateApplicationCommandOptionsBase<ApplicationCommandType.ChatInput> {
	description: string;
	descriptionLocalizations?: Localizations | null;
	options?: ApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface CreateGuildApplicationCommandOptions {
	defaultMemberPermissions?: string | null;
	description?: string;
	descriptionLocalizations?: Localizations | null;
	name: string;
	nameLocalizations?: Localizations | null;
	nsfw?: boolean;
	options?: ApplicationCommandOption[];
	type?: ApplicationCommandType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreatePrimaryEntryPointApplicationCommandOptions
	extends CreateApplicationCommandOptionsBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface EditApplicationCommandOptions {
	contexts?: InteractionContextType[];
	defaultMemberPermissions?: string | null;
	description?: string;
	descriptionLocalizations?: Localizations | null;
	integrationTypes?: ApplicationIntegrationType[];
	name?: string;
	nameLocalizations?: Localizations | null;
	nsfw?: boolean;
	options?: ApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface EditApplicationCommandPermissionsOptions {
	permissions: ApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface EditGuildApplicationCommandOptions {
	defaultMemberPermissions?: string | null;
	description?: string;
	descriptionLocalizations?: Localizations | null;
	name?: string;
	nameLocalizations?: Localizations | null;
	nsfw?: boolean;
	options?: ApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params
 */
export interface GetApplicationCommandsOptions {
	withLocalizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params
 */
export interface GetGuildApplicationCommandsOptions {
	withLocalizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateApplicationCommandOptions =
	| CreateChatInputApplicationCommandOptions
	| CreateMessageApplicationCommandOptions
	| CreatePrimaryEntryPointApplicationCommandOptions
	| CreateUserApplicationCommandOptions;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateMessageApplicationCommandOptions =
	CreateApplicationCommandOptionsBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateUserApplicationCommandOptions = CreateApplicationCommandOptionsBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type EditApplicationCommandBulkOptions = CreateApplicationCommandOptions[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type EditGuildApplicationCommandBulkOptions = CreateGuildApplicationCommandOptions[];
