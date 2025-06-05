import type { GatewayHello } from "@fancystudioteam/linkcord-types";
import type { Handler } from "../handlers.js";

/**
 * @internal
 */
export const HELLO: Handler<GatewayHello> = (gatewayShard, { d: { heartbeat_interval } }) => {
  gatewayShard.emit("hello", {
    gatewayShard,
    heartbeatInterval: heartbeat_interval,
  });
  gatewayShard.emit("debug", {
    gatewayShard,
    message: `Received heartbeat interval of ${heartbeat_interval} ms.`,
  });
  gatewayShard.heartbeatInterval = heartbeat_interval;

  setInterval(gatewayShard.heartbeat.bind(gatewayShard), heartbeat_interval);
};
