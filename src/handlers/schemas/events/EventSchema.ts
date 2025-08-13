import { enum_, function_, object } from "valibot";
import { ClientEvents } from "#client/index.js";

export const EventNameSchema = enum_(ClientEvents);
export const EventRunSchema = function_();

export const EventSchema = object({
	name: EventNameSchema,
	run: EventRunSchema,
});
