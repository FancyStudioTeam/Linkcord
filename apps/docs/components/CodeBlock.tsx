export const CodeBlock = ({
  htmlCodeBlock,
}: {
  htmlCodeBlock: string;
}) => (
  <div
    className="overflow-hidden rounded-md border border-zinc-700 bg-zinc-950 px-4 py-2 font-bold text-sm"
    // biome-ignore lint/security/noDangerouslySetInnerHtml:
    dangerouslySetInnerHTML={{ __html: htmlCodeBlock }}
  />
);
