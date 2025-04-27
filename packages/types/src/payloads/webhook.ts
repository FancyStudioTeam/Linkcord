import type { Nullable, Snowflake } from "#shared";
import type { APIPartialChannel } from "./channel.js";
import type { APIPartialGuild } from "./guild.js";
import type { APIUser } from "./user.js";

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface APIWebhook {
  application_id: Nullable<Snowflake>;
  avatar: Nullable<string>;
  channel_id: Nullable<Snowflake>;
  guild_id?: Nullable<Snowflake>;
  id: Snowflake;
  name: Nullable<string>;
  /**
   * @remarks
   * - This field may not be present when the webhook owner lost access to the
   *   guild at which the channel belongs.
   */
  source_channel: APIPartialChannel;
  /**
   * @remarks
   * - This field may not be present when the webhook owner lost access to the
   *   guild at which the channel belongs.
   */
  source_guild?: APIPartialGuild;
  token?: string;
  type: WebhookTypes;
  url?: string;
  user?: APIUser;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export enum WebhookTypes {
  Application = 3,
  ChannelFollower = 2,
  Incoming = 1,
}
