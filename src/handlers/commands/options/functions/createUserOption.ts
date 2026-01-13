import { ApplicationCommandOptionType } from '#types/index.js';
import type { CreateUserOption, UserOptionData } from './createUserOption.types.js';

export function createUserOption<Required extends boolean>(options: CreateUserOption<Required>): Readonly<UserOptionData<Required>> {
	const { required: isRequired = false } = options;
	const required = isRequired as Required;

	return {
		...options,
		required,
		type: ApplicationCommandOptionType.User,
	};
}
