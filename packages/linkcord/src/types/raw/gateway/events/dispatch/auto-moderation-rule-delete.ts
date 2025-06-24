import type { APIAutoModerationRule } from "../../../payloads/auto-moderation.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-delete
 */
export type GatewayDispatchAutoModerationRuleDelete = GatewayDispatchEventBase<
  GatewayDispatchEvents.AutoModerationRuleDelete,
  GatewayDispatchAutoModerationRuleDeletePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-delete
 */
export type GatewayDispatchAutoModerationRuleDeletePayload = APIAutoModerationRule;
