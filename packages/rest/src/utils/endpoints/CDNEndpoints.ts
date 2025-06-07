import type { Snowflake } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export class CDNEndpoints {
  static appAssetAchievementIcons(applicationId: Snowflake, achievementId: Snowflake, achievementIcon: string): string {
    return `app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIcon}`;
  }

  static appAssetStore(applicationId: Snowflake, assetId: Snowflake): string {
    return `app-assets/${applicationId}/store/${assetId}`;
  }

  static appAssets(applicationId: Snowflake, assetId: Snowflake): string {
    return `app-assets/${applicationId}/${assetId}`;
  }

  static appIcons(applicationId: Snowflake, applicationCoverOrIcon: string): string {
    return `app-icons/${applicationId}/${applicationCoverOrIcon}`;
  }

  static avatarDecorationPresets(userAvatarDecorationAsset: string): string {
    return `avatar-decorations/${userAvatarDecorationAsset}`;
  }

  static avatars(userId: Snowflake, userAvatar: string): string {
    return `avatars/${userId}/${userAvatar}`;
  }

  static banners(guildOrUserId: Snowflake, guildOrUserBanner: string): string {
    return `banners/${guildOrUserId}/${guildOrUserBanner}`;
  }

  static discoverySplashes(guildId: Snowflake, guildDiscoverySplash: string): string {
    return `discovery-splashes/${guildId}/${guildDiscoverySplash}`;
  }

  static embedAvatars(index: number): string {
    return `embed/avatars/${index}`;
  }

  static emojis(emojiId: Snowflake): string {
    return `emojis/${emojiId}`;
  }

  static guildEvents(guildId: Snowflake, scheduledEventId: Snowflake, scheduledEventCover: string): string {
    return `guilds/${guildId}/scheduled-events/${scheduledEventId}/${scheduledEventCover}`;
  }

  static guildUserAvatars(guildId: Snowflake, userId: Snowflake, userAvatar: string): string {
    return `guilds/${guildId}/users/${userId}/avatars/${userAvatar}`;
  }

  static guildUserBanners(guildId: Snowflake, userId: Snowflake, userBanner: string): string {
    return `guilds/${guildId}/users/${userId}/banners/${userBanner}`;
  }

  static icons(guildId: Snowflake, guildIcon: string): string {
    return `icons/${guildId}/${guildIcon}`;
  }

  static roleIcons(roleId: Snowflake, roleIcon: string): string {
    return `role-icons/${roleId}/${roleIcon}`;
  }

  static splashes(guildId: Snowflake, guildSplash: string): string {
    return `splashes/${guildId}/${guildSplash}`;
  }

  static stickers(stickerId: Snowflake): string {
    return `stickers/${stickerId}`;
  }

  static teamIcons(teamId: Snowflake, teamIcon: string): string {
    return `team-icons/${teamId}/${teamIcon}`;
  }
}
