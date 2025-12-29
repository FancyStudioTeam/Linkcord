import type { ClientEvents } from '#client/index.js';

export interface DefineEventConfigOptions<Event extends ClientEvents> {
	disabled?: boolean;
	event: Event;
	once?: boolean;
}
