import type { ClientEvents, ClientEventsMap } from '#client/index.js';
import type { DefineEventConfigOptions } from '../functions/defineEventConfig.types.js';

export type EventConfig = DefineEventConfigOptions;
export type EventHandler<Event extends ClientEvents> = (...data: ClientEventsMap[Event]) => unknown;
