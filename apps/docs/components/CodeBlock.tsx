export const CodeBlock = ({
  htmlCodeBlock,
}: {
  htmlCodeBlock: string;
}) => (
  <div
    className="flex items-center overflow-y-auto rounded-md border border-zinc-700 bg-zinc-950 p-4 font-bold text-sm"
    // biome-ignore lint/security/noDangerouslySetInnerHtml:
    dangerouslySetInnerHTML={{ __html: htmlCodeBlock }}
  />
);
