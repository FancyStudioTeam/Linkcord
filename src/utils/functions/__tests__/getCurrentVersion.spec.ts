import * as fs from "node:fs";
import { getCurrentVersion } from "../getCurrentVersion.js";

const VERSION_REGEX = /^\d+\.\d+\.\d+$/;

describe("getCurrentVersion", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("Should return current version matching the X.Y.Z string format", () => {
		expect(getCurrentVersion()).toMatch(VERSION_REGEX);
	});

	it("Should return 'Invalid Version' if package.json file does not exist", () => {
		vi.mock("node:fs", {
			spy: true,
		});
		vi.mocked(fs.existsSync).mockReturnValue(false);

		expect(getCurrentVersion()).toBe("Invalid Version");
	});
});
