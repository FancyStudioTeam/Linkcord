import { env } from "node:process";
import { ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { DefineConfigOptions, LinkcordOptions } from "#configuration/types/index.js";
import { IS_PRODUCTION_ENVIRONMENT } from "#utils/Constants.js";
import { exception } from "#utils/functions/exception.js";
import { validate } from "#utils/functions/validate.js";

const { DISCORD_TOKEN } = env ?? {};

/**
 * Defines the configuration of the framework.
 *
 * @param options - The options to use in the framework.
 * @returns The validated {@link LinkcordOptions | `LinkcordOptions`} object.
 *
 * @group Configuration/Functions
 */
export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	options.token ??=
		DISCORD_TOKEN ??
		exception(
			new TypeError(
				"Attempted to use 'DISCORD_TOKEN' environment variable, but it is not defined. Please define it in your environment variables.",
			),
		);

	options.locations ??= {
		commands: "commands",
		events: "events",
		root: IS_PRODUCTION_ENVIRONMENT ? "dist" : "src",
	};

	return validate(ConfigurationSchema, options);
}
