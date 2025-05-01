import type { APIGuildApplicationCommandPermissions } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#application-command-permissions-update
 */
export interface GatewayDispatchApplicationCommandPermissionsUpdateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.ApplicationCommandPermissionsUpdate,
    GatewayDispatchApplicationCommandPermissionsUpdateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#application-command-permissions-update
 */
export interface GatewayDispatchApplicationCommandPermissionsUpdateEventData
  extends APIGuildApplicationCommandPermissions {}
