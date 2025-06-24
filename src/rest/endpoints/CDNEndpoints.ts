import type { Snowflake } from "#types/index.js";
import { encode } from "../functions/encode.js";

/**
 * @public
 */
export class CDNEndpoints {
  static applicationAssetAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    achievementIcon: string,
  ): string {
    return encode`app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIcon}`;
  }

  static applicationAssetStore(applicationId: Snowflake, assetId: Snowflake): string {
    return encode`app-assets/${applicationId}/store/${assetId}`;
  }

  static applicationAsset(applicationId: Snowflake, assetId: Snowflake): string {
    return encode`app-assets/${applicationId}/${assetId}`;
  }

  static applicationIcon(applicationId: Snowflake, applicationCoverOrIcon: string): string {
    return encode`app-icons/${applicationId}/${applicationCoverOrIcon}`;
  }

  static attachment(channelId: Snowflake, messageId: Snowflake, attachmentName: string): string {
    return encode`attachments/${channelId}/${messageId}/${attachmentName}`;
  }

  static avatarDecorationPreset(userAvatarDecorationAsset: string): string {
    return encode`avatar-decorations/${userAvatarDecorationAsset}`;
  }

  static avatar(userId: Snowflake, userAvatar: string): string {
    return encode`avatars/${userId}/${userAvatar}`;
  }

  static badgeIcon(badgeIcon: string): string {
    return encode`badge-icons/${badgeIcon}`;
  }

  static banner(guildOrUserId: Snowflake, guildOrUserBanner: string): string {
    return encode`banners/${guildOrUserId}/${guildOrUserBanner}`;
  }

  static clanBadge(guildId: Snowflake, clanBadge: string): string {
    return encode`clan-badges/${guildId}/${clanBadge}`;
  }

  static clanBanner(guildId: Snowflake, clanBanner: string): string {
    return encode`clan-banners/${guildId}/${clanBanner}`;
  }

  static discoverySplash(guildId: Snowflake, guildDiscoverySplash: string): string {
    return encode`discovery-splashes/${guildId}/${guildDiscoverySplash}`;
  }

  static embedAvatar(index: number): string {
    return encode`embed/avatars/${index}`;
  }

  static emoji(emojiId: Snowflake): string {
    return encode`emojis/${emojiId}`;
  }

  static guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake, scheduledEventCover: string): string {
    return encode`guilds/${guildId}/scheduled-events/${scheduledEventId}/${scheduledEventCover}`;
  }

  static guildUserAvatar(guildId: Snowflake, userId: Snowflake, userAvatar: string): string {
    return encode`guilds/${guildId}/users/${userId}/avatars/${userAvatar}`;
  }

  static guildUserBanner(guildId: Snowflake, userId: Snowflake, userBanner: string): string {
    return encode`guilds/${guildId}/users/${userId}/banners/${userBanner}`;
  }

  static icon(guildId: Snowflake, guildIcon: string): string {
    return encode`icons/${guildId}/${guildIcon}`;
  }

  static roleIcon(roleId: Snowflake, roleIcon: string): string {
    return encode`role-icons/${roleId}/${roleIcon}`;
  }

  static soundboardSound(soundboardSoundId: Snowflake): string {
    return encode`soundboard-sounds/${soundboardSoundId}`;
  }

  static splash(guildId: Snowflake, guildSplash: string): string {
    return encode`splashes/${guildId}/${guildSplash}`;
  }

  static sticker(stickerId: Snowflake): string {
    return encode`stickers/${stickerId}`;
  }

  static teamIcon(teamId: Snowflake, teamIcon: string): string {
    return encode`team-icons/${teamId}/${teamIcon}`;
  }
}

Object.freeze(CDNEndpoints);
