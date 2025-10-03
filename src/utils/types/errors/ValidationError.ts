import { ValidationError } from "#utils/errors/ValidationError.js";

/**
 * Represents the base structure of an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export interface ValidationErrorIssueBase<Kind extends ValidationErrorIssueKind> {
	/** The expected value type from the schema. */
	expected: string;
	/** The kind of the issue. */
	kind: Kind;
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input type is invalid and has a path where the validation failed.
 * @group Utils/Errors
 */
export interface ValidationErrorInvalidInputTypeWithPathIssue
	extends ValidationErrorIssueBase<ValidationErrorIssueKind.InvalidInputTypeWithPath> {
	/** The path where the validation failed. */
	path: string;
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export type ValidationErrorIssue = ValidationErrorInvalidInputTypeIssue | ValidationErrorInvalidInputTypeWithPathIssue;

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input type is invalid.
 * @group Utils/Errors
 */
export type ValidationErrorInvalidInputTypeIssue = ValidationErrorIssueBase<ValidationErrorIssueKind.InvalidInputType>;

/**
 * Represents the kinds of issues that can occur in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export enum ValidationErrorIssueKind {
	InvalidInputType = "INVALID_INPUT_TYPE",
	InvalidInputTypeWithPath = "INVALID_INPUT_TYPE_WITH_PATH",
}
