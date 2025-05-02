import type { APIEnum } from "./members/APIEnum.js";
import type { APIEnumMember } from "./members/APIEnumMember.js";
import type { APIInterface } from "./members/APIInterface.js";
import type { APIPropertySignature } from "./members/APIPropertySignature.js";
import type { APITypeAlias } from "./members/APITypeAlias.js";
import type { APIVariable } from "./members/APIVariable.js";

export type AnyEntryPointMember = APIEnum | APIInterface | APITypeAlias | APIVariable;

export type AnyMember = APIEnum | APIEnumMember | APIInterface | APIPropertySignature | APITypeAlias;
