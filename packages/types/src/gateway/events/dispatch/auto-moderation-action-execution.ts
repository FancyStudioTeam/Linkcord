import type { APIAutoModerationAction, AutoModerationTriggerTypes } from "../../../payloads/auto-moderation.js";
import type { Nullable } from "../../../shared/custom.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
 */
export interface GatewayDispatchAutoModerationActionExecutionPayload {
  action: APIAutoModerationAction;
  /**
   * @remarks
   * - This field may not exist if the event type is not `SEND_ALERT_MESSAGE`.
   */
  alert_system_message_id?: Snowflake;
  channel_id?: Snowflake;
  content: string;
  guild_id: Snowflake;
  matched_content: Nullable<string>;
  matched_keyword: Nullable<string>;
  /**
   * @remarks
   * - This field may not exist if the message was blocked by Auto Moderation
   *   or the content was not included in any message.
   */
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
