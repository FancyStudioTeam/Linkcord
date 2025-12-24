import { array, enum as enum_, object, string } from "zod";
import { transformIntents } from "#configuration/functions/transformIntents.js";
import { transformToken } from "#configuration/functions/transformToken.js";
import { GatewayIntents } from "#types/index.js";

export const ConfigurationIntentsEnumSchema = enum_(GatewayIntents);
export const ConfigurationIntentsSchema = array(ConfigurationIntentsEnumSchema).transform(transformIntents);

export const ConfigurationLocationsCommandsSchema = string();
export const ConfigurationLocationsEventsSchema = string();
export const ConfigurationLocationsRootSchema = string();

export const ConfigurationLocationsSchema = object({
	commands: ConfigurationLocationsCommandsSchema,
	events: ConfigurationLocationsEventsSchema,
	root: ConfigurationLocationsRootSchema,
});

export const ConfigurationTokenSchema = string().transform(transformToken);

export const ConfigurationSchema = object({
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});
