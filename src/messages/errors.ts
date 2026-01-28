/**
 * biome-ignore-all lint/style/useNamingConvention: These functions
 * intentionally use upper snake case because they represent error messages.
 */

import { basename } from 'node:path';
import type { Snowflake } from '#types/index.js';
import type { NonAbstractConstructor } from '#utils/index.js';

export function APPLICATION_USER_NOT_CACHED(applicationId: Snowflake) {
	return `Application user ${applicationId} is not cached` as const;
}

export function CLIENT_ALREADY_INITIALIZED() {
	return 'Client has already been initialized' as const;
}

export function CLIENT_NOT_INITIALIZED() {
	return 'Client has not been initialized yet' as const;
}

export function COMMANDS_CACHE_FILE_NOT_AN_ARRAY(filePath: string) {
	return `Commands cache file ${basename(filePath)} is not an array` as const;
}

export function CONFIGURATION_FILE_NOT_FOUND() {
	return 'Configuration file linkcord.config has not been found' as const;
}

export function DECORATOR_CAN_ONLY_BE_APPLIED_TO_ACCESSORS(decoratorName: string) {
	return `Decorator @${decoratorName} can only be applied to getter accessors` as const;
}

export function DECORATOR_CAN_ONLY_BE_APPLIED_TO_CLASS<Class>(
	decoratorName: string,
	_class: NonAbstractConstructor<Class>,
) {
	const { constructor: _constructor } = _class;
	const { name: constructorName } = _constructor;

	return `Decorator @${decoratorName} can only be applied to ${constructorName} classes` as const;
}

export function INTERACTION_ALREADY_ACKNOWLEDGED() {
	return 'Interaction has already been acknowledged' as const;
}

export function INVALID_COMMANDS_CACHE_FILE_TYPE() {
	return 'Commands cache file must be a JSON file' as const;
}
