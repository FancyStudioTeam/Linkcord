import type { Snowflake } from "../shared/discord.js";
import type { APIChannel } from "./channel.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export interface APILobby {
  application_id: Snowflake;
  id: Snowflake;
  linked_channel?: APIChannel;
  members: APILobbyMember[];
  metadata: APILobbyMetadata | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export interface APILobbyMember {
  flags?: LobbyMemberFlags;
  id: Snowflake;
  metadata?: APILobbyMemberMetadata | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export type APILobbyMemberMetadata = APILobbyMetadata;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-object-lobby-structure
 */
export type APILobbyMetadata = Record<string, string>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
