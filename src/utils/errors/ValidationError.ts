import { styleText } from "node:util";
import type { ValidationErrorIssue } from "#utils/types/index.js";

/** Represents an error that occurs when a validation fails. */
export class ValidationError extends Error {
	/**
	 * Creates a new instance of the {@link ValidationError | `ValidationError`} class.
	 *
	 * @param issues - The list of {@link ValidationErrorIssue | `ValidationErrorIssue`} objects for the error.
	 */
	constructor(issues: ValidationErrorIssue[]) {
		super();

		const prettifiedIssues = this.#prettifyIssues(issues);

		this.message = `Validation has failed with the following issues:\n${prettifiedIssues}`;
		this.name = "ValidationError";
	}

	/**
	 * Flattens the given list of `PropertyKey` objects into a string.
	 *
	 * @param path - The list of `PropertyKey` objects to flatten.
	 */
	#flattenIssuePath(path: PropertyKey[]): string {
		const formattedPathCallback = (accumulator: string, currentItem: string | number): string =>
			typeof currentItem === "number" ? `${accumulator}[${currentItem}]` : `${accumulator}.${currentItem}`;

		const filteredPath = path.filter((item) => typeof item !== "symbol");
		const formattedPath = filteredPath.slice(1).reduce(formattedPathCallback, String(filteredPath[0]));

		return formattedPath;
	}

	/**
	 * Converts the given {@link ValidationErrorIssue | `ValidationErrorIssue`} object into a prettified issue message.
	 *
	 * @param issue - The {@link ValidationErrorIssue | `ValidationErrorIssue`} object to prettify.
	 * @param isMainIssue - Whether the issue is a top-level issue.
	 * @param indentLevel - The number of tabs to prepend at the beginning of the message line.
	 */
	#prettifyIssue(issue: ValidationErrorIssue, isMainIssue = true, indentLevel = 1): string {
		const { issues, message, path } = issue;
		const { length: pathLength } = path;

		const icon = isMainIssue ? "🞬" : "└──";
		const indent = "\t".repeat(indentLevel);

		let prettifiedMessage = "";

		if (isMainIssue && pathLength > 0) {
			const flattenedPath = this.#flattenIssuePath(path);

			prettifiedMessage = `${indent}${icon} ${flattenedPath}:\n`;
			prettifiedMessage += `${indent}└── ${message}`;
		} else {
			prettifiedMessage = `${indent}${icon} ${message}`;
		}

		if (issues) {
			for (const issue of issues) {
				prettifiedMessage += `\n${this.#prettifyIssue(issue, false, indentLevel + 1)}`;
			}
		}

		return styleText(["bold", "red"], prettifiedMessage);
	}

	/**
	 * Converts the given list of {@link ValidationErrorIssue | `ValidationErrorIssue`} objects into a prettified issues message.
	 *
	 * @param issues - The list of {@link ValidationErrorIssue | `ValidationErrorIssue`} objects to prettify.
	 */
	#prettifyIssues(issues: ValidationErrorIssue[]): string {
		const prettifiedIssues = issues.map((issue) => this.#prettifyIssue(issue));
		const joinedIssueMessages = prettifiedIssues.join("\n\n");

		return joinedIssueMessages;
	}
}
