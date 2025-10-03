import { array, enum as enum_, object, string } from "zod";
import { ConfigurationUtils } from "#configuration/helpers/ConfigurationUtils.js";
import { GatewayIntents } from "#types/index.js";

export const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
export const ConfigurationIntentsSchema = array(ConfigurationIntentsEnumSchema)
	.min(1)
	.transform(ConfigurationUtils.transformIntents);

export const ConfigurationLocationsCommandsSchema = string();
export const ConfigurationLocationsEventsSchema = string();
export const ConfigurationLocationsRootSchema = string();

export const ConfigurationLocationsSchema = object({
	commands: ConfigurationLocationsCommandsSchema,
	events: ConfigurationLocationsEventsSchema,
	root: ConfigurationLocationsRootSchema,
});

export const ConfigurationTokenSchema = string().transform(ConfigurationUtils.transformToken);

export const ConfigurationSchema = object({
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});
