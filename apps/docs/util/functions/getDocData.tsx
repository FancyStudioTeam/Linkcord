import type { ReactNode } from "react";
import { match } from "ts-pattern";
import { DocEnumData } from "#components/docs/enum/DocEnumData.js";
import { APIMemberKind } from "#types/APIExtractor.js";
import type { AnyMemberData } from "./extractor/getMemberData.js";

export const getDocData = (memberData: AnyMemberData): ReactNode => {
  const docDataComponent = match(memberData)
    .returnType<ReactNode>()
    .with(
      {
        kind: APIMemberKind.Enum,
      },
      (data) => <DocEnumData memberData={data} />,
    )
    .otherwise(() => <div>Default</div>);

  return docDataComponent;
};
