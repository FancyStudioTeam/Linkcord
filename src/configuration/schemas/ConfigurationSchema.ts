import { array, enum_, minLength, object, optional, pipe, string, transform } from "valibot";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayIntents } from "#types/index.js";

export const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
export const ConfigurationIntentsSchema = pipe(
	array(ConfigurationIntentsEnumSchema),
	minLength(1),
	transform(ConfigurationUtils.transformIntents),
);

export const ConfigurationLocationsCommandsSchema = optional(string(), "commands");
export const ConfigurationLocationsEventsSchema = optional(string(), "events");
export const ConfigurationLocationsRootSchema = optional(string(), "src");

export const ConfigurationLocationsSchema = object({
	commands: ConfigurationLocationsCommandsSchema,
	events: ConfigurationLocationsEventsSchema,
	root: ConfigurationLocationsRootSchema,
});

export const ConfigurationTokenSchema = pipe(
	string(),
	transform(ConfigurationUtils.transformToken),
);

export const ConfigurationSchema = object({
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});
