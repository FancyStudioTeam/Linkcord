import type { APILobby, APILobbyMember, APILobbyMemberMetadata, APILobbyMetadata } from "#types/payloads";
import type { Snowflake } from "#types/shared";

// #region Lobby JSON Params
/**
 * https://discord.com/developers/docs/resources/lobby#add-a-member-to-a-lobby
 */
export interface RESTAddMemberToLobbyJSONParams {
  flags?: number;
  metadata?: APILobbyMemberMetadata;
}

/**
 * https://discord.com/developers/docs/resources/lobby#create-lobby
 */
export interface RESTCreateLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: APILobbyMetadata;
}

/**
 * https://discord.com/developers/docs/resources/lobby#modify-lobby
 */
export type RESTModifyLobbyJSONParams = RESTCreateLobbyJSONParams;

/**
 * https://discord.com/developers/docs/resources/lobby#link-channel-to-lobby-json-params
 */
export interface RESTLinkChannelToLobbyJSONParams {
  channel_id?: Snowflake;
}

// #region Lobby Result Types
/**
 * https://discord.com/developers/docs/resources/lobby#add-a-member-to-a-lobby
 */
export type RESTAddMemberToLobbyResult = APILobbyMember;

/**
 * https://discord.com/developers/docs/resources/lobby#create-lobby
 */
export type RESTCreateLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/resources/lobby#delete-lobby
 */
export type RESTDeleteLobbyResult = undefined;

/**
 * https://discord.com/developers/docs/resources/lobby#get-lobby
 */
export type RESTGetLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/resources/lobby#leave-lobby
 */
export type RESTLeaveLobbyResult = undefined;

/**
 * https://discord.com/developers/docs/resources/lobby#link-channel-to-lobby
 */
export type RESTLinkChannelToLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/resources/lobby#modify-lobby
 */
export type RESTModifyLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/resources/lobby#remove-a-member-from-a-lobby
 */
export type RESTRemoveMemberFromLobbyResult = undefined;

/**
 * https://discord.com/developers/docs/resources/lobby#unlink-channel-from-lobby
 */
export type RESTUnlinkChannelFromLobbyResult = APILobby;
