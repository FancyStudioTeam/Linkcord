import { APIMemberKind, type AnyEntryPointMember } from "@fancystudioteam/api-extractor";
import type { ReactNode } from "react";
import { match } from "ts-pattern";
import { DocEnum } from "#components/docs/enum/DocEnum.js";
import { DocInterface } from "#components/docs/interface/DocInterface.js";

export const getDocData = (data: AnyEntryPointMember): ReactNode => {
  const docComponentData = match(data)
    .returnType<ReactNode>()
    .with(
      {
        kind: APIMemberKind.Enum,
      },
      (data) => <DocEnum data={data} />,
    )
    .with(
      {
        kind: APIMemberKind.Interface,
      },
      (data) => <DocInterface data={data} />,
    )
    .otherwise(() => null);

  return docComponentData;
};
