import type {
	ApplicationCommandTypes,
	IntegrationTypes,
	InteractionContextTypes,
	Localizations,
} from "#types/discord/index.js";

/**
 * @public
 */
export interface CreateUserContextApplicationCommandOptions {
	contexts?: InteractionContextTypes[];
	defaultMemberPermissions?: string | null;
	integrationTypes?: IntegrationTypes[];
	name: string;
	nameLocalizations?: Localizations;
	nsfw?: boolean;
	type: ApplicationCommandTypes.User;
}

/**
 * @public
 */
export type CreateApplicationCommandOptions = CreateUserContextApplicationCommandOptions;
