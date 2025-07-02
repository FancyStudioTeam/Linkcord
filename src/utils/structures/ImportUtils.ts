import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export class ImportUtils {
	static get IS_COMMON_JS(): boolean {
		return typeof require !== "undefined" && typeof module !== "undefined";
	}

	static resolvePath(...fragments: string[]): string {
		const path = join(...fragments);
		const resolvedPath = resolve(path);

		return ImportUtils.IS_COMMON_JS ? resolvedPath : pathToFileURL(resolvedPath).href;
	}
}
