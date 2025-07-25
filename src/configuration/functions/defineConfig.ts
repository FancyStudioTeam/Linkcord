import { parse } from "valibot";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import { INVALID_CONFIGURATION_INPUT } from "#errors/messages.js";
import type { LinkcordOptions } from "./options.js";

/**
 * Defines the configuration to be used in the framework.
 *
 * @public
 */
export function defineConfig(options: LinkcordOptions): LinkcordOptions {
	try {
		return parse(ConfigurationSchema, options);
	} catch {
		throw new TypeError(INVALID_CONFIGURATION_INPUT());
	}
}
