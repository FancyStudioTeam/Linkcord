import type { APIChildMemberBase, APIMemberKind, APIParameter } from "../index.js";

export interface APIConstructor extends Omit<APIChildMemberBase<APIMemberKind.Constructor>, "name"> {
  isProtected: boolean;
  overloadIndex: number;
  parameters: APIParameter[];
}
