import type { APILobby, APILobbyMember, APILobbyMemberMetadata, APILobbyMetadata } from "#payloads";
import type { Nullable } from "#shared";

/**
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTAddMemberToLobbyJSONParams {
  flags?: number;
  metadata?: Nullable<APILobbyMemberMetadata>;
}

/**
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTCreateLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: Nullable<APILobbyMetadata>;
}

/**
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTLinkChannelToLobbyJSONParams {
  channel_id?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTModifyLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: APILobbyMetadata;
}

/**
 * @see https://discord.com/developers/docs/resources/lobby#add-a-member-to-a-lobby
 */
export type RESTAddMemberToLobby = APILobbyMember;

/**
 * @see https://discord.com/developers/docs/resources/lobby#create-lobby
 */
export type RESTCreateLobby = APILobby;

/**
 * @see https://discord.com/developers/docs/resources/lobby#delete-lobby
 */
export type RESTDeleteLobby = undefined;

/**
 * @see https://discord.com/developers/docs/resources/lobby#get-lobby
 */
export type RESTGetLobby = APILobby;

/**
 * @see https://discord.com/developers/docs/resources/lobby#leave-lobby
 */
export type RESTLeaveLobby = undefined;

/**
 * @see https://discord.com/developers/docs/resources/lobby#link-channel-to-lobby
 */
export type RESTLinkChannelToLobby = APILobby;

/**
 * @see https://discord.com/developers/docs/resources/lobby#modify-lobby
 */
export type RESTModifyLobby = APILobby;

/**
 * @see https://discord.com/developers/docs/resources/lobby#remove-a-member-from-a-lobby
 */
export type RESTRemoveMemberFromLobby = undefined;

/**
 * @see https://discord.com/developers/docs/resources/lobby#unlink-channel-from-lobby
 */
export type RESTUnlinkChannelFromLobby = undefined;
