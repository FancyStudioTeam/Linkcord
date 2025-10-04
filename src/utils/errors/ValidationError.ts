import { styleText } from "node:util";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { type ValidationErrorIssue, ValidationErrorIssueKind } from "#utils/types/index.js";

const CONJUNCTION_FORMATTER = new Intl.ListFormat("en", {
	type: "conjunction",
});

/**
 * Represents an error thrown when validating an invalid input.
 * @group Utils/Errors
 */
export class ValidationError extends Error {
	/** The issues that caused the error. */
	declare readonly issues: Readonly<ValidationErrorIssue[]>;

	/**
	 * Creates a new {@link ValidationError | `ValidationError`} instance.
	 * @param issues - The issues that caused the error.
	 */
	constructor(issues: ValidationErrorIssue[]) {
		super();

		const prettifiedIssues = this.#prettifyIssues(issues);

		defineImmutableProperty(this, "issues", issues);

		this.message = `Validation has failed with the following issues:\n${prettifiedIssues}`;
		this.name = "ValidationError";
	}

	/**
	 * Flattens a list of `PropertyKey` objects into a string.
	 *
	 * @param path - The list of `PropertyKey` objects to flatten.
	 * @returns The flattened string.
	 */
	#flattenIssuePath(path: PropertyKey[]): string {
		const filteredPath = path.filter((item) => typeof item !== "symbol");
		const formattedPathCallback = (accumulator: string, currentItem: string | number) => {
			if (typeof currentItem === "number") {
				return `${accumulator}[${currentItem}]`;
			}

			return `${accumulator}.${currentItem}`;
		};
		const formattedPath = filteredPath.slice(1).reduce(formattedPathCallback, String(filteredPath[0]));

		return formattedPath;
	}

	/**
	 * Handles the callback for the `prettifyIssues` method.
	 *
	 * @param issue - The issue from the callback to handle.
	 * @returns The formatted pretty issue.
	 */
	#issuesCallback(issue: ValidationErrorIssue): string {
		const { kind } = issue;

		switch (kind) {
			case ValidationErrorIssueKind.ArrayTooSmall: {
				const { minimum } = issue;
				const formattedMinimum = styleText("bold", String(minimum));

				return `Expected input to be array with a minimum length of ${formattedMinimum} item(s).`;
			}
			case ValidationErrorIssueKind.ArrayTooSmallWithPath: {
				const { minimum, path } = issue;

				const formattedMinimum = styleText("bold", String(minimum));
				const formattedPath = styleText("bold", this.#flattenIssuePath(path));

				return `${formattedPath}\n\t└── Expected input to be array with a minimum length of ${formattedMinimum} item(s).`;
			}
			case ValidationErrorIssueKind.InvalidInputType: {
				const { expected } = issue;
				const formattedExpected = styleText("bold", expected);

				return `Expected input to be ${formattedExpected}.`;
			}
			case ValidationErrorIssueKind.InvalidInputTypeWithPath: {
				const { expected, path } = issue;

				const formattedExpected = styleText("bold", expected);
				const formattedPath = styleText("bold", this.#flattenIssuePath(path));

				return `${formattedPath}\n\t└── Expected input to be ${formattedExpected}.`;
			}
			case ValidationErrorIssueKind.InvalidInputValue: {
				const { values } = issue;
				const formattedValues = CONJUNCTION_FORMATTER.format(values.map(String));

				return `Expected input to be one of ${formattedValues}.`;
			}
			case ValidationErrorIssueKind.InvalidInputValueWithPath: {
				const { values, path } = issue;

				const formattedValues = CONJUNCTION_FORMATTER.format(values.map(String));
				const formattedPath = styleText("bold", this.#flattenIssuePath(path));

				return `${formattedPath}\n\t└── Expected input to be one of ${formattedValues}.`;
			}
			default: {
				return "Unknown issue.";
			}
		}
	}

	/**
	 * Converts the given list of issues into a prettified string.
	 *
	 * @param issues - The issues to prettify.
	 * @returns The prettified issues string.
	 */
	#prettifyIssues(issues: ValidationErrorIssue[]): string {
		const formattedStringIssues = issues.map(this.#issuesCallback.bind(this));
		const prettifiedIssues = formattedStringIssues
			.map((issue) => `\t${styleText(["bold", "red"], `🞬 ${issue}`)}`)
			.join("\n");

		return prettifiedIssues;
	}
}
