import { SAFE_CHARACTERS } from "../utils/constants.js";

/**
 * @internal
 */
export const encode = (strings: TemplateStringsArray, ...values: (string | number)[]): string =>
    strings.reduce((endpoint, nextString, index) => {
        endpoint += nextString;

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

            endpoint += array.join("");
        }

        return endpoint;
    }, "");
