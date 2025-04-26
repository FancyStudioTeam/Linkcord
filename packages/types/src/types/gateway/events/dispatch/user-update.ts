import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIUser } from "#types/payloads";

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
