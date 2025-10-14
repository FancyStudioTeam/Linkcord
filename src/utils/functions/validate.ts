import { match } from "ts-pattern";
import { type core, parse, ZodError } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import type { ValidationErrorIssue } from "#utils/types/index.js";

const CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});
const VOWEL_REGEX = /^[aeiouAEIOU]/;

/**
 * Validates the given input with the given Zod schema.
 *
 * @param schema - The Zod schema used to validate the given input.
 * @param input - The input to validate with the given Zod schema.
 * @returns The validated input from the Zod schema.
 *
 * @typeParam Schema - The inferred type from the `schema` parameter.
 * @group Utils/Functions
 */
export function validate<Schema extends ZodSchema>(schema: Schema, input: unknown): ZodSchemaOutput<Schema> {
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
 * @returns The message data from the issue from Zod.
 */
function handleZodIssue(issue: ZodIssue): ValidationErrorIssue {
	return match(issue)
		.returnType<ValidationErrorIssue>()
		.with(
			{
				code: "custom",
			},
			handleZodCustomIssue,
		)
		.with(
			{
				code: "invalid_type",
			},
			handleZodInvalidTypeIssue,
		)
		.with(
			{
				code: "invalid_union",
			},
			handleZodInvalidUnionIssue,
		)
		.with(
			{
				code: "invalid_value",
			},
			handleZodInvalidValueIssue,
		)
		.with(
			{
				code: "too_big",
			},
			handleZodTooBigIssue,
		)
		.with(
			{
				code: "too_small",
			},
			handleZodTooSmallIssue,
		)
		.otherwise(({ code }) => {
			throw new Error(`Unhandled issue from Zod: ${code}`);
		});
}

/**
 * Handles an issue with code "custom" from Zod.
 *
 * @param issue - The `ZodIssueCustom` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodCustomIssue(issue: core.$ZodIssueCustom): ValidationErrorIssue {
	const { message, path } = issue;

	return {
		issues: null,
		message,
		path,
	};
}

/**
 * Handles an issue with code "invalid_type" from Zod.
 *
 * @param issue - The `ZodIssueInvalidType` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodInvalidTypeIssue(issue: core.$ZodIssueInvalidType): ValidationErrorIssue {
	const { expected, input, path } = issue;
	const article = startsWithVower(expected) ? "an" : "a";

	return {
		issues: null,
		message: `Expected input to be ${article} ${expected} but received "${input}"`,
		path,
	};
}

/**
 * Handles an issue with code "invalid_union" from Zod.
 *
 * @param issue - The `ZodIssueInvalidUnion` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodInvalidUnionIssue(issue: core.$ZodIssueInvalidUnion): ValidationErrorIssue {
	const { errors, path } = issue;

	const flattenedErrors = errors.flat();
	const issues = flattenedErrors.map(handleZodIssue);

	return {
		issues,
		message: "Expected input to be a valid union",
		path,
	};
}

/**
 * Handles an issue with code "invalid_value" from Zod.
 *
 * @param issue - The `ZodIssueInvalidValue` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodInvalidValueIssue(issue: core.$ZodIssueInvalidValue): ValidationErrorIssue {
	const { path, values } = issue;

	const transformedValues = values.map(String);
	const formattedValues = CONJUNCTION_FORMATTER.format(transformedValues);

	return {
		issues: null,
		message: `Expected input to be one of the following values: ${formattedValues}`,
		path,
	};
}

/**
 * Handles an issue with code "too_big" from Zod.
 *
 * @param issue - The `ZodIssueTooBig` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodTooBigIssue(issue: core.$ZodIssueTooBig): ValidationErrorIssue {
	const { inclusive, maximum, origin, path } = issue;

	const phrase = inclusive ? "greater than (or equal to)" : "greater than";
	const message = match(origin)
		.returnType<string>()
		.with("array", () => `Expected input to be an array with a maximum of ${maximum} item(s)`)
		.with("number", () => `Expected input to be a number ${phrase} ${maximum} `)
		.otherwise(() => {
			throw new Error("Unhandled maximum origin from Zod");
		});

	return {
		issues: null,
		message,
		path,
	};
}

/**
 * Handles an issue with code "too_small" from Zod.
 *
 * @param issue - The `ZodIssueTooSmall` object to handle.
 * @returns The parsed {@link ValidationErrorIssue | `ValidationErrorIssue`} object.
 */
function handleZodTooSmallIssue(issue: core.$ZodIssueTooSmall): ValidationErrorIssue {
	const { inclusive, minimum, origin, path } = issue;

	const phrase = inclusive ? "less than (or equal to)" : "less than";
	const message = match(origin)
		.returnType<string>()
		.with("array", () => `Expected input to be an array with a minimum of ${minimum} item(s).`)
		.with("number", () => `Expected input to be a number ${phrase} ${minimum} `)
		.otherwise(() => {
			throw new Error("Unhandled minimum origin from Zod");
		});

	return {
		issues: null,
		message,
		path,
	};
}

/**
 * Checks whether the word starts with a vowel.
 *
 * @param content - The word to check.
 * @returns Whether the word starts with a vowel.
 */
function startsWithVower(word: string): boolean {
	const trimmedWord = word.trim();

	return VOWEL_REGEX.test(trimmedWord);
}

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
 * Represents the output from the given Zod schema.
 *
 * @typeParam Schema - The inferred type from the `Schema` type.
 * @group Utils/Functions
 */
type ZodSchemaOutput<Schema extends ZodSchema> = core.output<Schema>;
