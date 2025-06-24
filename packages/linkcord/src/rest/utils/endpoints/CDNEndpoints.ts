import type { Snowflake } from "@fancystudioteam/linkcord-types";
import { encodeEndpoint } from "@fancystudioteam/linkcord-utils";

/**
 * @public
 */
export class CDNEndpoints {
  static applicationAssetAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    achievementIcon: string,
  ): string {
    return encodeEndpoint`app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIcon}`;
  }

  static applicationAssetStore(applicationId: Snowflake, assetId: Snowflake): string {
    return encodeEndpoint`app-assets/${applicationId}/store/${assetId}`;
  }

  static applicationAsset(applicationId: Snowflake, assetId: Snowflake): string {
    return encodeEndpoint`app-assets/${applicationId}/${assetId}`;
  }

  static applicationIcon(applicationId: Snowflake, applicationCoverOrIcon: string): string {
    return encodeEndpoint`app-icons/${applicationId}/${applicationCoverOrIcon}`;
  }

  static attachment(channelId: Snowflake, messageId: Snowflake, attachmentName: string): string {
    return encodeEndpoint`attachments/${channelId}/${messageId}/${attachmentName}`;
  }

  static avatarDecorationPreset(userAvatarDecorationAsset: string): string {
    return encodeEndpoint`avatar-decorations/${userAvatarDecorationAsset}`;
  }

  static avatar(userId: Snowflake, userAvatar: string): string {
    return encodeEndpoint`avatars/${userId}/${userAvatar}`;
  }

  static badgeIcon(badgeIcon: string): string {
    return encodeEndpoint`badge-icons/${badgeIcon}`;
  }

  static banner(guildOrUserId: Snowflake, guildOrUserBanner: string): string {
    return encodeEndpoint`banners/${guildOrUserId}/${guildOrUserBanner}`;
  }

  static clanBadge(guildId: Snowflake, clanBadge: string): string {
    return encodeEndpoint`clan-badges/${guildId}/${clanBadge}`;
  }

  static clanBanner(guildId: Snowflake, clanBanner: string): string {
    return encodeEndpoint`clan-banners/${guildId}/${clanBanner}`;
  }

  static discoverySplash(guildId: Snowflake, guildDiscoverySplash: string): string {
    return encodeEndpoint`discovery-splashes/${guildId}/${guildDiscoverySplash}`;
  }

  static embedAvatar(index: number): string {
    return encodeEndpoint`embed/avatars/${index}`;
  }

  static emoji(emojiId: Snowflake): string {
    return encodeEndpoint`emojis/${emojiId}`;
  }

  static guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake, scheduledEventCover: string): string {
    return encodeEndpoint`guilds/${guildId}/scheduled-events/${scheduledEventId}/${scheduledEventCover}`;
  }

  static guildUserAvatar(guildId: Snowflake, userId: Snowflake, userAvatar: string): string {
    return encodeEndpoint`guilds/${guildId}/users/${userId}/avatars/${userAvatar}`;
  }

  static guildUserBanner(guildId: Snowflake, userId: Snowflake, userBanner: string): string {
    return encodeEndpoint`guilds/${guildId}/users/${userId}/banners/${userBanner}`;
  }

  static icon(guildId: Snowflake, guildIcon: string): string {
    return encodeEndpoint`icons/${guildId}/${guildIcon}`;
  }

  static roleIcon(roleId: Snowflake, roleIcon: string): string {
    return encodeEndpoint`role-icons/${roleId}/${roleIcon}`;
  }

  static soundboardSound(soundboardSoundId: Snowflake): string {
    return encodeEndpoint`soundboard-sounds/${soundboardSoundId}`;
  }

  static splash(guildId: Snowflake, guildSplash: string): string {
    return encodeEndpoint`splashes/${guildId}/${guildSplash}`;
  }

  static sticker(stickerId: Snowflake): string {
    return encodeEndpoint`stickers/${stickerId}`;
  }

  static teamIcon(teamId: Snowflake, teamIcon: string): string {
    return encodeEndpoint`team-icons/${teamId}/${teamIcon}`;
  }
}

Object.freeze(CDNEndpoints);
