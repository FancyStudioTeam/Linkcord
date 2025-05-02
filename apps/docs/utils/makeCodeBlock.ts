import { codeToHtml } from "shiki";

/**
 * Creates a code block from a string of code.
 * @param code - The code to create the code block from.
 * @returns The created HTML code block.
 */
export const makeCodeBlock = async (code: string) => {
  const highlightedCode = await codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
