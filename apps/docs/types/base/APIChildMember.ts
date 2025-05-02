import type { APIMemberKind } from "types/APIExtractor.js";
import type { APIDocumentedMemberBase } from "./APIDocumentedMemberBase.js";

export interface APIChildMemberBase<Kind extends APIMemberKind>
  extends Omit<APIDocumentedMemberBase<Kind>, "fileUrlPath" | "members" | "preserveMemberOrder"> {}
