import type { APIParameter } from "../shared/parameter.js";
import type { APIChildMemberBase } from "./base/child-member.js";
import type { APIMemberKind } from "./member.js";

/**
 * @public
 */
export interface APIConstructor extends Omit<APIChildMemberBase<APIMemberKind.Constructor>, "name"> {
  isProtected: boolean;
  overloadIndex: number;
  parameters: APIParameter[];
}
