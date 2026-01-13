import type { User } from '#structures/User.js';
import { ApplicationCommandOptionType } from '#types/index.js';
import type { If } from '#utils/index.js';
import type { StringOptionData } from '../functions/createStringOption.types.js';
import type { UserOptionData } from '../functions/createUserOption.types.js';

export type ParsedOptions<Input extends Record<string, OptionData>> = {
	readonly [Key in keyof Input]: OptionDataMap<Input[Key]['required']>[Input[Key]['type']];
};

export type OptionData = StringOptionData<boolean> | UserOptionData<boolean>;

export type OptionDataMap<Required extends boolean> = {
	[ApplicationCommandOptionType.Boolean]: If<Required, boolean, boolean | undefined>;
	[ApplicationCommandOptionType.String]: If<Required, string, string | undefined>;
	[ApplicationCommandOptionType.User]: If<Required, User, User | undefined>;
};
