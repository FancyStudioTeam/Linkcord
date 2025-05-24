import type { Nullable } from "../shared/custom.js";
import type { Snowflake } from "../shared/discord.js";
import type { APIGuildChannel } from "./channel.js";
import type { APIGuild } from "./guild.js";
import type { APIUser } from "./user.js";

/**
 * @public
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
  source_channel: APIWebhookSourceChannel;
  /**
   * @remarks
   * - This field may not be present when the webhook owner lost access to the
   *   guild at which the channel belongs.
   */
  source_guild?: APIWebhookSourceGuild;
  token?: string;
  type: WebhookTypes;
  url?: string;
  user?: APIUser;
}

/**
 * @public
 * @remarks
 * - This type is not documented by Discord.
 */
export type APIWebhookSourceChannel = Pick<APIGuildChannel, "id" | "name">;

/**
 * @public
 * @remarks
 * - This type is not documented by Discord.
 */
export type APIWebhookSourceGuild = Pick<APIGuild, "icon" | "id" | "name">;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export enum WebhookTypes {
  Application = 3,
  ChannelFollower = 2,
  Incoming = 1,
}
