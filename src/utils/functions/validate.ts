import { type core, parse, ZodError } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import type { ValidationErrorIssue } from "#utils/types/index.js";

///////////////////////////////////////////////////////////////////////////

const { isInstanceOf } = AssertionUtils;

///////////////////////////////////////////////////////////////////////////

const STRING_CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});
const STRING_VOWEL_REGEX = /^[aeiouAEIOU]/;

///////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////

export function validate<Schema extends core.$ZodType>(schema: Schema, input: unknown): core.output<Schema> {
	try {
		return parse(schema, input);
	} catch (error) {
		if (!isInstanceOf(error, ZodError)) {
			throw new Error("Exception thrown from 'validate' is not a valid 'ZodError' instance");
		}

		const { issues } = error;
		const validationIssues = handleZodIssues(issues);

		throw new ValidationError(validationIssues);
	}
}

///////////////////////////////////////////////////////////////////////////

function handleZodIssues(issues: core.$ZodIssue[]): ValidationErrorIssue[] {
	return issues.map(handleZodIssue);
}

function handleZodIssue(issue: core.$ZodIssue): ValidationErrorIssue {
	const { code } = issue;
	const handler = ZOD_ISSUE_HANDLERS_MAP[code];

	if (!handler) {
		throw new Error(`Unhandled issue code from Zod: ${code}`);
	}

	return handler(issue as never);
}

///////////////////////////////////////////////////////////////////////////

function handleZodCustomIssue(issue: core.$ZodIssueCustom): ValidationErrorIssue {
	const { message, path } = issue;

	return {
		issues: null,
		message,
		path,
	};
}

///////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////

function handleZodInvalidTypeIssue(issue: core.$ZodIssueInvalidType): ValidationErrorIssue {
	const { expected, path } = issue;
	const article = wordArticle(expected);

	return {
		issues: null,
		message: `Expected input to be ${article} ${expected}`,
		path,
	};
}

///////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////

function handleZodTooSmallIssue(issue: core.$ZodIssueTooSmall): ValidationErrorIssue {
	const { origin, path } = issue;
	const message = ZOD_ISSUE_TOO_SMALL_STRINGS_MAP[origin];

	if (!message) {
		throw new Error(`Unhandled minimum origin from Zod: ${origin}`);
	}

	return {
		issues: null,
		message: message(issue),
		path,
	};
}

///////////////////////////////////////////////////////////////////////////

function wordArticle(word: string) {
	return STRING_VOWEL_REGEX.test(word) ? "an" : "a";
}

///////////////////////////////////////////////////////////////////////////

type ZodIssueHandlersMap = Partial<{
	[Issue in core.$ZodIssue as Issue["code"]]: (issue: Issue) => ValidationErrorIssue;
}>;

///////////////////////////////////////////////////////////////////////////

type ZodIssueInvalidStringFormatStringsMap = Partial<{
	[Issue in core.$ZodIssueInvalidStringFormat as Issue["format"]]: (issue: Issue) => string;
}>;

type ZodIssueTooBigStringsMap = Partial<{
	[Issue in core.$ZodIssueTooBig as Issue["origin"]]: (issue: Issue) => string;
}>;

type ZodIssueTooSmallStringsMap = Partial<{
	[Issue in core.$ZodIssueTooSmall as Issue["origin"]]: (issue: Issue) => string;
}>;
