/**
 * The types of an application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandTypes {
	ChatInput = 1,
	Message = 3,
	PrimaryEntryPoint = 4,
	User = 2,
}

/**
 * The types of an application command option of the application command.
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
	SubCommand = 1,
	SubCommandGroup = 2,
	User = 6,
}

/**
 * The type of permissions of the application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
 */
export enum ApplicationCommandPermissionTypes {
	Channel = 3,
	Role = 1,
	User = 2,
}

/**
 * The type of the entry point of the application command.
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-entry-point-command-handler-types
 */
export enum EntryPointCommandHandlerTypes {
	AppHandler = 1,
	DiscordLaunchActivity = 2,
}
