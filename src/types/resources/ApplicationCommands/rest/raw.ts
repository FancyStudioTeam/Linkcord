import type { Localizations } from '#types/miscellaneous/discord.js';
import type { ApplicationIntegrationType } from '#types/resources/Applications/enums.js';
import type { InteractionContextType } from '#types/resources/Interactions/enums.js';
import type { ApplicationCommandType, EntryPointCommandHandlerType } from '../enums.js';
import type { RawApplicationCommandOption, RawApplicationCommandPermissions } from '../structures/raw.js';

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RawCreateApplicationCommandOptionsBase<Type extends ApplicationCommandType> {
	contexts?: InteractionContextType[];
	default_member_permissions?: string | null;
	integration_types?: ApplicationIntegrationType[];
	name: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RawCreateChatInputApplicationCommandOptions
	extends RawCreateApplicationCommandOptionsBase<ApplicationCommandType.ChatInput> {
	description: string;
	description_localizations?: Localizations | null;
	options?: RawApplicationCommandOption;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RawCreateChatInputGuildApplicationCommandOptions
	extends RawCreateGuildApplicationCommandOptionsBase<ApplicationCommandType.ChatInput> {
	description: string;
	description_localizations?: Localizations | null;
	options?: RawApplicationCommandOption;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RawCreateGuildApplicationCommandOptionsBase<Type extends ApplicationCommandType> {
	default_member_permissions?: string | null;
	name: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface RawCreatePrimaryEntryPointApplicationCommandOptions
	extends RawCreateApplicationCommandOptionsBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface RawCreatePrimaryEntryPointGuildApplicationCommandOptions
	extends RawCreateGuildApplicationCommandOptionsBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface RawEditApplicationCommandOptions {
	contexts?: InteractionContextType[];
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	integration_types?: ApplicationIntegrationType[];
	name?: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: RawApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export interface RawEditApplicationCommandPermissionsOptions {
	permissions: RawApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface RawEditGuildApplicationCommandOptions {
	default_member_permissions?: string | null;
	description?: string;
	description_localizations?: Localizations | null;
	name?: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	options?: RawApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type RawCreateApplicationCommandOptions =
	| RawCreateChatInputApplicationCommandOptions
	| RawCreateMessageApplicationCommandOptions
	| RawCreatePrimaryEntryPointApplicationCommandOptions
	| RawCreateUserApplicationCommandOptions;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type RawCreateGuildApplicationCommandOptions =
	| RawCreateChatInputGuildApplicationCommandOptions
	| RawCreateMessageGuildApplicationCommandOptions
	| RawCreatePrimaryEntryPointGuildApplicationCommandOptions
	| RawCreateUserGuildApplicationCommandOptions;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type RawCreateMessageApplicationCommandOptions = RawCreateApplicationCommandOptionsBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type RawCreateMessageGuildApplicationCommandOptions = RawCreateGuildApplicationCommandOptionsBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type RawCreateUserApplicationCommandOptions = RawCreateApplicationCommandOptionsBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type RawCreateUserGuildApplicationCommandOptions = RawCreateGuildApplicationCommandOptionsBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type RawBulkOverwriteApplicationCommandsOptions = RawCreateApplicationCommandOptions[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type RawBulkOverwriteGuildApplicationCommandsOptions = RawCreateGuildApplicationCommandOptions[];
