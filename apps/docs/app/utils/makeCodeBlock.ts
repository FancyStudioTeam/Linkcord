import { codeToHtml } from "shiki";

export const makeCodeBlock = async (code: string) => {
  const highlightedCode = await codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return highlightedCode;
};
