import { getMember, sortMembers } from "#extractor/functions";
import type { APIInterface, AnyInterfaceMember } from "#extractor/types";
import { DocInterfaceProperties } from "./DocInterfaceProperties.js";

const GENERIC_TYPE_REGEX = /<.*>/g;

const getExtendingReferences = (data: APIInterface) => {
  const { excerptTokens, extendsTokenRanges } = data;
  const extendingTypes: string[] = [];

  extendsTokenRanges.map((tokenRange) => {
    const { endIndex, startIndex } = tokenRange;
    const slicedExcerptTokens = excerptTokens.slice(startIndex, endIndex).map(({ text }) => text);
    const fullExcerptToken = slicedExcerptTokens.join("").replaceAll(GENERIC_TYPE_REGEX, "");

    extendingTypes.push(fullExcerptToken);
  });

  return extendingTypes;
};

const getPropertiesFromInterface = (data: APIInterface): AnyInterfaceMember[] => {
  const { members } = data;
  const interfaceMembers: AnyInterfaceMember[] = [...members];
  const extendingReferences = getExtendingReferences(data);
  const isExtending = extendingReferences.length > 0;

  console.log(extendingReferences);

  if (isExtending) {
    extendingReferences.map((extendingReference) => {
      const originalReferenceMember = getMember(extendingReference) as APIInterface | null;

      if (!originalReferenceMember) {
        return;
      }

      const originalReferenceMembers = getPropertiesFromInterface(originalReferenceMember);

      interfaceMembers.push(...originalReferenceMembers);
    });
  }

  const sortedMembers = sortMembers(interfaceMembers);

  return sortedMembers;
};

export const DocInterface = ({
  data,
}: {
  data: APIInterface;
}) => {
  //const { members } = data;
  const members = getPropertiesFromInterface(data);

  return <DocInterfaceProperties members={members} />;
};
