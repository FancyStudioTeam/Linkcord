import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import type { DispatchHandler } from "../dispatchHandlers.js";

export const READY: DispatchHandler<GatewayDispatchReadyPayload> = (
  gatewayShard,
  { resume_gateway_url, session_id },
) => {
  // biome-ignore lint/complexity/useLiteralKeys:
  gatewayShard["_resumeGatewayUrl"] = resume_gateway_url;
  // biome-ignore lint/complexity/useLiteralKeys:
  gatewayShard["_sessionId"] = session_id;
};
