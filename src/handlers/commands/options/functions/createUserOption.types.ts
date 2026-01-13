import type { ApplicationCommandOptionType, Localizations } from '#types/index.js';

export interface CreateUserOption<Required extends boolean> {
	description: string;
	descriptionLocalizations?: Localizations;
	required?: Required;
}

export interface UserOptionData<Required extends boolean> {
	description: string;
	descriptionLocalizations?: Localizations;
	required: Required;
	type: ApplicationCommandOptionType.User;
}
