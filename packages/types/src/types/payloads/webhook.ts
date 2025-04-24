import type { Nullable, Snowflake } from "#types/shared";
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
   * @remarks This may not be present when the webhook creator lost access to the source channel.
   */
  source_channel: APIPartialChannel;
  /**
   * @remarks This may not be present when the webhook creator lost access to the source guild.
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
