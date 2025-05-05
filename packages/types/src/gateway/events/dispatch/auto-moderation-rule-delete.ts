import type { APIAutoModerationRule } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-delete
 */
export interface GatewayDispatchAutoModerationRuleDelete
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.AutoModerationRuleDelete,
    GatewayDispatchAutoModerationRuleDeleteData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-delete
 */
export type GatewayDispatchAutoModerationRuleDeleteData = APIAutoModerationRule;
