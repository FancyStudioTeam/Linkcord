import { array, boolean, enum as enum_, object, string } from 'zod';
import { transformCacheFilePath } from '#configuration/functions/transformCacheFilePath.js';
import { transformIntents } from '#configuration/functions/transformIntents.js';
import { transformToken } from '#configuration/functions/transformToken.js';
import { GatewayIntents } from '#types/index.js';

export const ConfigurationCommandsCacheEnabledSchema = boolean();
export const ConfigurationCommandsCacheFilePathSchema = string().transform(transformCacheFilePath);
export const ConfigurationCommandsCacheSchema = object({
	enabled: ConfigurationCommandsCacheEnabledSchema,
	filePath: ConfigurationCommandsCacheFilePathSchema,
});

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
	commandsCache: ConfigurationCommandsCacheSchema,
	intents: ConfigurationIntentsSchema,
	locations: ConfigurationLocationsSchema,
	token: ConfigurationTokenSchema,
});
