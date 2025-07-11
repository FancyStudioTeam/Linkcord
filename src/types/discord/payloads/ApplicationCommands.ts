import type { Localizations, Snowflake } from "../shared/discord.js";
import type { ApplicationIntegrationTypes } from "./Applications.js";
import type { ChannelTypes } from "./Channels.js";
import type { InteractionContextTypes } from "./Interactions.js";

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface APIApplicationCommand {
	application_id: Snowflake;
	contexts?: InteractionContextTypes[];
	default_member_permissions: string | null;
	default_permission?: boolean | null;
	description: string;
	description_localizations?: Localizations;
	guild_id?: Snowflake;
	handler?: EntryPointCommandHandlerTypes;
	id: Snowflake;
	integration_types?: ApplicationIntegrationTypes[];
	name: string;
	name_localizations?: Localizations;
	nsfw?: boolean;
	options?: APIApplicationCommandOption;
	type?: ApplicationCommandTypes;
	version: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface APIApplicationCommandOption {
	autocomplete?: boolean;
	channel_types?: ChannelTypes[];
	choices?: APIApplicationCommandOptionChoice[];
	description: string;
	description_localizations?: Localizations;
	max_value?: number;
	min_value?: number;
	name: string;
	name_localizations?: Localizations;
	options?: APIApplicationCommandOption[];
	required?: boolean;
	type: ApplicationCommandOptionTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIApplicationCommandOptionChoice {
	name: string;
	name_localizations?: Localizations;
	value: number | string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface APIApplicationCommandPermissions {
	id: Snowflake;
	permission: boolean;
	type: ApplicationCommandPermissionType;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIAutocompleteChoice {
	name: string;
	name_localizations?: Localizations;
	value: number | string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface APIGuildApplicationCommandPermissions {
	application_id: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
	permissions: APIApplicationCommandPermissions[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum ApplicationCommandOptionTypes {
	Attachment = 11,
	Boolean = 5,
	Channel = 7,
	Integer = 4,
	Mentionable = 9,
	Number = 10,
	Role = 8,
	String = 3,
	User = 6,
	SubCommand = 1,
	SubCommandGroup = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
 */
export enum ApplicationCommandPermissionType {
	Channel = 3,
	Role = 1,
	User = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandTypes {
	ChatInput = 1,
	Message = 3,
	PrimaryEntryPoint = 4,
	User = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-entry-point-command-handler-types
 */
export enum EntryPointCommandHandlerTypes {
	AppHandler = 1,
	DiscordLaunchActivity = 2,
}
