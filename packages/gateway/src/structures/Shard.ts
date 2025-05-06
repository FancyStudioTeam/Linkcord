import {
  type GatewayHeartbeatPayload,
  type GatewayIdentifyPayload,
  GatewayOpcodes,
  type GatewayPresenceUpdatePayload,
  type GatewayRequestGuildMembersPayload,
  type GatewayRequestSoundboardSoundsPayload,
  type GatewayResumePayload,
  type GatewayVoiceStateUpdatePayload,
  type Nullable,
} from "@fancystudioteam/linkcord-types";
import { WebSocket } from "ws";
import { ShardError } from "#utils";
import type { GatewayManager } from "./GatewayManager.js";

const SENDABLE_OPCODES: AnySendableOpcode[] = [
  GatewayOpcodes.Heartbeat,
  GatewayOpcodes.Identify,
  GatewayOpcodes.PresenceUpdate,
  GatewayOpcodes.RequestGuildMembers,
  GatewayOpcodes.RequestSoundboardSounds,
  GatewayOpcodes.VoiceStateUpdate,
  GatewayOpcodes.Resume,
];

export class Shard {
  id: number;
  manager: GatewayManager;
  socket: Nullable<WebSocket> = null;

  constructor(manager: GatewayManager, id: number) {
    this.id = id;
    this.manager = manager;
  }

  get token(): string {
    return this.manager.token;
  }

  /**
   * Gets the shard's `WebSocket` instance.
   * @returns The shard's `WebSocket` instance.
   */
  getWebSocket(): WebSocket {
    const socket = this.socket;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      throw new ShardError(
        [
          "The shard's socket has not been initialized or opened yet.",
          "Make sure to connect the shard to initialize and open its socket.",
        ].join("\n"),
        this.id,
      );
    }

    return socket;
  }

  /**
   * Sends any sendable opcode to the Discord gateway.
   * @param opcode - The gateway opcode to send.
   * @param payload - The payload related to the opcode to send.
   */
  send<Opcode extends AnySendableOpcode>(opcode: Opcode, payload: SendPayload[Opcode]): void {
    if (!SENDABLE_OPCODES.includes(opcode)) {
      throw new ShardError("Cannot send a non-sendable opcode to the gateway.", this.id);
    }

    const socket = this.getWebSocket();
    const dataToSend = {
      d: payload,
      op: opcode,
    };
    const stringifiedDataToSend = JSON.stringify(dataToSend);

    socket.send(stringifiedDataToSend);
  }
}

interface SendPayload {
  [GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
  [GatewayOpcodes.Identify]: GatewayIdentifyPayload;
  [GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
  [GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
  [GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestSoundboardSoundsPayload;
  [GatewayOpcodes.Resume]: GatewayResumePayload;
  [GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
}

type AnySendableOpcode =
  | GatewayOpcodes.Heartbeat
  | GatewayOpcodes.Identify
  | GatewayOpcodes.PresenceUpdate
  | GatewayOpcodes.RequestGuildMembers
  | GatewayOpcodes.RequestSoundboardSounds
  | GatewayOpcodes.Resume
  | GatewayOpcodes.VoiceStateUpdate;
