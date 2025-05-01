import type { APIUser } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export interface GatewayDispatchUserUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.UserUpdate, GatewayDispatchUserUpdateEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export type GatewayDispatchUserUpdateEventData = APIUser;
