import { getCurrentVersion } from "../getCurrentVersion.js";

const VERSION_REGEX = /^\d+\.\d+\.\d+$/;

describe("getCurrentVersion", () => {
	it("Should return the current version matching the version regex", () => {
		expect(getCurrentVersion()).toMatch(VERSION_REGEX);
	});
});
