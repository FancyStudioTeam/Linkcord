import { ValidationError } from "#utils/errors/ValidationError.js";

/**
 * Represents the base structure of an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export interface ValidationErrorIssueBase<Kind extends ValidationErrorIssueKind> {
	/** The kind of the issue. */
	kind: Kind;
}

/**
 * Represents a schema issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export interface ValidationErrorSchemaIssue extends ValidationErrorIssueBase<ValidationErrorIssueKind.Schema> {
	/** The expected value from the schema. */
	expected: unknown;
	/** The received value from the input. */
	received: unknown;
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export type ValidationErrorIssue = ValidationErrorSchemaIssue;

/**
 * Represents the kinds of issues that can occur in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export enum ValidationErrorIssueKind {
	Schema = "SCHEMA",
}
