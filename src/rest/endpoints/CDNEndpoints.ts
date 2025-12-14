/** biome-ignore-all lint/style/useNamingConvention: (x) */

import type { Snowflake } from "#types/index.js";

export function APPLICATION_ASSET_ACHIEVEMENT_ICON_ENDPOINT<
	ApplicationId extends Snowflake,
	AchievementId extends Snowflake,
	AchievementIcon extends string,
>(applicationId: ApplicationId, achievementId: AchievementId, achievementIcon: AchievementIcon) {
	return `app-assets/${encodeURIComponent(applicationId)}/achievements/${encodeURIComponent(achievementId)}/icons/${encodeURIComponent(achievementIcon)}` as const;
}

export function APPLICATION_ASSET_ENDPOINT<ApplicationId extends Snowflake, ApplicationAsset extends string>(
	applicationId: ApplicationId,
	applicationAsset: ApplicationAsset,
) {
	return `app-assets/${encodeURIComponent(applicationId)}/${encodeURIComponent(applicationAsset)}` as const;
}

export function APPLICATION_STORE_STICKER_PACK_BANNER_ENDPOINT<StickerPackBannerAssetId extends Snowflake>(
	stickerPackBannerAssetId: StickerPackBannerAssetId,
) {
	return `app-assets/710982414301790216/store/${encodeURIComponent(stickerPackBannerAssetId)}` as const;
}

export function APPLICATION_ASSET_STORE_ASSET_ENDPOINT<ApplicationId extends Snowflake, AssetId extends Snowflake>(
	applicationId: ApplicationId,
	assetId: AssetId,
) {
	return `app-assets/${encodeURIComponent(applicationId)}/store/${encodeURIComponent(assetId)}` as const;
}

export function APPLICATION_ICON_ENDPOINT<ApplicationId extends Snowflake, EntityImage extends string>(
	applicationId: ApplicationId,
	entityImage: EntityImage,
) {
	return `app-icons/${encodeURIComponent(applicationId)}/${encodeURIComponent(entityImage)}` as const;
}

export function AVATAR_DECORATION_PRESET_ENDPOINT<AvatarDecorationAsset extends string>(
	avatarDecorationAsset: AvatarDecorationAsset,
) {
	return `avatar-decorations-presets/${encodeURIComponent(avatarDecorationAsset)}` as const;
}

export function AVATAR_ENDPOINT<UserId extends Snowflake, UserAvatar extends string>(
	userId: UserId,
	userAvatar: UserAvatar,
) {
	return `avatars/${encodeURIComponent(userId)}/${encodeURIComponent(userAvatar)}` as const;
}

export function BANNER_ENDPOINT<EntityId extends Snowflake, EntityBanner extends string>(
	entityId: EntityId,
	entityBanner: EntityBanner,
) {
	return `banners/${encodeURIComponent(entityId)}/${encodeURIComponent(entityBanner)}` as const;
}

export function DISCOVERY_SPLASH_ENDPOINT<GuildId extends Snowflake, GuildDiscoverySplash extends string>(
	guildId: GuildId,
	guildDiscoverySplash: GuildDiscoverySplash,
) {
	return `discovery-splashes/${encodeURIComponent(guildId)}/${encodeURIComponent(guildDiscoverySplash)}` as const;
}

export function EMBED_AVATAR_ENDPOINT<Index extends number>(index: Index) {
	return `embed/avatars/${encodeURIComponent(index)}` as const;
}

export function EMOJI_ENDPOINT<EmojiId extends Snowflake>(emojiId: EmojiId) {
	return `emojis/${encodeURIComponent(emojiId)}` as const;
}

export function GUILD_SCHEDULED_EVENT_COVER_ENDPOINT<
	ScheduledEventId extends Snowflake,
	ScheduledEventImage extends string,
>(scheduledEventId: ScheduledEventId, scheduledEventImage: ScheduledEventImage) {
	return `guild-events/${encodeURIComponent(scheduledEventId)}/${encodeURIComponent(scheduledEventImage)}` as const;
}

export function GUILD_TAG_BADGE_ENDPOINT<GuildId extends Snowflake, GuildBadge extends string>(
	guildId: GuildId,
	guildBadge: GuildBadge,
) {
	return `guild-tag-badges/${encodeURIComponent(guildId)}/${encodeURIComponent(guildBadge)}` as const;
}

export function GUILD_USER_AVATAR_ENDPOINT<
	GuildId extends Snowflake,
	UserId extends Snowflake,
	UserAvatar extends string,
>(guildId: GuildId, userId: UserId, userAvatar: UserAvatar) {
	return `guilds/${encodeURIComponent(guildId)}/users/${encodeURIComponent(userId)}/avatars/${encodeURIComponent(userAvatar)}` as const;
}

export function GUILD_USER_BANNER_ENDPOINT<
	GuildId extends Snowflake,
	UserId extends Snowflake,
	UserBanner extends string,
>(guildId: GuildId, userId: UserId, userBanner: UserBanner) {
	return `guilds/${encodeURIComponent(guildId)}/users/${encodeURIComponent(userId)}/banners/${encodeURIComponent(userBanner)}` as const;
}

export function ICON_ENDPOINT<GuildId extends Snowflake, GuildIcon extends string>(
	guildId: GuildId,
	guildIcon: GuildIcon,
) {
	return `icons/${encodeURIComponent(guildId)}/${encodeURIComponent(guildIcon)}` as const;
}

export function ROLE_ICON_ENDPOINT<RoleId extends Snowflake, RoleIcon extends string>(
	roleId: RoleId,
	roleIcon: RoleIcon,
) {
	return `role-icons/${encodeURIComponent(roleId)}/${encodeURIComponent(roleIcon)}` as const;
}

export function SOUNDBOARD_SOUND_ENDPOINT<SoundboardSoundId extends Snowflake>(soundboardSoundId: SoundboardSoundId) {
	return `soundboard-sounds/${encodeURIComponent(soundboardSoundId)}` as const;
}

export function SPLASH_ENDPOINT<GuildId extends Snowflake, GuildSplash extends string>(
	guildId: GuildId,
	guildSplash: GuildSplash,
) {
	return `splashes/${encodeURIComponent(guildId)}/${encodeURIComponent(guildSplash)}` as const;
}

export function STICKER_ENDPOINT<StickerId extends Snowflake>(stickerId: StickerId) {
	return `stickers/${encodeURIComponent(stickerId)}` as const;
}

export function TEAM_ICON_ENDPOINT<TeamId extends Snowflake, TeamIcon extends string>(
	teamId: TeamId,
	teamIcon: TeamIcon,
) {
	return `team-icons/${encodeURIComponent(teamId)}/${encodeURIComponent(teamIcon)}` as const;
}
