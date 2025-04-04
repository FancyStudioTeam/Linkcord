import type { Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface APILobby {
  application_id: Snowflake;
  id: Snowflake;
  // TODO: Add "APIChannel" type
  // linked_channel?: APIChannel;
  members: APILobbyMember[];
  metadata: Nullable<APILobbyMetadata>;
}

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export interface APILobbyMember {
  flags?: LobbyMemberFlags;
  id: Snowflake;
  metadata?: Nullable<APILobbyMemberMetadata>;
}

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type APILobbyMemberMetadata = Record<string, string>;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type APILobbyMetadata = Record<string, string>;

/**
 * https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
