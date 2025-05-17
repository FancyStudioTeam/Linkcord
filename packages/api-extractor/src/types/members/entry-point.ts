import type { APIMemberBase } from "./base/member.js";
import type { APIEnum } from "./enum.js";
import type { APIMemberKind } from "./member.js";

export type AnyEntryPointMember = APIEnum;

export type AnyEntryPointMemberKind = AnyEntryPointMember["kind"];

export type APIEntryPoint = APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember>;
