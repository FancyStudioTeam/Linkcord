import type { APIAutoModerationRule } from "#types/raw/payloads/AutoModeration.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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
