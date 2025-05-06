import {
  type GatewayEvent,
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
import { type RawData, WebSocket } from "ws";
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

/**
 * @public
 */
export class Shard {
  id: number;
  manager: GatewayManager;
  socket: Nullable<WebSocket> = null;

  constructor(manager: GatewayManager, id: number) {
    this.id = id;
    this.manager = manager;
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
    this.socket.on("open", this._onOpen.bind(this));
    this.socket.on("message", this._onMessage.bind(this));
  }

  /**
   * @internal
   */
  private _onOpen(): void {
    this.identify();
  }

  /**
   * @internal
   */
  private _onMessage(rawData: RawData): void {
    const stringifiedRawData = rawData.toString();
    const message = JSON.parse(stringifiedRawData) as GatewayEvent;

    switch (message.op) {
      case GatewayOpcodes.Hello: {
        const { heartbeat_interval } = message.d;

        this.manager.emit("hello", this.id, heartbeat_interval);

        break;
      }
      default: {
        this.manager.emit("debug", this.id, `Received unhandled message opcode: ${message.op}`);
      }
    }
  }

  connect(): void {
    const { url } = this.manager;

    if (!url) {
      throw new ShardError("The gateway url has not been set yet.", this.id);
    }

    this._initializeSocket(url);
  }

  identify(): void {
    const { connectionProperties, intents, token, totalShards } = this.manager;
    const identifyPayload: GatewayIdentifyPayload = {
      intents,
      properties: connectionProperties,
      shard: [this.id, totalShards],
      token,
    };

    this.send(GatewayOpcodes.Identify, identifyPayload);
  }

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

  get token(): string {
    return this.manager.token;
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
