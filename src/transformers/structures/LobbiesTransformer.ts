import type { Client } from "#client";
import type { RESTManager } from "#rest";
import type { APILobby, APILobbyMember, Lobby, LobbyMember } from "#types";

export class LobbiesTransformer {
  protected readonly _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  /**
   * Gets the REST manager instance from the client.
   *
   * @returns The REST manager instance.
   */
  _getRESTManager(): RESTManager {
    const { _client } = this;
    const { rest } = _client;

    return rest;
  }

  /**
   * Transforms a raw lobby member object into a parsed lobby member object.
   *
   * @param rawLobbyMember - The raw lobby member object to transform.
   *
   * @returns The parsed lobby member object.
   */
  rawLobbyMemberToParsed(rawLobbyMember: RawLobbyMember): LobbyMember {
    const { flags, id, metadata } = rawLobbyMember;
    const lobbyMember: LobbyMember = {
      flags,
      id,
      metadata: metadata ?? {},
    };

    return lobbyMember;
  }

  /**
   * Transforms a raw lobby object into a parsed lobby object.
   *
   * @param rawLobby - The raw lobby object to transform.
   *
   * @returns The parsed lobby object.
   */
  rawLobbyToParsed(rawLobby: RawLobby): Lobby {
    const { application_id, id, members, metadata } = rawLobby;
    const parsedLobbyMembers = members.map((rawLobbyMember) => this.rawLobbyMemberToParsed(rawLobbyMember));
    const lobby: Lobby = {
      applicationId: application_id,
      id,
      members: parsedLobbyMembers,
      metadata: metadata ?? {},
    };

    return lobby;
  }
}

type RawLobby = APILobby;
type RawLobbyMember = APILobbyMember;
