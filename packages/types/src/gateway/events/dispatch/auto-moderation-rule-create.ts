import type { APIAutoModerationRule } from "../../../payloads/auto-moderation.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-create
 */
export type GatewayDispatchAutoModerationRuleCreate = GatewayDispatchEventBase<
  GatewayDispatchEvents.AutoModerationRuleCreate,
  GatewayDispatchAutoModerationRuleCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-create
 */
export type GatewayDispatchAutoModerationRuleCreatePayload = APIAutoModerationRule;
