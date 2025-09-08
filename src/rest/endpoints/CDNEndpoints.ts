import type { Snowflake } from "#types/index.js";
import { encode } from "../functions/encode.js";

function applicationAssetAchievementIcon(
	applicationId: Snowflake,
	achievementId: Snowflake,
	achievementIcon: string,
): string {
	return encode`app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIcon}`;
}

function applicationAssetStore(applicationId: Snowflake, assetId: Snowflake): string {
	return encode`app-assets/${applicationId}/store/${assetId}`;
}

function applicationAsset(applicationId: Snowflake, assetId: Snowflake): string {
	return encode`app-assets/${applicationId}/${assetId}`;
}

function applicationIcon(applicationId: Snowflake, applicationCoverOrIcon: string): string {
	return encode`app-icons/${applicationId}/${applicationCoverOrIcon}`;
}

function attachment(channelId: Snowflake, messageId: Snowflake, attachmentName: string): string {
	return encode`attachments/${channelId}/${messageId}/${attachmentName}`;
}

function avatarDecorationPreset(userAvatarDecorationAsset: string): string {
	return encode`avatar-decorations/${userAvatarDecorationAsset}`;
}

function avatar(userId: Snowflake, userAvatar: string): string {
	return encode`avatars/${userId}/${userAvatar}`;
}

function badgeIcon(badgeIcon: string): string {
	return encode`badge-icons/${badgeIcon}`;
}

function banner(guildOrUserId: Snowflake, guildOrUserBanner: string): string {
	return encode`banners/${guildOrUserId}/${guildOrUserBanner}`;
}

function clanBadge(guildId: Snowflake, clanBadge: string): string {
	return encode`clan-badges/${guildId}/${clanBadge}`;
}

function clanBanner(guildId: Snowflake, clanBanner: string): string {
	return encode`clan-banners/${guildId}/${clanBanner}`;
}

function discoverySplash(guildId: Snowflake, guildDiscoverySplash: string): string {
	return encode`discovery-splashes/${guildId}/${guildDiscoverySplash}`;
}

function embedAvatar(index: number): string {
	return encode`embed/avatars/${index}`;
}

function emoji(emojiId: Snowflake): string {
	return encode`emojis/${emojiId}`;
}

function guildScheduledEvent(guildId: Snowflake, scheduledEventId: Snowflake, scheduledEventCover: string): string {
	return encode`guilds/${guildId}/scheduled-events/${scheduledEventId}/${scheduledEventCover}`;
}

function guildUserAvatar(guildId: Snowflake, userId: Snowflake, userAvatar: string): string {
	return encode`guilds/${guildId}/users/${userId}/avatars/${userAvatar}`;
}

function guildUserBanner(guildId: Snowflake, userId: Snowflake, userBanner: string): string {
	return encode`guilds/${guildId}/users/${userId}/banners/${userBanner}`;
}

function icon(guildId: Snowflake, guildIcon: string): string {
	return encode`icons/${guildId}/${guildIcon}`;
}

function roleIcon(roleId: Snowflake, roleIcon: string): string {
	return encode`role-icons/${roleId}/${roleIcon}`;
}

function soundboardSound(soundboardSoundId: Snowflake): string {
	return encode`soundboard-sounds/${soundboardSoundId}`;
}

function splash(guildId: Snowflake, guildSplash: string): string {
	return encode`splashes/${guildId}/${guildSplash}`;
}

function sticker(stickerId: Snowflake): string {
	return encode`stickers/${stickerId}`;
}

function teamIcon(teamId: Snowflake, teamIcon: string): string {
	return encode`team-icons/${teamId}/${teamIcon}`;
}

/**
 * Endpoints for Discord assets.
 *
 * @public
 */
export const CDNEndpoints = Object.freeze({
	applicationAsset,
	applicationAssetAchievementIcon,
	applicationAssetStore,
	applicationIcon,
	attachment,
	avatar,
	avatarDecorationPreset,
	badgeIcon,
	banner,
	clanBadge,
	clanBanner,
	discoverySplash,
	embedAvatar,
	emoji,
	guildScheduledEvent,
	guildUserAvatar,
	guildUserBanner,
	icon,
	roleIcon,
	soundboardSound,
	splash,
	sticker,
	teamIcon,
});
