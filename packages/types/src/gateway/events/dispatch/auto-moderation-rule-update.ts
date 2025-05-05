import type { APIAutoModerationRule } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-update
 */
export interface GatewayDispatchAutoModerationRuleUpdate
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.AutoModerationRuleUpdate,
    GatewayDispatchAutoModerationRuleUpdateData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-update
 */
export type GatewayDispatchAutoModerationRuleUpdateData = APIAutoModerationRule;
