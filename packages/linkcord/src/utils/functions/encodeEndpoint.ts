import { SAFE_CHARACTERS } from "../constants.js";

export const encodeEndpoint = (strings: TemplateStringsArray, ...values: (string | number)[]): string =>
  strings.reduce((endpoint, nextString, index) => {
    endpoint += nextString;

    const value = values[index];

    if (value) {
      const arrayFunction = (character: string): string => {
        if (SAFE_CHARACTERS.has(character)) {
          return character;
        }

        if (decodeURIComponent(character) === character) {
          return encodeURIComponent(character);
        }

        return character;
      };
      const array = Array.from(String(value), arrayFunction);

      endpoint += array.join("");
    }

    return endpoint;
  }, "");
