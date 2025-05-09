import type {
  APIClass,
  APIEnum,
  APIEnumMember,
  APIInterface,
  APIPropertySignature,
  APITypeAlias,
  APIVariable,
} from "./index.js";

export type AnyMember =
  | APIClass
  | APIEnum
  | APIEnumMember
  | APIInterface
  | APIPropertySignature
  | APITypeAlias
  | APIVariable;
