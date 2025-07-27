import {
	array,
	enum_,
	type InferOutput,
	minLength,
	object,
	optional,
	pipe,
	string,
	transform,
} from "valibot";
import { reduceGatewayIntents } from "#configuration/functions/reduceGatewayIntents.js";
import { GatewayIntents } from "#types/index.js";

const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
const ConfigurationIntentsSchema = pipe(
	array(ConfigurationIntentsEnumSchema),
	minLength(1),
	transform((value) => reduceGatewayIntents(value)),
);

const ConfigurationLocationsCommandsSchema = optional(string(), "commands");
const ConfigurationLocationsEventsSchema = optional(string(), "events");
const ConfigurationLocationsRootSchema = optional(string(), "src");

const ConfigurationLocationsSchema = optional(
	object({
		commands: ConfigurationLocationsCommandsSchema,
		events: ConfigurationLocationsEventsSchema,
		root: ConfigurationLocationsRootSchema,
	}),
);

const ConfigurationTokenSchema = string();

export const ConfigurationSchema = object({
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});

/**
 * The options to use internally in the framework.
 *
 * @internal
 */
export type LinkcordOptions = InferOutput<typeof ConfigurationSchema>;
