/**
 * biome-ignore-all lint/style/useNamingConvention: These functions
 * intentionally use upper snake case because they represent error messages,
 * not conventional camel case functions.
 */

import type { Snowflake } from '#types/index.js';

export function APPLICATION_USER_NOT_CACHED(applicationId: Snowflake) {
	return `Application user '${applicationId}' is not cached` as const;
}

export function CLIENT_ALREADY_INITIALIZED() {
	return 'The client has already been initialized' as const;
}

export function CLIENT_NOT_INITIALIZED() {
	return 'The client has not been initialized yet.' as const;
}

export function CONFIGURATION_FILE_NOT_FOUND() {
	return `Configuration file 'linkcord.config' has not been found` as const;
}

export function INTERACTION_ALREADY_ACKNOWLEDGED() {
	return 'This interaction has already been acknowledged' as const;
}
