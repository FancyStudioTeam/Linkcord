import { IS_COMMON_JS } from "#utils/Constants.js";

const ERROR_MESSAGES = [
	"This package does not support CommonJS Modules.",
	"Please upgrade to ECMAScript Modules to use this package.",
];
const ERROR_MESSAGE = ERROR_MESSAGES.join("\n");

export function checkIsCommonJS(): void {
	if (IS_COMMON_JS) {
		throw new Error(ERROR_MESSAGE);
	}
}
