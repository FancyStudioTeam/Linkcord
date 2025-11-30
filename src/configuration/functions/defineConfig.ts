import type { LinkcordOptions } from "#configuration/helpers/ConfigurationUtils.js";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { DefineConfigOptions } from "#configuration/types/index.js";
import { IS_PRODUCTION_ENVIRONMENT } from "#utils/Constants.js";
import { validate } from "#utils/functions/validate.js";

export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	options.locations ??= {};
	options.locations.commands ??= "commands";
	options.locations.events ??= "events";
	options.locations.root ??= IS_PRODUCTION_ENVIRONMENT ? "dist" : "src";

	return validate(ConfigurationSchema, options);
}
