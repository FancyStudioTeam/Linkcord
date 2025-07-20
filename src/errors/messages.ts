import { ListFormatter } from "./utils/index.js";

export const MISSING_REQUIRED_FIELD_FROM_DATA = (field: string, objectDescription: string) =>
	`Field "${field}" is missing from the ${objectDescription} object but should be always present in the data.`;

export const MISSING_REQUIRED_FIELDS_FROM_DATA = (fields: string[], objectDescription: string) =>
	`Fields "${ListFormatter.conjunction(fields)}" are missing from the ${objectDescription} object but should be always present in the data.`;
