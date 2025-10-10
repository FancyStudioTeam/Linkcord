import { literal, object } from "zod";
import { ComponentTypes } from "#types/index.js";
import { IDSchema } from "../Shared.js";

export const FileUploadIDSchema = IDSchema;
export const FileUploadTypeSchema = literal(ComponentTypes.FileUpload);

export const FileUploadObjectSchema = object({
	id: FileUploadIDSchema.optional(),
	type: FileUploadTypeSchema,
});
