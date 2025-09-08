import type { Localizations, Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelTypes } from "#types/resources/Channels/enums.js";
import type { ApplicationCommandOptionTypes, ApplicationCommandPermissionTypes } from "../enums.js";

/**
 * Represents an application command option choice.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface ApplicationCommandOptionChoice {
	/** The name of the application command option choice. */
	name: string;
	/** The localized name of the application command option choice. */
	nameLocalizations?: Localizations;
	/** The value of the application command option choice. */
	value: number | string;
}

/**
 * Represents an application command option for channels.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionChannel
	extends BaseApplicationCommandOption<ApplicationCommandOptionTypes.Channel> {
	channelTypes?: ChannelTypes[];
}

/**
 * Represents an application command option for numbers.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionNumber
	extends BaseApplicationCommandOption<ApplicationCommandOptionTypes.Integer | ApplicationCommandOptionTypes.Number> {
	/** Whether to autocomplete the choices of the application command option. */
	autocomplete?: boolean;
	/** The choices of the application command option. */
	choices?: ApplicationCommandOptionChoice[];
	/** The maximum value of the application command option. */
	maxValue?: number;
	/** The minimum value of the application command option. */
	minValue?: number;
}

/**
 * Represents an application command option for strings.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionString
	extends BaseApplicationCommandOption<ApplicationCommandOptionTypes.String> {
	/** Whether to autocomplete the choices of the application command option. */
	autocomplete?: boolean;
	/** The choices of the application command option. */
	choices?: ApplicationCommandOptionChoice[];
	/** The maximum length of the application command option. */
	maxLength?: number;
	/** The minimum length of the application command option. */
	minLength?: number;
}

/**
 * Represents an application command option for sub commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionSubCommand
	extends BaseApplicationCommandOption<
		ApplicationCommandOptionTypes.SubCommand | ApplicationCommandOptionTypes.SubCommandGroup
	> {
	/** The options of the application command option. */
	options?: ApplicationCommandOption[];
}

/**
 * Represents an application command permission.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface ApplicationCommandPermissions {
	/** The ID of the entity that is restricted. */
	id: Snowflake;
	/** Whether the application command is allowed to be used by the specified entity. */
	permission: boolean;
	/** The type of the permission. */
	type: ApplicationCommandPermissionTypes;
}

/**
 * Represents the base structure of an application command option.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface BaseApplicationCommandOption<Type extends ApplicationCommandOptionTypes> {
	/** The description of the application command option. */
	description: string;
	/** The localized description of the application command option. */
	descriptionLocalizations?: Localizations;
	/** The name of the application command option. */
	name: string;
	/** The localized name of the application command option. */
	nameLocalizations?: Localizations;
	/** Whether the application command option is required. */
	required?: boolean;
	/** The type of the application command option. */
	type: Type;
}

/**
 * Represents an application command permission for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface GuildApplicationCommandPermissions {
	/** The ID of the application where the application command is registered. */
	applicationId: Snowflake;
	/** The ID of the guild to restrict the application command. */
	guildId: Snowflake;
	/** The ID of the entity that is restricted. */
	id: Snowflake;
	/** The permissions of the application command. */
	permissions: ApplicationCommandPermissions[];
}

/**
 * Represents an application command option for attachments.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionAttachment = BaseApplicationCommandOption<ApplicationCommandOptionTypes.Attachment>;

/**
 * Represents an application command option for booleans.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionBoolean = BaseApplicationCommandOption<ApplicationCommandOptionTypes.Boolean>;

/**
 * Represents an application command option for mentionables.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionMentionable =
	BaseApplicationCommandOption<ApplicationCommandOptionTypes.Mentionable>;

/**
 * Represents an application command option for roles.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionRole = BaseApplicationCommandOption<ApplicationCommandOptionTypes.Role>;

/**
 * Represents an application command option for users.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionUser = BaseApplicationCommandOption<ApplicationCommandOptionTypes.User>;

/**
 * Represents an application command option.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOption =
	| ApplicationCommandOptionAttachment
	| ApplicationCommandOptionBoolean
	| ApplicationCommandOptionChannel
	| ApplicationCommandOptionMentionable
	| ApplicationCommandOptionNumber
	| ApplicationCommandOptionRole
	| ApplicationCommandOptionString
	| ApplicationCommandOptionSubCommand
	| ApplicationCommandOptionUser;

/**
 * Represents an autocomplete choice.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type AutocompleteChoice = ApplicationCommandOptionChoice;
