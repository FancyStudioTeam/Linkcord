import type { APIEnum, APIInterface, APIMemberBase, APIMemberKind, APITypeAlias } from "../index.js";

export interface APIEntryPoint extends APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember> {}

export type AnyEntryPointMember = APIEnum | APIInterface | APITypeAlias;
