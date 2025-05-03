import { type Highlighter, createHighlighter as shikiCreateHighlighter } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

let highlighter: Highlighter | null = null;

const getHighlighter = async (): Promise<Highlighter> => {
  if (!highlighter) {
    const createdHighlighter = await shikiCreateHighlighter({
      langs: ["typescript"],
      themes: ["github-dark-default"],
      engine: createJavaScriptRegexEngine(),
    });

    highlighter = createdHighlighter;
  }

  return highlighter;
};

export const makeCodeBlock = async (code: string): Promise<string> => {
  const highlighter = await getHighlighter();
  const highlightedCode = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
