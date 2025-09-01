import type { Localizations, Snowflake } from "#types/miscellaneous/discord.js";
import type {
	ApplicationIntegrationTypes,
	InteractionContextTypes,
} from "#types/resources/Applications/enums.js";
import type { ChannelTypes } from "#types/resources/Channels/enums.js";
import type {
	ApplicationCommandOptionTypes,
	ApplicationCommandPermissionTypes,
	ApplicationCommandTypes,
	EntryPointCommandHandlerTypes,
} from "../enums.js";

/**
 * Represents an application command for chat inputs.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIApplicationCommandChatInput
	extends APIBaseApplicationCommand<ApplicationCommandTypes.ChatInput> {
	/** The options of the application command. */
	options?: APIApplicationCommandOption[];
}

/**
 * Represents an application command option choice.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIApplicationCommandOptionChoice {
	/** The name of the application command option choice. */
	name: string;
	/** The localized name of the application command option choice. */
	name_localizations?: Localizations;
	/** The value of the application command option choice. */
	value: number | string;
}

/**
 * Represents an application command option for channels.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIApplicationCommandOptionChannel
	extends APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.Channel> {
	channel_types?: ChannelTypes[];
}

/**
 * Represents an application command option for numbers.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIApplicationCommandOptionNumber
	extends APIBaseApplicationCommandOption<
		ApplicationCommandOptionTypes.Integer | ApplicationCommandOptionTypes.Number
	> {
	/** Whether to autocomplete the choices of the application command option. */
	autocomplete?: boolean;
	/** The choices of the application command option. */
	choices?: APIApplicationCommandOptionChoice[];
	/** The maximum value of the application command option. */
	max_value?: number;
	/** The minimum value of the application command option. */
	min_value?: number;
}

/**
 * Represents an application command option for strings.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIApplicationCommandOptionString
	extends APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.String> {
	/** Whether to autocomplete the choices of the application command option. */
	autocomplete?: boolean;
	/** The choices of the application command option. */
	choices?: APIApplicationCommandOptionChoice[];
	/** The maximum length of the application command option. */
	max_length?: number;
	/** The minimum length of the application command option. */
	min_length?: number;
}

/**
 * Represents an application command option for sub commands.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIApplicationCommandOptionSubCommand
	extends APIBaseApplicationCommandOption<
		ApplicationCommandOptionTypes.SubCommand | ApplicationCommandOptionTypes.SubCommandGroup
	> {
	/** The options of the application command option. */
	options?: APIApplicationCommandOption[];
}

/**
 * Represents an application command permission.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface APIApplicationCommandPermissions {
	/** The ID of the entity that is restricted. */
	id: Snowflake;
	/** Whether the application command is allowed to be used by the specified entity. */
	permission: boolean;
	/** The type of the permission. */
	type: ApplicationCommandPermissionTypes;
}

/**
 * Represents an application command for primary entry points.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIApplicationCommandPrimaryEntryPoint
	extends APIBaseApplicationCommand<ApplicationCommandTypes.PrimaryEntryPoint> {
	/** The handler of the application command. */
	handler: EntryPointCommandHandlerTypes;
}

/**
 * Represents the base structure of an application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIBaseApplicationCommand<Type extends ApplicationCommandTypes> {
	/** The ID of the application where the application command is registered. */
	application_id: Snowflake;
	/** The contexts of the application command. */
	contexts?: InteractionContextTypes[];
	/** The default member permissions of the application command. */
	default_member_permissions: string | null;
	/** The description of the application command. */
	description: string;
	/** The localized description of the application command. */
	description_localizations?: Localizations;
	/** The handler of the application command. */
	handler?: EntryPointCommandHandlerTypes;
	/** The ID of the application command. */
	id: Snowflake;
	/** The integration types of the application command. */
	integration_types?: ApplicationIntegrationTypes[];
	/** The name of the application command. */
	name: string;
	/** The localized name of the application command. */
	name_localizations?: Localizations;
	/** Whether the application command is age-restricted. */
	nsfw?: boolean;
	/** The type of the application command. */
	type?: Type;
	/** The version of the application command. */
	version: Snowflake;
}

