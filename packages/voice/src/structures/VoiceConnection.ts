import { type Nullable, VoiceOpcodes } from "@fancystudioteam/linkcord-types";
import { WebSocket } from "ws";
import { VoiceConnectionError } from "#utils";
import type { VoiceManager } from "./VoiceManager.js";

const SENDABLE_VOICE_OPCODES = [
  VoiceOpcodes.DaveMLSCommitWelcome,
  VoiceOpcodes.DaveMLSInvalidCommitWelcome,
  VoiceOpcodes.DaveMLSKeyPackage,
  VoiceOpcodes.DaveTransitionReady,
  VoiceOpcodes.Heartbeat,
  VoiceOpcodes.Identify,
  VoiceOpcodes.Resume,
  VoiceOpcodes.SelectProtocol,
  VoiceOpcodes.Speaking,
] as const;

/**
 * @public
 */
export class VoiceConnection {
  readonly endpoint: URL;
  readonly manager: VoiceManager;
  readonly token: string;

  socket: Nullable<WebSocket> = null;

  constructor(manager: VoiceManager, endpoint: string, token: string) {
    this.endpoint = new URL(`wss://${endpoint}`);
    this.manager = manager;
    this.token = token;

    this._initializeSocket(this.endpoint);
  }

  /**
   * @internal
   */
  private _initializeSocket(url: URL): void {
    const { searchParams } = url;
    const { version } = this.manager;

    searchParams.set("v", version.toString());
    searchParams.set("encoding", "json");

    const socket = new WebSocket(url);

    this.socket = socket;
  }

  getWebSocket(): WebSocket {
    const socket = this.socket;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      const errorMessages = [
        "The voice connection's socket has not been initialized or opened yet.",
        "Make sure to create a voice connection to initialize and open its socket.",
      ];

      throw new VoiceConnectionError(errorMessages.join("\n"));
    }

    return socket;
  }

  /*private sendPayload<Opcode extends AnySendableVoiceOpcode>(opcode: Opcode, payload: SendPayload[Opcode]): void {
    if (!SENDABLE_VOICE_OPCODES.includes(opcode)) {
      throw new VoiceConnectionError("Cannot send a non-sendable voice opcode to the gateway.");
    }

    const socket = this.getWebSocket();
    const dataToSend = {
      d: payload,
      op: opcode,
    };
    const stringifiedDataToSend = JSON.stringify(dataToSend);

    socket.send(stringifiedDataToSend);
  }*/
}

export type AnySendableVoiceOpcode = (typeof SENDABLE_VOICE_OPCODES)[number];
