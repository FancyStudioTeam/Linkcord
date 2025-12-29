import { boolean, enum as enum_, function as function_, object } from 'zod';
import { ClientEvents } from '#client/structures/Client.types.js';
import type { EventConfig, EventHandler } from '../loaders/EventLoader.types.js';

export const EventDisabledSchema = boolean();
export const EventEventSchema = enum_(ClientEvents);
export const EventHandlerSchema = function_().transform((handler) => handler as EventHandler<EventConfig<ClientEvents>>);
export const EventOnceSchema = boolean();

export const EventSchema = object({
	disabled: EventDisabledSchema.optional(),
	event: EventEventSchema,
	once: EventOnceSchema.optional(),
});
