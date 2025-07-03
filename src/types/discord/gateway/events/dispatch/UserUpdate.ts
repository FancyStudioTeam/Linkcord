import type { APIUser } from "#types/raw/payloads/Users.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export type GatewayDispatchUserUpdatePayload = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export type GatewayDispatchUserUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.UserUpdate,
	GatewayDispatchUserUpdatePayload
>;
