import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-structure
 */
export interface GatewayActivity {
	application_id?: Snowflake;
	assets?: GatewayActivityAssets;
	buttons?: GatewayActivityButton[];
	created_at: number;
	details?: string | null;
	details_url?: string | null;
	emoji?: GatewayActivityEmoji | null;
	flags?: ActivityFlags;
	instance?: boolean;
	name: string;
	party?: GatewayActivityParty;
	secrets?: GatewayActivitySecrets;
	state?: string | null;
	state_url?: string | null;
	status_display_type?: StatusDisplayTypes;
	timestamps?: GatewayActivityTimestamps;
	type: ActivityTypes;
	url?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-assets
 */
export interface GatewayActivityAssets {
	large_image?: string;
	large_text?: string;
	large_url?: string;
	small_image?: string;
	small_text?: string;
	small_url?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-buttons
 */
export interface GatewayActivityButton {
	label: string;
	url: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-emoji
 */
export interface GatewayActivityEmoji {
	name: string;
	id?: Snowflake;
	animated?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-party
 */
export interface GatewayActivityParty {
	id?: Snowflake;
	size?: [number, number];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-secrets
 */
export interface GatewayActivitySecrets {
	join?: string;
	match?: string;
	spectate?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-timestamps
 */
export interface GatewayActivityTimestamps {
	end?: number;
	start?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-flags
 */
export enum ActivityFlags {
	Embedded = 1 << 8,
	Instance = 1 << 0,
	Join = 1 << 1,
	JoinRequest = 1 << 3,
	PartyPrivacyFriends = 1 << 6,
	PartyPrivacyVoiceChannel = 1 << 7,
	Play = 1 << 5,
	Spectate = 1 << 2,
	Sync = 1 << 4,
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-activity-types
 */
export enum ActivityTypes {
	Competing = 5,
	Custom = 4,
	Listening = 2,
	Playing = 0,
	Streaming = 1,
	Watching = 3,
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#activity-object-status-display-types
 */
export enum StatusDisplayTypes {
	Details = 2,
	Name = 0,
	State = 1,
}
