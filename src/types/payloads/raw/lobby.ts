import type { Nullable, Snowflake } from "#types";

/**
 * =========================
 * = Raw Lobby Structures =
 * ========================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface APILobby {
  application_id: Snowflake;
  id: Snowflake;
  // TODO: Add "APIChannel" type for "linked_channel" property.
  // linked_channel?: APIChannel;
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

/**
 * ===========================
 * = Raw Lobby Utility Types =
 * ===========================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type APILobbyMemberMetadata = APILobbyMetadata;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type APILobbyMetadata = Record<string, string>;
