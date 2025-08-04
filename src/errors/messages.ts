//  biome-ignore-all lint/style/useNamingConvention: Upper snake case.

import { basename } from "node:path";
import { ListFormatter } from "./utils/ListFormatter.js";

/**
 * Shows a message indicating that an event is disabled.
 * @param eventFilePath - The path of the event file that is disabled.
 * @returns The message indicating that an event is disabled.
 * @internal
 */
export function DISABLED_EVENT(eventFilePath: string): string {
	const eventFileName = basename(eventFilePath);

	return `Event file name "${eventFileName}" is not enabled.\nIf this is intentional, do not worry about this warning.`;
}

/**
 * Shows a message indicating that an interaction has already been replied or
 * deferred.
 * @returns The message indicating that an interaction has already been
 * replied or deferred.
 * @internal
 */
export function INTERACTION_ALREADY_REPLIED_OR_DEFERRED(): string {
	return "The interaction has already been replied or deferred.";
}

/**
 * Shows a message indicating that a file is missing a default export.
 * @param filePath - The path of the file that is missing a default export.
 * @returns The message indicating that a file is missing a default export.
 * @internal
 */
export function MISSING_DEFAULT_EXPORT_FROM_FILE(filePath: string): string {
	const fileName = basename(filePath);

	return `File name "${fileName}" must include a "default" export.`;
}

/**
 * Shows a message indicating that a field is missing from data.
 * @param field - The name of the field that is missing.
 * @param objectDescription - The description of the object.
 * @returns The message indicating that a field is missing from data.
 * @internal
 */
export function MISSING_REQUIRED_FIELD_FROM_DATA(field: string, objectDescription: string): string {
	return `Field "${field}" is missing from the "${objectDescription}" object but should be always present in the data.`;
}

/**
 * Shows a message indicating that fields are missing from data.
 * @param fields - The names of the fields that are missing.
 * @param objectDescription - The description of the object.
 * @returns The message indicating that fields are missing from data.
 * @internal
 */
export function MISSING_REQUIRED_FIELDS_FROM_DATA(fields: string[], objectDescription: string) {
	return `Fields "${ListFormatter.conjunction(...fields)}" are missing from the "${objectDescription}" object but should be always present in the data.`;
}

/**
 * @internal
 */
export function UNCACHED_EVERYONE_ROLE(guildId: string): string {
	return `The "@everyone" role is not cached in the guild "${guildId}".`;
}
