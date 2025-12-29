import { boolean, enum as enum_, function as function_, object } from 'zod';
import { ClientEvents } from '#client/index.js';
import type { EventConfig, EventHandler } from '../loaders/EventLoader.types.js';

export const EventDisabledSchema = boolean();
export const EventHandlerSchema = function_().transform((handler) => handler as EventHandler<EventConfig<ClientEvents>>);
export const EventNameSchema = enum_(ClientEvents);
export const EventOnceSchema = boolean();

export const EventSchema = object({
	disabled: EventDisabledSchema.optional(),
	event: EventNameSchema,
	once: EventOnceSchema.optional(),
});
