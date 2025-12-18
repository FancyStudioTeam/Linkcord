/** biome-ignore-all lint/style/useNamingConvention: (x) */

import type { Snowflake } from "#types/index.js";

export function APPLICATION_ASSET_ACHIEVEMENT_ICON_ENDPOINT<
	ApplicationId extends Snowflake,
	AchievementId extends Snowflake,
	AchievementIcon extends string,
>(applicationId: ApplicationId, achievementId: AchievementId, achievementIcon: AchievementIcon) {
	const encodedApplicationId = encodeURIComponent(applicationId);
	const encodedAchievementId = encodeURIComponent(achievementId);
	const encodedAchievementIcon = encodeURIComponent(achievementIcon);

	return `app-assets/${encodedApplicationId}/achievements/${encodedAchievementId}/icons/${encodedAchievementIcon}` as const;
}

export function APPLICATION_ASSET_ENDPOINT<ApplicationId extends Snowflake, ApplicationAsset extends string>(
	applicationId: ApplicationId,
	applicationAsset: ApplicationAsset,
) {
	const encodedApplicationId = encodeURIComponent(applicationId);
	const encodedApplicationAsset = encodeURIComponent(applicationAsset);

	return `app-assets/${encodedApplicationId}/${encodedApplicationAsset}` as const;
}

export function APPLICATION_ASSET_STORE_ASSET_ENDPOINT<ApplicationId extends Snowflake, AssetId extends Snowflake>(
	applicationId: ApplicationId,
	assetId: AssetId,
) {
	const encodedApplicationId = encodeURIComponent(applicationId);
	const encodedAssetId = encodeURIComponent(assetId);

	return `app-assets/${encodedApplicationId}/store/${encodedAssetId}` as const;
}

export function APPLICATION_STORE_STICKER_PACK_BANNER_ENDPOINT<StickerPackBannerAssetId extends Snowflake>(
	stickerPackBannerAssetId: StickerPackBannerAssetId,
) {
	const encodedStickerPackBannerAssetId = encodeURIComponent(stickerPackBannerAssetId);

	return `app-assets/710982414301790216/store/${encodedStickerPackBannerAssetId}` as const;
}

export function APPLICATION_ICON_ENDPOINT<ApplicationId extends Snowflake, EntityImage extends string>(
	applicationId: ApplicationId,
	entityImage: EntityImage,
) {
	const encodedApplicationId = encodeURIComponent(applicationId);
	const encodedEntityImage = encodeURIComponent(entityImage);

	return `app-icons/${encodedApplicationId}/${encodedEntityImage}` as const;
}

export function AVATAR_DECORATION_PRESET_ENDPOINT<AvatarDecorationAsset extends string>(
	avatarDecorationAsset: AvatarDecorationAsset,
) {
	const encodedAvatarDecorationAsset = encodeURIComponent(avatarDecorationAsset);

	return `avatar-decorations-presets/${encodedAvatarDecorationAsset}` as const;
}

export function AVATAR_ENDPOINT<UserId extends Snowflake, UserAvatar extends string>(
	userId: UserId,
	userAvatar: UserAvatar,
) {
	const encodedUserId = encodeURIComponent(userId);
	const encodedUserAvatar = encodeURIComponent(userAvatar);

	return `avatars/${encodedUserId}/${encodedUserAvatar}` as const;
}

export function BANNER_ENDPOINT<EntityId extends Snowflake, EntityBanner extends string>(
	entityId: EntityId,
	entityBanner: EntityBanner,
) {
	const encodedEntityId = encodeURIComponent(entityId);
	const encodedEntityBanner = encodeURIComponent(entityBanner);

	return `banners/${encodedEntityId}/${encodedEntityBanner}` as const;
}

export function DISCOVERY_SPLASH_ENDPOINT<GuildId extends Snowflake, GuildDiscoverySplash extends string>(
	guildId: GuildId,
	guildDiscoverySplash: GuildDiscoverySplash,
) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedGuildDiscoverySplash = encodeURIComponent(guildDiscoverySplash);

	return `discovery-splashes/${encodedGuildId}/${encodedGuildDiscoverySplash}` as const;
}

