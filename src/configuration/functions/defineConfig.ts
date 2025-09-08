import { parse } from "valibot";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { DefineConfigOptions, LinkcordOptions } from "#configuration/types/index.js";

/**
 * Defines the configuration of the framework.
 * @param options - The options to use in the framework.
 * @returns The validated {@link LinkcordOptions | `LinkcordOptions`} object.
 */
export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	try {
		return parse(ConfigurationSchema, options);
	} catch {
		throw new TypeError("The first parameter (options) contains an invalid configuration object input.");
	}
}
