import type { GatewayDispatch } from "@fancystudioteam/linkcord-types";
import type { Handler } from "../handlers.js";
import { dispatchHandlers } from "./dispatch/dispatchHandlers.js";

/**
 * @internal
 */
export const DISPATCH: Handler<GatewayDispatch> = (client, gatewayShard, { d, t }) => {
  const handler = dispatchHandlers[t];

  handler?.(client, gatewayShard, d as never);
};
