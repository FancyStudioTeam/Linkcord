import { ApplicationCommandOptionType } from '#types/index.js';
import type { StringOptionData } from './createStringOption.types.js';

export function createStringOption<Required extends boolean, Options extends StringOptionData<Required>>(
	options: Options,
): Readonly<
	Omit<Options, 'required'> & {
		type: ApplicationCommandOptionType.String;
		required: Required;
	}
> {
	const { required = false } = options;

	return {
		...options,
		required,
		type: ApplicationCommandOptionType.String,
	};
}
