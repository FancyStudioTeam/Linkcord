import { styleText } from "node:util";
import type { ValidationErrorIssue } from "#utils/types/index.js";

export class ValidationError extends Error {
	constructor(issues: ValidationErrorIssue[]) {
		super();

		const prettifiedIssues = this.#prettifyIssues(issues);

		this.message = `Validation has failed with the following issues:\n${prettifiedIssues}`;
		this.name = "ValidationError";
	}

	#flattenIssuePath(path: PropertyKey[]): string {
		const formattedPathCallback = (accumulator: string, currentItem: string | number): string =>
			typeof currentItem === "number" ? `${accumulator}[${currentItem}]` : `${accumulator}.${currentItem}`;

		const filteredPath = path.filter((item) => typeof item !== "symbol");
		const formattedPath = filteredPath.slice(1).reduce(formattedPathCallback, String(filteredPath[0]));

		return formattedPath;
	}

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

	#prettifyIssues(issues: ValidationErrorIssue[]): string {
		const prettifiedIssues = issues.map((issue) => this.#prettifyIssue(issue));
		const joinedIssueMessages = prettifiedIssues.join("\n\n");

		return joinedIssueMessages;
	}
}
