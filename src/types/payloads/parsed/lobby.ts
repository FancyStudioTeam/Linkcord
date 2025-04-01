import type { Snowflake } from "#types";

/**
 * ===========================
 * = Parsed Lobby Structures =
 * ===========================
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
 * ==============================
 * = Parsed Lobby Utility Types =
 * ==============================
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
 * ====================================================================
 * = Lobby Enums. These are shared between Raw and Parsed Structures. =
 * ====================================================================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
