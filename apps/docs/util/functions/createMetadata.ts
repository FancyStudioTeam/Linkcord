import type { MetaDescriptor } from "@remix-run/cloudflare";

export const createMetadata = (properties: Property[]): MetaDescriptor[] => {
  const metadata: MetaDescriptor[] = [];

  for (const [key, value] of properties) {
    if (key === "title") {
      metadata.push({
        title: value,
      });

      continue;
    }

    const property: MetaDescriptor = {
      content: value,
      property: key,
    };

    metadata.push(property);
  }

  return metadata;
};

type Property = ["title" | string, string];
