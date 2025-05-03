import { APIMemberKind } from "#types/APIExtractor.js";
import type { APIEnum } from "#types/members/APIEnum";
import type { APIEnumMember } from "#types/members/APIEnumMember.js";
import { getExcerptTokenString } from "./getExcerptTokenString.js";
import { type MainMemberData, getMainMemberData } from "./getMainMemberData.js";

export const getEnumData = async (member: APIEnum): Promise<EnumData> => {
  const { displayName, excerptToken } = await getMainMemberData(member);
  const { members } = member;
  const enumMembers = members.map(getEnumMemberData);
  const enumData: EnumData = {
    displayName,
    enumMembers,
    excerptToken,
    kind: APIMemberKind.Enum,
  };

  return enumData;
};

export const getEnumMemberData = (member: APIEnumMember): EnumMemberData => {
  const { excerptTokens, initializerTokenRange, name } = member;
  const { endIndex, startIndex } = initializerTokenRange;
  const slicedExcerptTokens = excerptTokens?.slice(startIndex, endIndex);
  const value = getExcerptTokenString(slicedExcerptTokens);
  const enumMemberData: EnumMemberData = {
    displayName: name,
    value,
  };

  return enumMemberData;
};

export interface EnumData extends MainMemberData<APIMemberKind.Enum> {
  enumMembers: EnumMemberData[];
}

export interface EnumMemberData {
  displayName: string;
  value: string;
}
