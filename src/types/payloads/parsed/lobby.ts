import type { Snowflake } from "#types";

// #region Lobby Structures
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface Lobby {
  applicationId: Snowflake;
  id: Snowflake;
  // linkedChannel?: Channel;
  members: LobbyMember[];
  metadata: LobbyMetadata;
}

export interface LobbyMember {
  flags?: number;
  id: Snowflake;
  metadata: LobbyMemberMetadata;
}

// #region Lobby Types
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type LobbyMemberMetadata = LobbyMetadata;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type LobbyMetadata = Record<string, string>;

// #region Lobby Enums
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
