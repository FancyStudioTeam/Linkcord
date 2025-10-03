import { type core, parse, ZodError } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import { type ValidationErrorIssue, ValidationErrorIssueKind } from "#utils/types/index.js";

/**
 * Validates the given input with a Zod schema.
 *
 * @param schema - The Zod schema to validate the given input.
 * @param input - The input to validate with the Zod schema.
 * @returns The validated input.
 *
 * @typeParam Schema - The inferred type from the `schema` parameter.
 * @group Utils/Functions
 */
export function validate<Schema extends ZodSchema>(schema: Schema, input: unknown): core.output<Schema> {
	try {
		return parse(schema, input);
	} catch (error) {
		if (!(error instanceof ZodError)) {
			throw new TypeError("Exception thrown from 'validate' is not a 'ZodError' instance.");
		}

		const { issues } = error;
		const validationIssues = handleZodIssues(issues);

		throw new ValidationError(validationIssues);
	}
}

/**
 * Handles the given list of {@link ZodIssue | `ZodIssue`} objects.
 *
 * @param issues - The list of {@link ZodIssue | `ZodIssue`} objects to handle.
 * @returns The parsed list of {@link ValidationErrorIssue | `ValidationErrorIssue`} objects.
 */
function handleZodIssues(issues: ZodIssue[]): ValidationErrorIssue[] {
	return issues.map(handleZodIssue);
}

/**
 * Handles the given {@link ZodIssue | `ZodIssue`} object.
 *
 * @param issue - The {@link ZodIssue | `ZodIssue`} object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodIssue(issue: ZodIssue): ValidationErrorIssue {
	const { code } = issue;

	switch (code) {
		case "invalid_type": {
			return handleZodInvalidTypeIssue(issue);
		}
		default: {
			throw new TypeError(`Unhandled Zod issue code: ${code}`);
		}
	}
}

/**
 * Handles the given {@link ZodInvalidTypeIssue | `ZodInvalidTypeIssue`} object when the code is `invalid_type`.
 *
 * @param issue - The {@link ZodInvalidTypeIssue | `ZodInvalidTypeIssue`} object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodInvalidTypeIssue(issue: ZodInvalidTypeIssue): ValidationErrorIssue {
	const { expected, path } = issue;

	if (path.length > 0) {
		return {
			expected,
			kind: ValidationErrorIssueKind.InvalidInputTypeWithPath,
			path,
		};
	}

	return {
		expected,
		kind: ValidationErrorIssueKind.InvalidInputType,
	};
}

/**
 * Represents an `invalid_type` issue from Zod.
 * @group Utils/Functions
 */
type ZodInvalidTypeIssue = core.$ZodIssueInvalidType;

/**
 * Represents an issue from Zod.
 * @group Utils/Functions
 */
type ZodIssue = core.$ZodIssue;

/**
 * Represents a schema from Zod.
 * @group Utils/Functions
 */
type ZodSchema = core.$ZodType;
