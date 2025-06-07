import { SAFE_CHARACTERS } from "../constants.js";

export const encodeEndpoint = (strings: TemplateStringsArray, ...values: (string | number)[]): string => {
  const encodedEndpoint = strings.reduce((endpoint, nextString, index) => {
    // biome-ignore lint/style/noParameterAssign:
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

      // biome-ignore lint/style/noParameterAssign:
      endpoint += array.join("");
    }

    return endpoint;
  }, "");

  return encodedEndpoint;
};