export function EMBED_AVATAR_ENDPOINT<Index extends number>(index: Index) {
	const encodedIndex = encodeURIComponent(index);

	return `embed/avatars/${encodedIndex}` as const;
}

export function EMOJI_ENDPOINT<EmojiId extends Snowflake>(emojiId: EmojiId) {
	const encodedEmojiId = encodeURIComponent(emojiId);

	return `emojis/${encodedEmojiId}` as const;
}

export function GUILD_SCHEDULED_EVENT_COVER_ENDPOINT<
	ScheduledEventId extends Snowflake,
	ScheduledEventImage extends string,
>(scheduledEventId: ScheduledEventId, scheduledEventImage: ScheduledEventImage) {
	const encodedScheduledEventId = encodeURIComponent(scheduledEventId);
	const encodedScheduledEventImage = encodeURIComponent(scheduledEventImage);

	return `guild-events/${encodedScheduledEventId}/${encodedScheduledEventImage}` as const;
}

export function GUILD_TAG_BADGE_ENDPOINT<GuildId extends Snowflake, GuildBadge extends string>(
	guildId: GuildId,
	guildBadge: GuildBadge,
) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedGuildBadge = encodeURIComponent(guildBadge);

	return `guild-tag-badges/${encodedGuildId}/${encodedGuildBadge}` as const;
}

export function GUILD_USER_AVATAR_ENDPOINT<
	GuildId extends Snowflake,
	UserId extends Snowflake,
	UserAvatar extends string,
>(guildId: GuildId, userId: UserId, userAvatar: UserAvatar) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedUserId = encodeURIComponent(userId);
	const encodedUserAvatar = encodeURIComponent(userAvatar);

	return `guilds/${encodedGuildId}/users/${encodedUserId}/avatars/${encodedUserAvatar}` as const;
}

export function GUILD_USER_BANNER_ENDPOINT<
	GuildId extends Snowflake,
	UserId extends Snowflake,
	UserBanner extends string,
>(guildId: GuildId, userId: UserId, userBanner: UserBanner) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedUserId = encodeURIComponent(userId);
	const encodedUserBanner = encodeURIComponent(userBanner);

	return `guilds/${encodedGuildId}/users/${encodedUserId}/banners/${encodedUserBanner}` as const;
}

export function ICON_ENDPOINT<GuildId extends Snowflake, GuildIcon extends string>(
	guildId: GuildId,
	guildIcon: GuildIcon,
) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedGuildIcon = encodeURIComponent(guildIcon);

	return `icons/${encodedGuildId}/${encodedGuildIcon}` as const;
}

export function ROLE_ICON_ENDPOINT<RoleId extends Snowflake, RoleIcon extends string>(
	roleId: RoleId,
	roleIcon: RoleIcon,
) {
	const encodedRoleId = encodeURIComponent(roleId);
	const encodedRoleIcon = encodeURIComponent(roleIcon);

	return `role-icons/${encodedRoleId}/${encodedRoleIcon}` as const;
}

export function SOUNDBOARD_SOUND_ENDPOINT<SoundboardSoundId extends Snowflake>(soundboardSoundId: SoundboardSoundId) {
	const encodedSoundboardSoundId = encodeURIComponent(soundboardSoundId);

	return `soundboard-sounds/${encodedSoundboardSoundId}` as const;
}

export function SPLASH_ENDPOINT<GuildId extends Snowflake, GuildSplash extends string>(
	guildId: GuildId,
	guildSplash: GuildSplash,
) {
	const encodedGuildId = encodeURIComponent(guildId);
	const encodedGuildSplash = encodeURIComponent(guildSplash);

	return `splashes/${encodedGuildId}/${encodedGuildSplash}` as const;
}

export function STICKER_ENDPOINT<StickerId extends Snowflake>(stickerId: StickerId) {
	const encodedStickerId = encodeURIComponent(stickerId);

	return `stickers/${encodedStickerId}` as const;
}

export function TEAM_ICON_ENDPOINT<TeamId extends Snowflake, TeamIcon extends string>(
	teamId: TeamId,
	teamIcon: TeamIcon,
) {
	const encodedTeamId = encodeURIComponent(teamId);
	const encodedTeamIcon = encodeURIComponent(teamIcon);

	return `team-icons/${encodedTeamId}/${encodedTeamIcon}` as const;
}
