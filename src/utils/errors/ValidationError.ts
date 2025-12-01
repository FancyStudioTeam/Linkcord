import { styleText } from "node:util";
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import type { ValidationErrorIssue } from "./types.js";

const { isNumber, isSymbol } = AssertionUtils;

export class ValidationError extends Error {
	constructor(issues: ValidationErrorIssue[]) {
		super();

		const prettifiedIssues = this.#prettifyIssues(issues);

		this.message = `Validation has failed with the following issues:\n${prettifiedIssues}`;
		this.name = "ValidationError";
	}

	#formatIssuePath(path: PropertyKey[]): string {
		const formattedPathCallback = (accumulator: string, currentItem: string | number): string =>
			isNumber(currentItem) ? `${accumulator}[${currentItem}]` : `${accumulator}.${currentItem}`;

		const filteredPath = path.filter((item) => !isSymbol(item));
		const slicedPath = filteredPath.slice(1);
		const formattedPath = slicedPath.reduce(formattedPathCallback, String(filteredPath[0]));

		return formattedPath;
	}

	#prettifyIssue(issue: ValidationErrorIssue, isMainIssue = true, indentLevel = 1): string {
		const { issues, message, path } = issue;
		const { length: pathLength } = path;

		const icon = isMainIssue ? "🞬" : "└──";
		const indent = "\t".repeat(indentLevel);

		let prettifiedMessage = "";

		if (isMainIssue && pathLength > 0) {
			const flattenedPath = this.#formatIssuePath(path);

			prettifiedMessage = `${indent}${icon} ${flattenedPath}:\n`;
			prettifiedMessage += `${indent}└── ${message}`;
		} else {
			prettifiedMessage = `${indent}${icon} ${message}`;
		}

		for (const issue of issues ?? []) {
			prettifiedMessage += `\n${this.#prettifyIssue(issue, false, indentLevel + 1)}`;
		}

		return styleText(
			[
				"bold",
				"red",
			],
			prettifiedMessage,
		);
	}

	#prettifyIssues(issues: ValidationErrorIssue[]): string {
		const prettifiedIssues = issues.map((issue) => this.#prettifyIssue(issue));
		const joinedIssueMessages = prettifiedIssues.join("\n\n");

		return joinedIssueMessages;
	}
}
