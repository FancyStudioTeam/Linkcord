/**
 * biome-ignore-all lint/style/useNamingConvention: Use screaming snake case
 * for these messages.
 */

import { ListFormatter } from "./utils/index.js";

export function METHOD_NOT_IMPLEMENTED(): string {
	return "This method is not implemented yet";
}

export function MISSING_REQUIRED_FIELD_FROM_DATA(field: string, objectDescription: string): string {
	return `Field "${field}" is missing from the "${objectDescription}" object but should be always present in the data.`;
}

export function MISSING_REQUIRED_FIELDS_FROM_DATA(fields: string[], objectDescription: string) {
	return `Fields "${ListFormatter.conjunction(fields)}" are missing from the "${objectDescription}" object but should be always present in the data.`;
}
