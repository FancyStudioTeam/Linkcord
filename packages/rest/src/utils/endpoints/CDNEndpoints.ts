import type { Snowflake } from "@fancystudioteam/linkcord-types";

/**
 * @public
 */
export class CDNEndpoints {
  static applicationAssetAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    achievementIcon: string,
  ): string {
    return `app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIcon}`;
  }

  static applicationAssetStore(applicationId: Snowflake, assetId: Snowflake): string {
    return `app-assets/${applicationId}/store/${assetId}`;
  }

  static applicationAsset(applicationId: Snowflake, assetId: Snowflake): string {
    return `app-assets/${applicationId}/${assetId}`;
  }

  static applicationIcon(applicationId: Snowflake, applicationCoverOrIcon: string): string {
    return `app-icons/${applicationId}/${applicationCoverOrIcon}`;
  }

  static attachment(channelId: Snowflake, messageId: Snowflake, attachmentName: string): string {
    return `attachments/${channelId}/${messageId}/${attachmentName}`;
  }

  static avatarDecorationPreset(userAvatarDecorationAsset: string): string {
    return `avatar-decorations/${userAvatarDecorationAsset}`;
  }

  static avatar(userId: Snowflake, userAvatar: string): string {
    return `avatars/${userId}/${userAvatar}`;
  }

  static badgeIcon(badgeIcon: string): string {
    return `badge-icons/${badgeIcon}`;
  }

  static banner(guildOrUserId: Snowflake, guildOrUserBanner: string): string {
    return `banners/${guildOrUserId}/${guildOrUserBanner}`;
  }

  static clanBadge(guildId: Snowflake, clanBadge: string): string {
    return `clan-badges/${guildId}/${clanBadge}`;
  }

  static clanBanner(guildId: Snowflake, clanBanner: string): string {
    return `clan-banners/${guildId}/${clanBanner}`;
  }

  static discoverySplash(guildId: Snowflake, guildDiscoverySplash: string): string {
    return `discovery-splashes/${guildId}/${guildDiscoverySplash}`;
  }

  static embedAvatar(index: number): string {
    return `embed/avatars/${index}`;
  }

  static emoji(emojiId: Snowflake): string {
    return `emojis/${emojiId}`;
  }

  static guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake, scheduledEventCover: string): string {
    return `guilds/${guildId}/scheduled-events/${scheduledEventId}/${scheduledEventCover}`;
  }

  static guildUserAvatar(guildId: Snowflake, userId: Snowflake, userAvatar: string): string {
    return `guilds/${guildId}/users/${userId}/avatars/${userAvatar}`;
  }

  static guildUserBanner(guildId: Snowflake, userId: Snowflake, userBanner: string): string {
    return `guilds/${guildId}/users/${userId}/banners/${userBanner}`;
  }

  static icon(guildId: Snowflake, guildIcon: string): string {
    return `icons/${guildId}/${guildIcon}`;
  }

  static roleIcon(roleId: Snowflake, roleIcon: string): string {
    return `role-icons/${roleId}/${roleIcon}`;
  }

  static soundboardSound(soundboardSoundId: Snowflake): string {
    return `soundboard-sounds/${soundboardSoundId}`;
  }

  static splash(guildId: Snowflake, guildSplash: string): string {
    return `splashes/${guildId}/${guildSplash}`;
  }

  static sticker(stickerId: Snowflake): string {
    return `stickers/${stickerId}`;
  }

  static teamIcon(teamId: Snowflake, teamIcon: string): string {
    return `team-icons/${teamId}/${teamIcon}`;
  }
}
