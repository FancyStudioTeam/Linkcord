import type { APIAutoModerationAction, AutoModerationTriggerTypes } from "#payloads";
import type { Nullable, Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution
 */
export interface GatewayDispatchAutoModerationActionExecutionEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.AutoModerationActionExecution,
    GatewayDispatchAutoModerationActionExecutionEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
 */
export interface GatewayDispatchAutoModerationActionExecutionEventData {
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
