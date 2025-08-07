//  biome-ignore-all lint/style/useNamingConvention: Upper snake case.

/**
 * Shows a message indicating that the configuration file has not been found.
 * @returns The message indicating that the configuration file has not been
 * 		found.
 * @internal
 */
export function CONFIGURATION_FILE_NOT_FOUND(): string {
	return 'Configuration file "linkcord.config" has not been found.';
}

/**
 * Shows a message indicating that the `defineConfig` function has received an
 * invalid input.
 * @returns The message indicating that the `defineConfig` function has
 * 		received an invalid input.
 * @internal
 */
export function INVALID_DEFINE_CONFIG_INPUT(): string {
	return "Invalid configuration input.";
}
