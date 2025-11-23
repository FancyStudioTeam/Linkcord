import { SAFE_CHARACTERS } from "#rest/utils/Constants.js";

export function encode(strings: TemplateStringsArray, ...values: (number | string)[]): string {
	const encodedEndpointCallback = (accumulator: string, fragment: string, index: number) => {
		accumulator += fragment;

		const value = values[index];

		if (value) {
			const array = Array.from(String(value), (character: string) => {
				if (SAFE_CHARACTERS.has(character)) {
					return character;
				}

				if (decodeURIComponent(character) === character) {
					return encodeURIComponent(character);
				}

				return character;
			});

			accumulator += array.join("");
		}

		return accumulator;
	};
	const encodedEndpoint = strings.reduce(encodedEndpointCallback, "");

	return encodedEndpoint;
}
