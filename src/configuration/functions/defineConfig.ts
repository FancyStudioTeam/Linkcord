import { parse } from "valibot";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { LinkcordOptions } from "./options.js";

/**
 * @public
 */
export function defineConfig(options: LinkcordOptions): LinkcordOptions {
	try {
		return parse(ConfigurationSchema, options);
	} catch {
		throw new TypeError("Invalid configuration.");
	}
}
