import type { APIMemberBase } from "./base/member.js";
import type { APIEnum } from "./enum.js";
import type { APIMemberKind } from "./member.js";
import type { APIVariable } from "./variable.js";

export type AnyEntryPointMember = APIEnum | APIVariable;

export type AnyEntryPointMemberKind = AnyEntryPointMember["kind"];

export type APIEntryPoint = APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember>;
