import { createHighlighter } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const highlighter = await createHighlighter({
  engine: createJavaScriptRegexEngine(),
  langs: ["typescript"],
  themes: ["github-dark-default"],
});

export const makeCodeBlock = (code: string): string => {
  const highlightedCode = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
