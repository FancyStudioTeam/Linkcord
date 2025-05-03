import { cache } from "react";
import { createHighlighter as shikiCreateHighlighter } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const _createHighlighter = async () => {
  const highlighter = await shikiCreateHighlighter({
    engine: createJavaScriptRegexEngine(),
    langs: ["typescript"],
    themes: ["github-dark-default"],
  });

  return highlighter;
};

const createHighlighter = cache(_createHighlighter);

export const makeCodeBlock = async (code: string): Promise<string> => {
  const highlighter = await createHighlighter();
  const highlightedCode = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
