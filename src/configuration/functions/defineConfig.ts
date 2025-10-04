import type { LinkcordOptions } from "#configuration/helpers/ConfigurationUtils.js";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { DefineConfigOptions } from "#configuration/types/index.js";
import { IS_PRODUCTION_ENVIRONMENT } from "#utils/Constants.js";
import { validate } from "#utils/functions/validate.js";

/**
 * Defines the configuration of Linkcord.
 *
 * @param options - The options to use in Linkcord.
 * @returns The validated {@link LinkcordOptions | `LinkcordOptions`} object.
 *
 * @group Configuration/Functions
 */
export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	options.locations ??= {};
	options.locations.commands ??= "commands";
	options.locations.events ??= "events";
	options.locations.root ??= IS_PRODUCTION_ENVIRONMENT ? "dist" : "src";

	return validate(ConfigurationSchema, options);
}
