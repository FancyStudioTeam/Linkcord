import type { APIAutoModerationRule } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-create
 */
export interface GatewayDispatchAutoModerationRuleCreate
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.AutoModerationRuleCreate,
    GatewayDispatchAutoModerationRuleCreateData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-rule-create
 */
export type GatewayDispatchAutoModerationRuleCreateData = APIAutoModerationRule;
