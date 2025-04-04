import type { Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-structure
 */
export interface GatewayActivity {
  application_id?: Snowflake;
  assets?: GatewayActivityAssets;
  buttons?: GatewayActivityButton[];
  created_at: number;
  details?: Nullable<string>;
  emoji?: Nullable<GatewayActivityEmoji>;
  flags?: ActivityFlags;
  instance?: boolean;
  name: string;
  party?: GatewayActivityParty;
  secrets?: GatewayActivitySecrets;
  state?: Nullable<string>;
  timestamps: GatewayActivityTimestamps;
  type: ActivityTypes;
  url?: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-assets
 */
export interface GatewayActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-buttons
 */
export interface GatewayActivityButton {
  label: string;
  url: string;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-emoji
 */
export interface GatewayActivityEmoji {
  name: string;
  id?: Snowflake;
  animated?: boolean;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-party
 */
export interface GatewayActivityParty {
  id?: Snowflake;
  size?: [number, number];
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-secrets
 */
export interface GatewayActivitySecrets {
  join?: string;
  match?: string;
  spectate?: string;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-timestamps
 */
export interface GatewayActivityTimestamps {
  end?: number;
  start?: number;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-flags
 */
export enum ActivityFlags {
  Embedded = 1 << 8,
  Instance = 1 << 0,
  Join = 1 << 1,
  JoinRequest = 1 << 3,
  PartyPricacyVoiceChannel = 1 << 7,
  PartyPrivacyFriends = 1 << 6,
  Play = 1 << 5,
  Spectate = 1 << 2,
  Sync = 1 << 4,
}

/**
 * https://discord.com/developers/docs/events/gateway-events#activity-object-activity-types
 */
export enum ActivityTypes {
  Competing = 5,
  Custom = 4,
  Listening = 2,
  Playing = 0,
  Streaming = 1,
  Watching = 3,
}
