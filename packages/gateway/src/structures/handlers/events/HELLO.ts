import type { GatewayHello } from "@fancystudioteam/linkcord-types";
import type { Handler } from "../handlers.js";

/**
 * @internal
 */
export const HELLO: Handler<GatewayHello> = (gatewayShard, { d: { heartbeat_interval } }) => {
  const debugMessage = `Received a hello opcode with an interval of ${heartbeat_interval} milliseconds.`;

  gatewayShard.emit("hello", heartbeat_interval, gatewayShard.id);
  gatewayShard.emit("debug", debugMessage, gatewayShard.id);
  gatewayShard.heartbeatInterval = heartbeat_interval;

  setInterval(gatewayShard.heartbeat.bind(gatewayShard), heartbeat_interval);
};
