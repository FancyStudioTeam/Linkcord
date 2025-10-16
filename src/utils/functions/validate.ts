import { type core, parse, ZodError } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import type { ValidationErrorIssue } from "#utils/types/index.js";

const STRING_CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});
const STRING_VOWEL_REGEX = /^[aeiouAEIOU]/;

const ZOD_ISSUE_HANDLERS_MAP: ZodIssueHandlersMap = {
	custom: handleZodCustomIssue,
	invalid_format: handleZodInvalidFormatIssue,
	invalid_type: handleZodInvalidTypeIssue,
	invalid_union: handleZodInvalidUnionIssue,
	invalid_value: handleZodInvalidValueIssue,
	too_big: handleZodTooBigIssue,
	too_small: handleZodTooSmallIssue,
};
const ZOD_ISSUE_INVALID_STRING_FORMAT_STRINGS_MAP: ZodIssueInvalidStringFormatStringsMap = {
	url: () => "Expected input to be an URL",
};
const ZOD_ISSUE_TOO_BIG_STRINGS_MAP: ZodIssueTooBigStringsMap = {
	array: ({ maximum }) => `Expected input to be an array with a maximum of ${maximum} item(s)`,
	number: ({ maximum }) => `Expected input to be a number greater than or equal to ${maximum}`,
};
const ZOD_ISSUE_TOO_SMALL_STRINGS_MAP: ZodIssueTooSmallStringsMap = {
	array: ({ minimum }) => `Expected input to be an array with a minimum of ${minimum} item(s)`,
	number: ({ minimum }) => `Expected input to be a number less than or equal to ${minimum}`,
};

/**
 * Validates the given input with the given Zod schema.
 *
 * @param schema - The Zod schema used to validate the given input.
 * @param input - The input to validate with the given Zod schema.
 *
 * @typeParam Schema - The inferred type from the `schema` parameter.
 *
 * @group Utils/Functions
 */
export function validate<Schema extends core.$ZodType>(schema: Schema, input: unknown): core.output<Schema> {
	try {
		return parse(schema, input);
	} catch (error) {
		if (!(error instanceof ZodError)) {
			throw new Error("Exception thrown from 'validate' is not a 'ZodError' instance");
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
 */
function handleZodIssues(issues: core.$ZodIssue[]): ValidationErrorIssue[] {
	return issues.map(handleZodIssue);
}

/**
 * Handles the given {@link ZodIssue | `ZodIssue`} object.
 *
 * @param issue - The {@link ZodIssue | `ZodIssue`} object to handle.
 */
function handleZodIssue(issue: core.$ZodIssue): ValidationErrorIssue {
	const { code } = issue;
	const handler = ZOD_ISSUE_HANDLERS_MAP[code];

	if (!handler) {
		throw new Error(`Unhandled issue code from Zod: ${code}`);
	}

	return handler(issue as never);
}

/**
 * Handles an issue with code "custom" from Zod.
 *
 * @param issue - The `ZodIssueCustom` object to handle.
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
 * @param issue - The `ZodIssueInvalidStringFormat` object to handle.
 */
function handleZodInvalidFormatIssue(issue: core.$ZodIssueInvalidStringFormat): ValidationErrorIssue {
	const { format, path } = issue;
	const message = ZOD_ISSUE_INVALID_STRING_FORMAT_STRINGS_MAP[format];

	if (!message) {
		throw new Error(`Unhandled format from Zod: ${origin}`);
	}

	return {
		issues: null,
		message: message(issue),
		path,
	};
}

/**
 * Handles an issue with code "invalid_type" from Zod.
 *
 * @param issue - The `ZodIssueInvalidType` object to handle.
 */
function handleZodInvalidTypeIssue(issue: core.$ZodIssueInvalidType): ValidationErrorIssue {
	const { expected, path } = issue;
	const article = wordArticle(expected);

	return {
		issues: null,
		message: `Expected input to be ${article} ${expected}`,
		path,
	};
}

/**
 * Handles an issue with code "invalid_union" from Zod.
 *
 * @param issue - The `ZodIssueInvalidUnion` object to handle.
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
 */
function handleZodInvalidValueIssue(issue: core.$ZodIssueInvalidValue): ValidationErrorIssue {
	const { path, values } = issue;

	const transformedValues = values.map(String);
	const formattedValues = STRING_CONJUNCTION_FORMATTER.format(transformedValues);

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
 */
function handleZodTooBigIssue(issue: core.$ZodIssueTooBig): ValidationErrorIssue {
	const { origin, path } = issue;
	const message = ZOD_ISSUE_TOO_BIG_STRINGS_MAP[origin];

	if (!message) {
		throw new Error(`Unhandled maximum origin from Zod: ${origin}`);
	}

	return {
		issues: null,
		message: message(issue),
		path,
	};
}

/**
 * Handles an issue with code "too_small" from Zod.
 *
 * @param issue - The `ZodIssueTooSmall` object to handle.
 */
function handleZodTooSmallIssue(issue: core.$ZodIssueTooSmall): ValidationErrorIssue {
	const { origin, path } = issue;
	const message = ZOD_ISSUE_TOO_SMALL_STRINGS_MAP[origin];

	if (!message) {
		throw new Error(`Unhandled maximum origin from Zod: ${origin}`);
	}

	return {
		issues: null,
		message: message(issue),
		path,
	};
}

/**
 * Gets the article for the given word.
 *
 * @param word - The word to get its article.
 */
function wordArticle(word: string): "a" | "an" {
	return STRING_VOWEL_REGEX.test(word) ? "an" : "a";
}

/** Represents a map of issue codes from Zod with their respective handler. */
type ZodIssueHandlersMap = Partial<{
	[Issue in core.$ZodIssue as Issue["code"]]: (issue: Issue) => ValidationErrorIssue;
}>;

/** Represents a map of issue origins from Zod with their respective messages. */
type ZodIssueInvalidStringFormatStringsMap = Partial<{
	[Issue in core.$ZodIssueInvalidStringFormat as Issue["format"]]: (issue: Issue) => string;
}>;

/** Represents a map of issue origins from Zod with their respective messages. */
type ZodIssueTooBigStringsMap = Partial<{
	[Issue in core.$ZodIssueTooBig as Issue["origin"]]: (issue: Issue) => string;
}>;

/** Represents a map of issue origins from Zod with their respective messages. */
type ZodIssueTooSmallStringsMap = Partial<{
	[Issue in core.$ZodIssueTooSmall as Issue["origin"]]: (issue: Issue) => string;
}>;
