import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../../GatewayShard.js";

export const READY = (gatewayShard: GatewayShard, data: GatewayDispatchReadyPayload) => {
  const { resume_gateway_url, session_id } = data;

  // biome-ignore lint/complexity/useLiteralKeys:
  gatewayShard["_resumeGatewayUrl"] = resume_gateway_url;
  // biome-ignore lint/complexity/useLiteralKeys:
  gatewayShard["_sessionId"] = session_id;
};
