import type { Snowflake } from "#types";

/**
 * =============================================================================
 * = Parsed Payloads - Represent the transformed data from the "Raw Payloads". =
 * =============================================================================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface Lobby {
  applicationId: Snowflake;
  id: Snowflake;
  // TODO: Add "Channel" type for "linkedChannel" property.
  // linkedChannel?: Channel;
  members: LobbyMember[];
  metadata: LobbyMetadata;
}

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export interface LobbyMember {
  flags?: number;
  id: Snowflake;
  metadata: LobbyMemberMetadata;
}

/**
 * =============================================================
 * = Utility Types - Used to share types within some payloads. =
 * =============================================================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type LobbyMemberMetadata = LobbyMetadata;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type LobbyMetadata = Record<string, string>;

/**
 * ====================================================
 * = Enums - Used to define a set of fixed constants. =
 * ====================================================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
