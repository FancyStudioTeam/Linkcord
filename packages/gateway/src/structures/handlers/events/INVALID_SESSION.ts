import type { GatewayInvalidSession } from "@fancystudioteam/linkcord-types";
import type { Handler } from "../handlers.js";

/**
 * @internal
 */
export const INVALID_SESSION: Handler<GatewayInvalidSession> = (gatewayShard, { d: isReconnectable }) => {
  if (isReconnectable) {
    gatewayShard.emit(
      "debug",
      "The session was invalidated but it can be resumed. Should attempt to resume.",
      gatewayShard.id,
    );
    // biome-ignore lint/complexity/useLiteralKeys:
    gatewayShard["_handleResume"]();
  }

  gatewayShard.emit(
    "debug",
    "The session was invalidated but it cannot be resumed. Should attempt to request a new session.",
    gatewayShard.id,
  );
  // biome-ignore lint/complexity/useLiteralKeys:
  gatewayShard["_handleConnect"]();
};
