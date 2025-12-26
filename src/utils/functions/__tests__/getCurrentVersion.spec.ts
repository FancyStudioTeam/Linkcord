import { getCurrentVersion } from '../getCurrentVersion.js';

/**
 * @see https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
 */
const SEMVER_REGEX =
	/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

describe('getCurrentVersion', () => {
	it('Should return the current version matching the Semantic Versioning regex', () => {
		expect(getCurrentVersion()).toMatch(SEMVER_REGEX);
	});
});
