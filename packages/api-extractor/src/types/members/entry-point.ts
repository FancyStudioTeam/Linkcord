import type { APIMemberBase } from "./base/member.js";
import type { APIClass } from "./class.js";
import type { APIEnum } from "./enum.js";
import type { APIFunction } from "./function.js";
import type { APIInterface } from "./interface.js";
import type { APIMemberKind } from "./member.js";
import type { APITypeAlias } from "./type-alias.js";
import type { APIVariable } from "./variable.js";

/**
 * @public
 */
export type AnyEntryPointMember = APIClass | APIEnum | APIFunction | APIInterface | APITypeAlias | APIVariable;

/**
 * @public
 */
export type AnyEntryPointMemberKind = AnyEntryPointMember["kind"];

/**
 * @public
 */
export type APIEntryPoint = APIMemberBase<APIMemberKind.EntryPoint, AnyEntryPointMember>;
