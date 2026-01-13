import { ApplicationCommandOptionType } from '#types/index.js';
import type { If } from '#utils/index.js';
import type { createStringOption } from '../functions/createStringOption.js';

export type OptionsReducer<Input extends Record<string, OptionData>> = {
	readonly [Key in keyof Input]: OptionsDataMap<Input[Key]['required']>[ApplicationCommandOptionType.String];
};

export type OptionData = ReturnType<typeof createStringOption>;

export type OptionsDataMap<Required extends boolean> = {
	[ApplicationCommandOptionType.String]: If<Required, string, string | undefined>;
};
