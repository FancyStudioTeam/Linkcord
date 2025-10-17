import { ValidationError } from "#utils/errors/ValidationError.js";

/** Represents a validation issue for a {@link ValidationError | `ValidationError`} instance. */
export interface ValidationErrorIssue {
	/**
	 * The sub-issues from the main validation issue.
	 * Only available in union issues.
	 */
	issues: ValidationErrorIssue[] | null;
	/** The message of the validation issue. */
	message: string;
	/** The path where the issue was thrown. */
	path: PropertyKey[];
}
