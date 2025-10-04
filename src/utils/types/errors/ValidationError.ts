import type { util } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input type is an array that is too big.
 * @group Utils/Errors
 */
export interface ValidationErrorArrayTooBigIssue
	extends ValidationErrorIssueBase<ValidationErrorIssueKind.ArrayTooBig> {
	/** The maximum number of items in the array. */
	maximum: number;
	/** The path where the validation failed. */
	path: PropertyKey[];
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input type is an array that is too small.
 * @group Utils/Errors
 */
export interface ValidationErrorArrayTooSmallIssue
	extends ValidationErrorIssueBase<ValidationErrorIssueKind.ArrayTooSmall> {
	/** The minimum number of items in the array. */
	minimum: number;
	/** The path where the validation failed. */
	path: PropertyKey[];
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input type is invalid.
 * @group Utils/Errors
 */
export interface ValidationErrorInvalidInputTypeIssue
	extends ValidationErrorIssueBase<ValidationErrorIssueKind.InvalidInputType> {
	/** The expected value type from the schema. */
	expected: string;
	/** The path where the validation failed. */
	path: PropertyKey[];
}

/**
 * Represents the base structure of an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export interface ValidationErrorIssueBase<Kind extends ValidationErrorIssueKind> {
	/** The kind of the issue. */
	kind: Kind;
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance where the input value is invalid.
 * @group Utils/Errors
 */
export interface ValidationErrorInvalidInputValueIssue
	extends ValidationErrorIssueBase<ValidationErrorIssueKind.InvalidInputValue> {
	/** The path where the validation failed. */
	path: PropertyKey[];
	/** The expected value type from the schema. */
	values: util.Primitive[];
}

/**
 * Represents an issue in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export type ValidationErrorIssue =
	| ValidationErrorArrayTooBigIssue
	| ValidationErrorArrayTooSmallIssue
	| ValidationErrorInvalidInputTypeIssue
	| ValidationErrorInvalidInputValueIssue;

/**
 * Represents the kinds of issues that can occur in a {@link ValidationError | `ValidationError`} instance.
 * @group Utils/Errors
 */
export enum ValidationErrorIssueKind {
	ArrayTooBig = "ARRAY_TO_BIG",
	ArrayTooSmall = "ARRAY_TOO_SMALL",
	InvalidInputType = "INVALID_INPUT_TYPE",
	InvalidInputValue = "INVALID_INPUT_VALUE",
}
