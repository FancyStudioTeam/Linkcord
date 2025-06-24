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
  metadata: Record<string, string> | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-structure
 */
export interface APILobbyMember {
  flags?: LobbyMemberFlags;
  id: Snowflake;
  metadata?: Record<string, string> | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#lobby-member-object-lobby-member-flags
 */
export enum LobbyMemberFlags {
  CanLinkLobby = 1 << 0,
}
