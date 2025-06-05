import type { APIClass } from "./class.js";
import type { APIConstructor } from "./constructor.js";
import type { APIEntryPoint } from "./entry-point.js";
import type { APIEnumMember } from "./enum-member.js";
import type { APIEnum } from "./enum.js";
import type { APIFunction } from "./function.js";
import type { APIInterface } from "./interface.js";
import type { APIMethod } from "./method.js";
import type { APIPackage } from "./package.js";
import type { APIPropertySignature } from "./property-signature.js";
import type { APITypeAlias } from "./type-alias.js";
import type { APIVariable } from "./variable.js";

/**
 * @public
 */
export type AnyMember =
  | APIClass
  | APIConstructor
  | APIEntryPoint
  | APIEnum
  | APIEnumMember
  | APIFunction
  | APIInterface
  | APIMethod
  | APIPackage
  | APIPropertySignature
  | APITypeAlias
  | APIVariable;

/**
 * @public
 */
export type AnyMemberKind = AnyMember["kind"];

/**
 * @public
 */
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
