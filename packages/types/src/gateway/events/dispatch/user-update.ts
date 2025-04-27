import type { APIUser } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export interface GatewayDispatchUserUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.UserUpdate, GatewayDispatchUserUpdateEventData> {}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export type GatewayDispatchUserUpdateEventData = APIUser;
