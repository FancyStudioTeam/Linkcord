import type { Localizations } from '#types/miscellaneous/discord.js';
import type { ApplicationIntegrationType } from '#types/resources/Applications/enums.js';
import type { InteractionContextType } from '#types/resources/Interactions/enums.js';
import type { ApplicationCommandType, EntryPointCommandHandlerType } from '../enums.js';
import type { ApplicationCommandOption, ApplicationCommandPermissions } from '../structures/parsed.js';

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreateApplicationCommandBase<Type extends ApplicationCommandType> {
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
export interface CreateChatInputApplicationCommand extends CreateApplicationCommandBase<ApplicationCommandType.ChatInput> {
	description: string;
	descriptionLocalizations?: Localizations | null;
	options?: ApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface CreateChatInputGuildApplicationCommand extends CreateGuildApplicationCommandBase<ApplicationCommandType.ChatInput> {
	description: string;
	descriptionLocalizations?: Localizations | null;
	options?: ApplicationCommandOption;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface CreateGuildApplicationCommandBase<Type extends ApplicationCommandType> {
	defaultMemberPermissions?: string | null;
	name: string;
	nameLocalizations?: Localizations | null;
	nsfw?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export interface CreatePrimaryEntryPointApplicationCommand extends CreateApplicationCommandBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export interface CreatePrimaryEntryPointGuildApplicationCommand
	extends CreateGuildApplicationCommandBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params
 */
export interface EditApplicationCommand {
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
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params
 */
export interface EditGuildApplicationCommand {
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
export interface GetApplicationCommands {
	withLocalizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params
 */
export interface GetGuildApplicationCommands {
	withLocalizations?: boolean;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateApplicationCommand =
	| CreateChatInputApplicationCommand
	| CreateMessageApplicationCommand
	| CreatePrimaryEntryPointApplicationCommand
	| CreateUserApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type CreateGuildApplicationCommand =
	| CreateChatInputGuildApplicationCommand
	| CreateMessageGuildApplicationCommand
	| CreatePrimaryEntryPointGuildApplicationCommand
	| CreateUserGuildApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateMessageApplicationCommand = CreateApplicationCommandBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type CreateMessageGuildApplicationCommand = CreateGuildApplicationCommandBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params
 */
export type CreateUserApplicationCommand = CreateApplicationCommandBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params
 */
export type CreateUserGuildApplicationCommand = CreateGuildApplicationCommandBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands-json-params
 */
export type BulkOverwriteApplicationCommands = CreateApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params
 */
export type BulkOverwriteGuildApplicationCommands = CreateGuildApplicationCommand[];

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params
 */
export type EditApplicationCommandPermissions = ApplicationCommandPermissions[];
