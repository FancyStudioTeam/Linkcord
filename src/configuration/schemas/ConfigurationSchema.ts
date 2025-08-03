import { array, enum_, minLength, object, optional, pipe, string, transform } from "valibot";
import { ConfigurationUtils } from "#configuration/utils/ConfigurationUtils.js";
import { GatewayIntents } from "#types/index.js";

const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
const ConfigurationIntentsSchema = pipe(
	array(ConfigurationIntentsEnumSchema),
	minLength(1),
	transform((value) => ConfigurationUtils.transformIntents(value)),
);

const ConfigurationLocationsCommandsSchema = optional(string(), "commands");
const ConfigurationLocationsEventsSchema = optional(string(), "events");
const ConfigurationLocationsRootSchema = optional(string(), "src");

const ConfigurationLocationsSchema = object({
	commands: ConfigurationLocationsCommandsSchema,
	events: ConfigurationLocationsEventsSchema,
	root: ConfigurationLocationsRootSchema,
});

const ConfigurationTokenSchema = string();

export const ConfigurationSchema = object({
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});
