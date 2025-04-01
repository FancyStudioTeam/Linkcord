import type { Nullable, Snowflake } from "#types";

/**
 * ====================================================================
 * = Raw Payloads - Represent the received data from the Discord API. =
 * ====================================================================
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
 * =============================================================
 * = Utility Types - Used to share types within some payloads. =
 * =============================================================
 */

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type APILobbyMemberMetadata = APILobbyMetadata;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type APILobbyMetadata = Record<string, string>;
