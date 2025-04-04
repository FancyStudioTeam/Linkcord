import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { APIAvatarDecorationData, APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMember {
  avatar?: Nullable<string>;
  avatar_decoration_data?: Nullable<APIAvatarDecorationData>;
  banner?: Nullable<string>;
  communication_disabled_until?: Nullable<ISO8601Date>;
  deaf: boolean;
  flags: number;
  joined_at: ISO8601Date;
  mute: boolean;
  nick?: Nullable<string>;
  pending?: boolean;
  permissions?: string;
  premium_since?: Nullable<ISO8601Date>;
  roles: Snowflake[];
  user?: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
 */
export enum GuildMemberFlags {
  AutomodQuarantinedUsername = 1 << 7,
  BypassesVerification = 1 << 2,
  CompletedHomeActions = 1 << 6,
  CompletedOnboarding = 1 << 1,
  DMSettingsUpsellAcknowledged = 1 << 9,
  DidRejoin = 1 << 0,
  IsGuest = 1 << 4,
  StartedHomeActions = 1 << 5,
  StartedOnboarding = 1 << 3,
}
