/**
 * biome-ignore-all lint/style/useNamingConvention: Use upper snake case
 * convention for all error message functions.
 */

import { ListFormatter } from "./utils/index.js";

/**
 * @internal
 */
export function INTERACTION_ALREADY_REPLIED_OR_DEFERRED(): string {
	return "The interaction has already been replied or deferred.";
}

/**
 * @internal
 */
export function INVALID_CONFIGURATION_INPUT(): string {
	return "Invalid configuration input.";
}

/**
 * @internal
 */
export function MISSING_REQUIRED_FIELD_FROM_DATA(field: string, objectDescription: string): string {
	return `Field "${field}" is missing from the "${objectDescription}" object but should be always present in the data.`;
}

/**
 * @internal
 */
export function MISSING_REQUIRED_FIELDS_FROM_DATA(fields: string[], objectDescription: string) {
	return `Fields "${ListFormatter.conjunction(fields)}" are missing from the "${objectDescription}" object but should be always present in the data.`;
}

/**
 * @internal
 */
export function UNCACHED_EVERYONE_ROLE(guildId: string): string {
	return `The "@everyone" role is not cached in the guild "${guildId}".`;
}
