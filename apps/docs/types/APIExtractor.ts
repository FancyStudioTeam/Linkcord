import type { APIEntryPoint } from "./members/APIEntryPoint.js";

export interface APIExtractor {
  canonicalReference: string;
  docComment: string;
  kind: APIMemberKind.Package;
  members: APIEntryPoint[];
  metadata: APIMetadata;
  preserveMemberOrder: boolean;
}

export interface APIMetadata {
  oldestForwardsCompatibleVersion: number;
  schemaVersion: number;
  toolPackage: string;
  toolVersion: string;
}

export enum APIMemberKind {
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

export type AnyTopLevelKind =
  | APIMemberKind.Enum
  | APIMemberKind.Interface
  | APIMemberKind.TypeAlias
  | APIMemberKind.Variable;
