import type { Localizations, Snowflake } from '#types/miscellaneous/discord.js';
import type { ApplicationIntegrationType } from '#types/resources/Applications/enums.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { InteractionContextType } from '#types/resources/Interactions/enums.js';
import type {
	ApplicationCommandOptionType,
	ApplicationCommandPermissionType,
	ApplicationCommandType,
	EntryPointCommandHandlerType,
} from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawApplicationCommandBase<Type extends ApplicationCommandType> {
	application_id: Snowflake;
	contexts?: InteractionContextType[] | null;
	default_member_permissions: string | null;
	description: string;
	description_localizations?: Localizations | null;
	handler?: EntryPointCommandHandlerType;
	id: Snowflake;
	integration_types?: ApplicationIntegrationType[];
	name: string;
	name_localizations?: Localizations | null;
	nsfw?: boolean;
	type?: Type;
	version: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	description: string;
	description_localizations?: Localizations | null;
	name: string;
	name_localizations?: Localizations | null;
	required?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface RawApplicationCommandOptionChoiceBase<Value extends number | string> {
	name: string;
	name_localizations?: Localizations | null;
	value: Value;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface RawApplicationCommandPermissions {
	id: Snowflake;
	permission: boolean;
	type: ApplicationCommandPermissionType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawChannelApplicationCommandOption extends RawApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawChatInputApplicationCommand extends RawApplicationCommandBase<ApplicationCommandType.ChatInput> {
	options?: RawApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawChatInputGuildApplicationCommand extends RawGuildApplicationCommandBase<ApplicationCommandType.ChatInput> {
	options?: RawApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawGuildApplicationCommandBase<Type extends ApplicationCommandType> extends RawApplicationCommandBase<Type> {
	guild_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface RawGuildApplicationCommandPermissions {
	application_id: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
	permissions: RawApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawNumbericApplicationCommandOptionBase<
	Type extends ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number,
> extends RawApplicationCommandOptionBase<Type> {
	autocomplete?: boolean;
	choices?: RawNumberApplicationCommandOptionChoice[];
	max_values?: number;
	min_values?: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawPrimaryEntryPointApplicationCommand extends RawApplicationCommandBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface RawPrimaryEntryPointGuildApplicationCommand
	extends RawGuildApplicationCommandBase<ApplicationCommandType.PrimaryEntryPoint> {
	handler: EntryPointCommandHandlerType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawStringApplicationCommandOption extends RawApplicationCommandOptionBase<ApplicationCommandOptionType.String> {
	autocomplete?: boolean;
	choices?: RawStringApplicationCommandOptionChoice[];
	max_length?: number;
	min_length?: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawSubCommandApplicationCommandOption
	extends Omit<RawApplicationCommandOptionBase<ApplicationCommandOptionType.SubCommand>, 'required'> {
	options?: RawApplicationCommandOptionWithValue[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface RawSubCommandGroupApplicationCommandOption
	extends Omit<RawApplicationCommandOptionBase<ApplicationCommandOptionType.SubCommandGroup>, 'required'> {
	options: RawSubCommandApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawApplicationCommand =
	| RawChatInputApplicationCommand
	| RawMessageApplicationCommand
	| RawPrimaryEntryPointApplicationCommand
	| RawUserApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawApplicationCommandOption = RawApplicationCommandOptionWithOptions | RawApplicationCommandOptionWithValue;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawApplicationCommandOptionWithOptions = RawSubCommandApplicationCommandOption | RawSubCommandGroupApplicationCommandOption;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawApplicationCommandOptionWithValue =
	| RawAttachmentApplicationCommandOption
	| RawBooleanApplicationCommandOption
	| RawChannelApplicationCommandOption
	| RawIntegerApplicationCommandOption
	| RawMentionableApplicationCommandOption
	| RawNumberApplicationCommandOption
	| RawRoleApplicationCommandOption
	| RawStringApplicationCommandOption
	| RawUserApplicationCommandOption;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type RawApplicationCommandOptionChoice = RawNumberApplicationCommandOptionChoice | RawStringApplicationCommandOptionChoice;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawAttachmentApplicationCommandOption = RawApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawBooleanApplicationCommandOption = RawApplicationCommandOptionBase<ApplicationCommandOptionType.Boolean>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawGuildApplicationCommand =
	| RawChatInputGuildApplicationCommand
	| RawMessageGuildApplicationCommand
	| RawPrimaryEntryPointGuildApplicationCommand
	| RawUserGuildApplicationCommand;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawIntegerApplicationCommandOption = RawNumbericApplicationCommandOptionBase<ApplicationCommandOptionType.Integer>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawMentionableApplicationCommandOption = RawApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawMessageApplicationCommand = RawApplicationCommandBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawMessageGuildApplicationCommand = RawGuildApplicationCommandBase<ApplicationCommandType.Message>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawNumberApplicationCommandOption = RawNumbericApplicationCommandOptionBase<ApplicationCommandOptionType.Number>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type RawNumberApplicationCommandOptionChoice = RawApplicationCommandOptionChoiceBase<number>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawRoleApplicationCommandOption = RawApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type RawStringApplicationCommandOptionChoice = RawApplicationCommandOptionChoiceBase<string>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawUserApplicationCommand = RawApplicationCommandBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type RawUserGuildApplicationCommand = RawGuildApplicationCommandBase<ApplicationCommandType.User>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RawUserApplicationCommandOption = RawApplicationCommandOptionBase<ApplicationCommandOptionType.User>;
