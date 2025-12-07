import type { ClientEvents } from "#client/index.js";

export interface DefineEventConfigOptions {
	disabled?: boolean;
	name: ClientEvents;
	once?: boolean;
}
