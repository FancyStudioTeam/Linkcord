import { array, enum_, minLength, object, optional, pipe, string } from "valibot";
import { GatewayIntents } from "#types/index.js";

const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
const ConfigurationIntentsSchema = pipe(array(ConfigurationIntentsEnumSchema), minLength(1));

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