/**
 * Represents the base structure of an application command option.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIBaseApplicationCommandOption<Type extends ApplicationCommandOptionTypes> {
	/** The description of the application command option. */
	description: string;
	/** The localized description of the application command option. */
	description_localizations?: Localizations;
	/** The name of the application command option. */
	name: string;
	/** The localized name of the application command option. */
	name_localizations?: Localizations;
	/** Whether the application command option is required. */
	required?: boolean;
	/** The type of the application command option. */
	type: Type;
}

/**
 * Represents an application command for chat inputs for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIGuildApplicationCommandChatInput extends APIApplicationCommandChatInput {
	/** The ID of the guild where the application command is registered. */
	guild_id?: Snowflake;
}

/**
 * Represents an application command for message contexts for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIGuildApplicationCommandMessage extends APIApplicationCommandMessage {
	/** The ID of the guild where the application command is registered. */
	guild_id?: Snowflake;
}

/**
 * Represents an application command for primary entry points for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIGuildApplicationCommandPrimaryEntryPoint
	extends APIApplicationCommandPrimaryEntryPoint {
	/** The ID of the guild where the application command is registered. */
	guild_id?: Snowflake;
}

/**
 * Represents an application command for user contexts for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIGuildApplicationCommandUser extends APIApplicationCommandUser {
	/** The ID of the guild where the application command is registered. */
	guild_id?: Snowflake;
}

/**
 * Represents an application command permission for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface APIGuildApplicationCommandPermissions {
	/** The ID of the application where the application command is registered. */
	application_id: Snowflake;
	/** The ID of the guild to restrict the application command. */
	guild_id: Snowflake;
	/** The ID of the entity that is restricted. */
	id: Snowflake;
	/** The permissions of the application command. */
	permissions: APIApplicationCommandPermissions[];
}

/**
 * Represents an application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type APIApplicationCommand =
	| APIApplicationCommandChatInput
	| APIApplicationCommandMessage
	| APIApplicationCommandPrimaryEntryPoint
	| APIApplicationCommandUser;

/**
 * Represents an application command option for attachments.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOptionAttachment =
	APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.Attachment>;

/**
 * Represents an application command option for booleans.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOptionBoolean =
	APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.Boolean>;

/**
 * Represents an application command option for mentionables.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOptionMentionable =
	APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.Mentionable>;

/**
 * Represents an application command option for roles.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOptionRole =
	APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.Role>;

/**
 * Represents an application command option for users.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOptionUser =
	APIBaseApplicationCommandOption<ApplicationCommandOptionTypes.User>;

/**
 * Represents an application command option.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandOptionAttachment
	| APIApplicationCommandOptionBoolean
	| APIApplicationCommandOptionChannel
	| APIApplicationCommandOptionMentionable
	| APIApplicationCommandOptionNumber
	| APIApplicationCommandOptionRole
	| APIApplicationCommandOptionString
	| APIApplicationCommandOptionSubCommand
	| APIApplicationCommandOptionUser;

/**
 * Represents an application command for message contexts.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type APIApplicationCommandMessage =
	APIBaseApplicationCommand<ApplicationCommandTypes.Message>;

/**
 * Represents an application command for user contexts.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type APIApplicationCommandUser = APIBaseApplicationCommand<ApplicationCommandTypes.User>;

/**
 * Represents an autocomplete choice.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type APIAutocompleteChoice = APIApplicationCommandOptionChoice;

/**
 * Represents an application command for guilds.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export type APIGuildApplicationCommand =
	| APIGuildApplicationCommandChatInput
	| APIGuildApplicationCommandMessage
	| APIGuildApplicationCommandPrimaryEntryPoint
	| APIGuildApplicationCommandUser;
