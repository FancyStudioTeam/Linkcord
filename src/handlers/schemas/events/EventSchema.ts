import { enum as enum_, function as function_, object } from "zod";
import { ClientEvents } from "#client/index.js";

export const EventNameSchema = enum_(ClientEvents);
export const EventRunSchema = function_();

export const EventSchema = object({
	name: EventNameSchema,
	run: EventRunSchema,
});
