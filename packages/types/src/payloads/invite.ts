import type { ISO8601Date } from "../shared/discord.js";
import type { APIApplication } from "./application.js";
import type { APIChannel } from "./channel.js";
import type { APIGuild } from "./guild.js";
import type { APIGuildScheduledEvent } from "./guild-scheduled-event.js";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface APIInvite {
  approximate_member_count?: number;
  approximate_presence_count?: number;
  channel: APIChannel | null;
  code: string;
  expires_at?: ISO8601Date | null;
  guild?: APIInviteGuild;
  guild_scheduled_event?: APIGuildScheduledEvent;
  inviter?: APIUser;
  target_application?: APIApplication;
  target_type?: InviteTargetTypes;
  target_user?: APIUser;
  type: InviteTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface APIInviteGuild
  extends Pick<
    APIGuild,
    | "banner"
    | "description"
    | "features"
    | "icon"
    | "id"
    | "name"
    | "nsfw_level"
    | "premium_subscription_count"
    | "premium_tier"
    | "splash"
    | "vanity_code_url"
    | "verification_level"
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure
 */
export interface APIInviteMetadata {
  created_at: ISO8601Date;
  max_age: number;
  max_uses: number;
  temporary: boolean;
  uses: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
 */
export enum InviteTargetTypes {
  EmbeddedApplication = 2,
  Stream = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#invite-object-invite-types
 */
export enum InviteTypes {
  Friend = 2,
  GroupDM = 1,
  Guild = 0,
}
