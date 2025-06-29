import type { APIAutoModerationRule } from "#types/raw/payloads/AutoModeration.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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
