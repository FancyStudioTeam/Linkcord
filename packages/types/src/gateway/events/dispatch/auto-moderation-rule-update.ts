import type { APIAutoModerationRule } from "../../../payloads/auto-moderation.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-update
 */
export type GatewayDispatchAutoModerationRuleUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.AutoModerationRuleUpdate,
  GatewayDispatchAutoModerationRuleUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-update
 */
export type GatewayDispatchAutoModerationRuleUpdatePayload = APIAutoModerationRule;
