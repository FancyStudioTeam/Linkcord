import type { APIMemberBase } from "../base/APIMemberBase.js";
import type { APIMemberKind } from "../index.js";
import type { APIEnum } from "./APIEnum.js";
import type { APIInterface } from "./APIInterface.js";
import type { APITypeAlias } from "./APITypeAlias.js";

export interface APIEntryPoint extends APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember> {}

export type AnyEntryPointMember = APIEnum | APIInterface | APITypeAlias;
