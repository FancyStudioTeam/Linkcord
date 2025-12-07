import { boolean, enum as enum_, object } from "zod";
import { ClientEvents } from "#client/index.js";

export const EventDisabledSchema = boolean();
export const EventNameSchema = enum_(ClientEvents);
export const EventOnceSchema = boolean();

export const EventSchema = object({
	disabled: EventDisabledSchema.optional(),
	name: EventNameSchema,
	once: EventOnceSchema.optional(),
});
