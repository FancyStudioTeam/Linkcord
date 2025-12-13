import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import { IS_PRODUCTION_ENVIRONMENT } from "#utils/Constants.js";
import { validate } from "#utils/functions/validate.js";
import type { DefineConfigOptions, LinkcordOptions } from "./defineConfig.types.js";

export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	options.locations ??= {};
	options.locations.commands ??= "commands";
	options.locations.events ??= "events";
	options.locations.root ??= IS_PRODUCTION_ENVIRONMENT ? "dist" : "src";

	return validate(ConfigurationSchema, options);
}
