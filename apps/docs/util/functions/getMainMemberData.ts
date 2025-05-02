import type { APIMemberKind } from "#types/APIExtractor";
import type { AnyMember } from "#types/APIMember";
import { makeCodeBlock } from "#util/makeCodeBlock";
import { getExcerptTokenString } from "./getExcerptTokenString.js";

export const getMainMemberData = async (member: AnyMember): Promise<MainMemberData> => {
  const { kind, name } = member;
  const memberData: MainMemberData = {
    displayName: name,
    kind,
  };

  if (member.excerptTokens) {
    const excerptToken = getExcerptTokenString(member.excerptTokens);
    const htmlCodeBlock = await makeCodeBlock(excerptToken);

    memberData.excerptToken = {
      htmlCodeBlock,
    };
  }

  return memberData;
};

export interface MainMemberData<Kind extends APIMemberKind = APIMemberKind> {
  displayName: string;
  excerptToken?: MainMemberDataExcerptToken;
  kind: Kind;
}

interface MainMemberDataExcerptToken {
  htmlCodeBlock: string;
}
