import type { APIExtractor } from "#types/APIExtractor.js";
import type { AnyEntryPointMember } from "#types/APIMember";

/**
 * Gets the API Extractor JSON schema.
 * @returns The API Extractor JSON schema.
 */
export const getTypeSchema = async (): Promise<APIExtractor> => {
  const { default: schema } = await import("public/api/types.api.json");

  return schema as APIExtractor;
};

/**
 * Gets the API Extractor members.
 * @returns The API Extractor members.
 */
export const getTypeMembers = async (): Promise<AnyEntryPointMember[]> => {
  const schema = await getTypeSchema();
  const entryPoint = schema.members[0];

  return entryPoint.members;
};

export enum APIKind {
  CallSignature = "CallSignature",
  Class = "Class",
  ConstructSignature = "ConstructSignature",
  Constructor = "Constructor",
  EntryPoint = "EntryPoint",
  Enum = "Enum",
  EnumMember = "EnumMember",
  Function = "Function",
  IndexSignature = "IndexSignature",
  Interface = "Interface",
  Method = "Method",
  MethodSignature = "MethodSignature",
  Model = "Model",
  Namespace = "Namespace",
  None = "None",
  Package = "Package",
  Property = "Property",
  PropertySignature = "PropertySignature",
  TypeAlias = "TypeAlias",
  Variable = "Variable",
}
