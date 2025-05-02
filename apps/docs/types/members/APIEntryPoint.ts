import type { APIMemberKind } from "types/APIExtractor";
import type { APIMemberBase } from "types/base/APIMemberBase";
import type { APIEnum } from "./APIEnum.js";
import type { APIInterface } from "./APIInterface.js";
import type { APITypeAlias } from "./APITypeAlias.js";

export interface APIEntryPoint extends APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember> {}

type AnyEntryPointMember = APIEnum | APIInterface | APITypeAlias;
