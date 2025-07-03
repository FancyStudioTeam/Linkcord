import type {
	APIAutoModerationAction,
	AutoModerationTriggerTypes,
} from "#types/raw/payloads/AutoModeration.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
 */
export interface GatewayDispatchAutoModerationActionExecutionPayload {
	action: APIAutoModerationAction;
	alert_system_message_id?: Snowflake;
	channel_id?: Snowflake;
	content: string;
	guild_id: Snowflake;
	matched_content: string | null;
	matched_keyword: string | null;
	message_id?: Snowflake;
	rule_id: Snowflake;
	rule_trigger_type: AutoModerationTriggerTypes;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution
 */
export type GatewayDispatchAutoModerationActionExecution = GatewayDispatchEventBase<
	GatewayDispatchEvents.AutoModerationActionExecution,
	GatewayDispatchAutoModerationActionExecutionPayload
>;
