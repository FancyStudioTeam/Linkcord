import type { ClientEvents, ClientEventsMap } from '#client/index.js';
import type { DefineEventConfigOptions } from '../functions/defineEventConfig.types.js';

export type EventConfig<Event extends ClientEvents> = DefineEventConfigOptions<Event>;
export type EventHandler<Config extends EventConfig<ClientEvents>> = (...data: ClientEventsMap[Config['event']]) => unknown;
