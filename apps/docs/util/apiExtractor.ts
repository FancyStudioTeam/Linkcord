import typesApi from "public/api/types.api.json";
import { cache } from "react";
import type { APIExtractor } from "#types/APIExtractor.js";
import type { AnyEntryPointMember } from "#types/APIMember";

export const getTypeSchema = async (): Promise<APIExtractor> => typesApi as APIExtractor;

export const _getTypeMembers = async (): Promise<AnyEntryPointMember[]> => {
  const schema = await getTypeSchema();
  const entryPoint = schema.members[0];

  return entryPoint.members;
};

export const getTypeMembers = cache(_getTypeMembers);
