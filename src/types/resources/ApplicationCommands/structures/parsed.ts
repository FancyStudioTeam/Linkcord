import type { Localizations, Snowflake } from '#types/miscellaneous/discord.js';
import type { ChannelType } from '#types/resources/Channels/enums.js';
import type { ApplicationCommandOptionType, ApplicationCommandPermissionType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	description: string;
	descriptionLocalizations?: Localizations | null;
	name: string;
	nameLocalizations?: Localizations | null;
	required?: boolean;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface ApplicationCommandOptionChoiceBase<Value extends number | string> {
	name: string;
	nameLocalizations?: Localizations | null;
	value: Value;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface ApplicationCommandPermissions {
	id: Snowflake;
	permission: boolean;
	type: ApplicationCommandPermissionType;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ChannelApplicationCommandOption extends ApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channelTypes?: ChannelType[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface GuildApplicationCommandPermissions {
	applicationId: Snowflake;
	guildId: Snowflake;
	id: Snowflake;
	permissions: ApplicationCommandPermissions[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface NumbericApplicationCommandOptionBase<
	Type extends ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number,
> extends ApplicationCommandOptionBase<Type> {
	autocomplete?: boolean;
	choices?: NumberApplicationCommandOptionChoice[];
	maxValues?: number;
	minValues?: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface StringApplicationCommandOption extends ApplicationCommandOptionBase<ApplicationCommandOptionType.String> {
	autocomplete?: boolean;
	choices?: StringApplicationCommandOptionChoice[];
	maxLength?: number;
	minLength?: number;
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface SubCommandApplicationCommandOptionBase<
	Type extends ApplicationCommandOptionType.SubCommand | ApplicationCommandOptionType.SubCommandGroup,
> extends Omit<ApplicationCommandOptionBase<Type>, 'required'> {
	options?: ApplicationCommandOption[];
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOption =
	| AttachmentApplicationCommandOption
	| BooleanApplicationCommandOption
	| ChannelApplicationCommandOption
	| IntegerApplicationCommandOption
	| MentionableApplicationCommandOption
	| NumberApplicationCommandOption
	| RoleApplicationCommandOption
	| StringApplicationCommandOption
	| SubCommandApplicationCommandOption
	| SubCommandGroupApplicationCommandOption
	| UserApplicationCommandOption;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type ApplicationCommandOptionChoice = NumberApplicationCommandOptionChoice | StringApplicationCommandOptionChoice;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type AttachmentApplicationCommandOption = ApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type BooleanApplicationCommandOption = ApplicationCommandOptionBase<ApplicationCommandOptionType.Boolean>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type IntegerApplicationCommandOption = NumbericApplicationCommandOptionBase<ApplicationCommandOptionType.Integer>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type MentionableApplicationCommandOption = ApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type NumberApplicationCommandOption = NumbericApplicationCommandOptionBase<ApplicationCommandOptionType.Number>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type NumberApplicationCommandOptionChoice = ApplicationCommandOptionChoiceBase<number>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type RoleApplicationCommandOption = ApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type StringApplicationCommandOptionChoice = ApplicationCommandOptionChoiceBase<string>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type SubCommandApplicationCommandOption = SubCommandApplicationCommandOptionBase<ApplicationCommandOptionType.SubCommand>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type SubCommandGroupApplicationCommandOption = SubCommandApplicationCommandOptionBase<ApplicationCommandOptionType.SubCommandGroup>;

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type UserApplicationCommandOption = ApplicationCommandOptionBase<ApplicationCommandOptionType.User>;
