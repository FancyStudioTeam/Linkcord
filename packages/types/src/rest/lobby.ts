import type { APILobby, APILobbyMember, APILobbyMemberMetadata, APILobbyMetadata } from "../payloads/lobby.js";
import type { Nullable } from "../shared/custom.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTAddMemberToLobbyJSONParams {
  flags?: number;
  metadata?: Nullable<APILobbyMemberMetadata>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTCreateLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: Nullable<APILobbyMetadata>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTLinkChannelToLobbyJSONParams {
  channel_id?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#json-params
 */
export interface RESTModifyLobbyJSONParams {
  idle_timeout_seconds?: number;
  members?: APILobbyMember[];
  metadata?: APILobbyMetadata;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#add-a-member-to-a-lobby
 */
export type RESTAddMemberToLobby = APILobbyMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#create-lobby
 */
export type RESTCreateLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#delete-lobby
 */
export type RESTDeleteLobby = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#get-lobby
 */
export type RESTGetLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#leave-lobby
 */
export type RESTLeaveLobby = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#link-channel-to-lobby
 */
export type RESTLinkChannelToLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#modify-lobby
 */
export type RESTModifyLobby = APILobby;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#remove-a-member-from-a-lobby
 */
export type RESTRemoveMemberFromLobby = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/lobby#unlink-channel-from-lobby
 */
export type RESTUnlinkChannelFromLobby = undefined;
