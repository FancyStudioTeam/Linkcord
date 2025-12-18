/** biome-ignore-all lint/style/useNamingConvention: (x) */

import type { Snowflake } from "#types/index.js";

export function APPLICATION_COMMANDS_ENDPOINT<ApplicationId extends Snowflake>(applicationId: ApplicationId) {
	const encodedApplicationId = encodeURIComponent(applicationId);

	return `applications/${encodedApplicationId}/commands` as const;
}

export function CHANNEL_MESSAGES_ENDPOINT<ChannelId extends Snowflake>(channelId: ChannelId) {
	const encodedChannelId = encodeURIComponent(channelId);

	return `channels/${encodedChannelId}/messages` as const;
}

export function GATEWAY_BOT_ENDPOINT() {
	return "gateway/bot" as const;
}

export function GATEWAY_ENDPOINT() {
	return "gateway" as const;
}

export function VOICE_REGIONS_ENDPOINT() {
	return "voice/regions" as const;
}
