import { createHighlighter } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

/**
 * Creates a code block from a string of code.
 * @param code - The code to create the code block from.
 * @returns The created HTML code block.
 */
export const makeCodeBlock = async (code: string): Promise<string> => {
  const highlighter = await createHighlighter({
    engine: createJavaScriptRegexEngine(),
    langs: ["typescript"],
    themes: ["github-dark-default"],
  });
  const highlightedCode = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
