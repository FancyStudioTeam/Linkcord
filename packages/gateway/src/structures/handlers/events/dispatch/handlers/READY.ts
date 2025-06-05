import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import type { DispatchHandler } from "../dispatchHandlers.js";

export const READY: DispatchHandler<GatewayDispatchReadyPayload> = (
  gatewayShard,
  { resume_gateway_url, session_id, user },
) => {
  gatewayShard.resumeGatewayUrl = resume_gateway_url;
  gatewayShard.sessionId = session_id;
  gatewayShard.emit("ready", {
    user,
    gatewayShard,
  });
};
