import type { Nullable, Snowflake } from "#types/shared";
import type { APIChannel } from "./channel.js";

// #region Lobby Structures
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface APILobby {
  application_id: Snowflake;
  id: Snowflake;
  linked_channel?: APIChannel;
  members: APILobbyMember[];
  metadata: Nullable<APILobbyMetadata>;
}

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export interface APILobbyMember {
  flags?: number;
  id: Snowflake;
  metadata?: Nullable<APILobbyMemberMetadata>;
}

// #region Lobby Types
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type APILobbyMemberMetadata = APILobbyMetadata;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type APILobbyMetadata = Record<string, string>;

// #region Lobby Enums
/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
