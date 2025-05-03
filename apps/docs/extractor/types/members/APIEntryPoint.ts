import type { APIEnum, APIInterface, APIMemberBase, APIMemberKind, APITypeAlias, APIVariable } from "../index.js";

export interface APIEntryPoint extends APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember> {}

export type AnyEntryPointMember = APIEnum | APIInterface | APITypeAlias | APIVariable;
export type AnyTopLevelKind = AnyEntryPointMember["kind"];
