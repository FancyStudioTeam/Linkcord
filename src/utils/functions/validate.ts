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
		case "invalid_value": {
			return handleZodInvalidValueIssue(issue);
		}
		case "too_big": {
			return handleZodTooBigIssue(issue);
		}
		case "too_small": {
			return handleZodTooSmallIssue(issue);
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

	return {
		expected,
		kind: ValidationErrorIssueKind.InvalidInputType,
		path,
	};
}

/**
 * Handles the given {@link ZodInvalidValueIssue | `ZodInvalidValueIssue`} object when the code is `invalid_value`.
 *
 * @param issue - The {@link ZodInvalidValueIssue | `ZodInvalidValueIssue`} object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodInvalidValueIssue(issue: ZodInvalidValueIssue): ValidationErrorIssue {
	const { path, values } = issue;

	return {
		kind: ValidationErrorIssueKind.InvalidInputValue,
		path,
		values,
	};
}

/**
 * Handles the given {@link ZodTooBigIssue | `ZodTooBigIssue`} object when the code is `too_big`.
 *
 * @param issue - The {@link ZodTooBigIssue | `ZodTooBigIssue`} object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodTooBigIssue(issue: ZodTooBigIssue): ValidationErrorIssue {
	const { maximum, path } = issue;

	return {
		kind: ValidationErrorIssueKind.ArrayTooBig,
		maximum: Number(maximum),
		path,
	};
}

/**
 * Handles the given {@link ZodTooSmallIssue | `ZodTooSmallIssue`} object when the code is `too_small`.
 *
 * @param issue - The {@link ZodTooSmallIssue | `ZodTooSmallIssue`} object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodTooSmallIssue(issue: ZodTooSmallIssue): ValidationErrorIssue {
	const { minimum, path } = issue;

	return {
		kind: ValidationErrorIssueKind.ArrayTooSmall,
		minimum: Number(minimum),
		path,
	};
}

/**
 * Represents an `invalid_type` issue from Zod.
 * @group Utils/Functions
 */
type ZodInvalidTypeIssue = core.$ZodIssueInvalidType;

/**
 * Represents an `invalid_value` issue from Zod.
 * @group Utils/Functions
 */
type ZodInvalidValueIssue = core.$ZodIssueInvalidValue;

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

/**
 * Represents a `too_big` issue from Zod.
 * @group Utils/Functions
 */
type ZodTooBigIssue = core.$ZodIssueTooBig;

/**
 * Represents a `too_small` issue from Zod.
 * @group Utils/Functions
 */
type ZodTooSmallIssue = core.$ZodIssueTooSmall;
