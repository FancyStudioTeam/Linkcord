import type { GatewayIntents } from '#types/index.js';

export interface DefineConfigLocationsOptions {
	commands?: string;
	events?: string;
	root?: string;
}

export interface DefineConfigOptions {
	intents: GatewayIntents[];
	locations?: DefineConfigLocationsOptions;
	token: `Bot ${string}`;
}

export interface LinkcordOptions {
	intents: number;
	locations: LinkcordLocationOptions;
	token: string;
}

export type LinkcordLocationOptions = Required<DefineConfigLocationsOptions>;
