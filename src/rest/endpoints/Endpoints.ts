/**
 * biome-ignore-all lint/style/useNamingConvention: These functions
 * intentionally use upper snake case because they represent Discord API
 * endpoints, not conventional camel case functions.
 */

import type { Snowflake } from '#types/index.js';

export function APPLICATION_COMMANDS_ENDPOINT<ApplicationId extends Snowflake>(applicationId: ApplicationId) {
	return `applications/${encodeURIComponent(applicationId)}/commands` as const;
}

export function CHANNEL_MESSAGES_ENDPOINT<ChannelId extends Snowflake>(channelId: ChannelId) {
	return `channels/${encodeURIComponent(channelId)}/messages` as const;
}

export function GATEWAY_BOT_ENDPOINT() {
	return 'gateway/bot' as const;
}

export function GATEWAY_ENDPOINT() {
	return 'gateway' as const;
}

export function GUILD_MEMBER_ROLE<GuildId extends Snowflake, MemberId extends Snowflake, RoleId extends Snowflake>(
	guildId: GuildId,
	memberId: MemberId,
	roleId: RoleId,
) {
	return `guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(memberId)}/roles/${encodeURIComponent(roleId)}` as const;
}

export function INTERACTION_CALLBACK<InteractionId extends Snowflake, InteractionToken extends string>(
	interactionId: InteractionId,
	interactionToken: InteractionToken,
) {
	return `interactions/${encodeURIComponent(interactionId)}/${encodeURIComponent(interactionToken)}/callback` as const;
}

export function VOICE_REGIONS_ENDPOINT() {
	return 'voice/regions' as const;
}
