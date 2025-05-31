import type { GatewayHello } from "@fancystudioteam/linkcord-types";
import type { Handler } from "../handlers.js";

/**
 * @internal
 */
export const HELLO: Handler<GatewayHello> = (gatewayShard, { d: { heartbeat_interval } }) => {
  gatewayShard.emit("hello", heartbeat_interval, gatewayShard);
  gatewayShard.emit(
    "debug",
    `Received hello opcode with interval of ${heartbeat_interval} milliseconds.`,
    gatewayShard,
  );
  gatewayShard.heartbeatInterval = heartbeat_interval;

  setInterval(gatewayShard.heartbeat.bind(gatewayShard), heartbeat_interval);
};
