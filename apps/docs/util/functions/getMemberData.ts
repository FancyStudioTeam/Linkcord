import { match } from "ts-pattern";
import { APIMemberKind } from "#types/APIExtractor";
import type { AnyMember } from "#types/APIMember";
import { type EnumData, getEnumData } from "./getEnumData.js";

export const getMemberData = async (member: AnyMember): Promise<AnyMemberData> => {
  const memberData = await match(member)
    .returnType<Awaitable<AnyMemberData>>()
    .with(
      {
        kind: APIMemberKind.Enum,
      },
      (data) => getEnumData(data),
    )
    .run();

  return memberData;
};

type Awaitable<Type> = Type | Promise<Type>;
export type AnyMemberData = EnumData;
