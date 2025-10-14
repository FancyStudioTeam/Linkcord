import { ValidationError } from "#utils/errors/ValidationError.js";

/**
 * Represents an issue for a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export interface ValidationErrorIssue {
	/** The issues from the main validation issue. */
	issues: ValidationErrorIssue[] | null;
	/** The message of the validation issue. */
	message: string;
	/** The path where the validation failed. */
	path: PropertyKey[];
}
