import type { APIGuildApplicationCommandPermissions } from "../../../payloads/application-command.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#application-command-permissions-update
 */
export type GatewayDispatchApplicationCommandPermissionsUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.ApplicationCommandPermissionsUpdate,
  GatewayDispatchApplicationCommandPermissionsUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#application-command-permissions-update
 */
export type GatewayDispatchApplicationCommandPermissionsUpdatePayload = APIGuildApplicationCommandPermissions;
