import { ApplicationCommandOptionType } from '#types/index.js';
import type { CreateStringOption, StringOptionData } from './createStringOption.types.js';

export function createStringOption<Required extends boolean>(options: CreateStringOption<Required>): Readonly<StringOptionData<Required>> {
	const { required: isRequired = false } = options;
	const required = isRequired as Required;

	return {
		...options,
		required,
		type: ApplicationCommandOptionType.String,
	};
}
