import type { ClientEvents } from '#client/index.js';
import type { EventConfig } from '../loaders/EventLoader.types.js';
import type { DefineEventConfigOptions } from './defineEventConfig.types.js';

export function defineEventConfig<Event extends ClientEvents>(options: DefineEventConfigOptions<Event>): EventConfig<Event> {
	return options;
}
