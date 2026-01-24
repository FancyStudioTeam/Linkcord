import { boolean, int, literal, object } from 'zod';
import { CustomIdSchema } from '#builders/schemas/shared/CustomIdSchema.js';
import { IdSchema } from '#builders/schemas/shared/IdSchema.js';
import { ComponentType } from '#types/index.js';

export const FileUploadCustomIdSchema = CustomIdSchema;
export const FileUploadIdSchema = IdSchema;
export const FileUploadMaxValuesSchema = int().min(0).max(10);
export const FileUploadMinValuesSchema = int().min(0).max(10);
export const FileUploadRequiredSchema = boolean();
export const FileUploadTypeSchema = literal(ComponentType.FileUpload);

export const FileUploadSchema = object({
	customId: FileUploadCustomIdSchema,
	id: FileUploadIdSchema.optional(),
	maxValues: FileUploadMaxValuesSchema.optional(),
	minValues: FileUploadMinValuesSchema.optional(),
	required: FileUploadRequiredSchema.optional(),
	type: FileUploadTypeSchema,
});
