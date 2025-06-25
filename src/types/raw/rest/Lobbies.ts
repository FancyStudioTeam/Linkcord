import type { APILobby, APILobbyMember } from "../payloads/Lobbies.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTPatchLobbyChannelLinkingJSONParams {
  channel_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTPatchLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: Record<string, string> | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTPostLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: Record<string, string> | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTPutLobbyMemberJSONParams {
  flags?: number;
  metadata?: Record<string, string> | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#delete-lobby
 */
export type RESTDeleteLobby = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#remove-a-member-from-a-lobby
 */
export type RESTDeleteLobbyMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#leave-lobby
 */
export type RESTDeleteLobbyMemberCurrent = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#get-lobby
 */
export type RESTGetLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#modify-lobby
 */
export type RESTPatchLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#link-channel-to-lobby
 */
export type RESTPatchLobbyChannelLinking = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#unlink-channel-from-lobby
 */
export type RESTPatchLobbyChannelUnlinking = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#create-lobby
 */
export type RESTPostLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#add-a-member-to-a-lobby
 */
export type RESTPutLobbyMember = APILobbyMember;
