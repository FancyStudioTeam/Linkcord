import type { APIAutoModerationRule } from "#types/discord/payloads/AutoModeration.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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
