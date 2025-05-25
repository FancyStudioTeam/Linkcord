import {
  GatewayCloseEventCodes,
  GatewayDispatchEvents,
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
import { GatewayShardError } from "../utils/index.js";
import type { GatewayManager } from "./GatewayManager.js";

const RECONNECTABLE_CLOSE_CODES: GatewayCloseEventCodes[] = [
  GatewayCloseEventCodes.UnknownError,
  GatewayCloseEventCodes.UnknownOpcode,
  GatewayCloseEventCodes.DecodeError,
  GatewayCloseEventCodes.NotAuthenticated,
  GatewayCloseEventCodes.AlreadyAuthenticated,
  GatewayCloseEventCodes.InvalidSequence,
  GatewayCloseEventCodes.RateLimited,
  GatewayCloseEventCodes.SessionTimedOut,
];
const SENDABLE_OPCODES = [
  GatewayOpcodes.Heartbeat,
  GatewayOpcodes.Identify,
  GatewayOpcodes.PresenceUpdate,
  GatewayOpcodes.RequestGuildMembers,
  GatewayOpcodes.RequestSoundboardSounds,
  GatewayOpcodes.VoiceStateUpdate,
  GatewayOpcodes.Resume,
] as const;

/**
 * @public
 */
export class GatewayShard {
  private _sequence: Nullable<number> = null;
  private _voiceServerUpdates: Map<string, VoiceServerUpdate> = new Map();

  readonly manager: GatewayManager;

  heartbeatInterval: Nullable<number> = null;
  id: number;
  socket: Nullable<WebSocket> = null;

  constructor(manager: GatewayManager, id: number) {
    this.id = id;
    this.manager = manager;
  }

  /**
   * @internal
   */
  private _heartbeat(): void {
    const { _sequence } = this;
    const heartbeatPayload: GatewayHeartbeatPayload = _sequence;

    this.sendPayload(GatewayOpcodes.Heartbeat, heartbeatPayload);
  }

  /**
   * @internal
   */
  private _identify(): void {
    const { connectionProperties, intents, shardCount, token } = this.manager;
    const identifyPayload: GatewayIdentifyPayload = {
      intents,
      properties: connectionProperties,
      shard: [this.id, shardCount],
      token,
    };

    this.sendPayload(GatewayOpcodes.Identify, identifyPayload);
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
    this.socket.on("close", this._onClose.bind(this));
  }

  /**
   * @internal
   */
  private _onClose(code: number, reason: string): void {
    const stringifiedReason = reason.toString();
    const isReconnectable = RECONNECTABLE_CLOSE_CODES.includes(code);

    this.manager.emit("debug", `Received close event with code "${code}" and reason "${reason}".`);
    this.manager.emit("close", code, stringifiedReason, isReconnectable);
  }

  /**
   * @internal
   */
  private _onMessage(rawData: RawData): void {
    const stringifiedRawData = rawData.toString();
    const message = JSON.parse(stringifiedRawData) as GatewayEvent;

    this.manager.emit("packet", message, this.id);

    switch (message.op) {
      case GatewayOpcodes.Hello: {
        const { heartbeat_interval } = message.d;

        this.heartbeatInterval = heartbeat_interval;
        this.manager.emit("hello", heartbeat_interval, this.id);

        setInterval(this._heartbeat.bind(this), heartbeat_interval);

        break;
      }
      case GatewayOpcodes.Dispatch: {
        const { s } = message;

        this._sequence = s;

        switch (message.t) {
          case GatewayDispatchEvents.VoiceServerUpdate: {
            const { endpoint, guild_id, token } = message.d;
            const pendingVoiceServerUpdate = this._voiceServerUpdates.get(guild_id);

            if (pendingVoiceServerUpdate) {
              const { data, resolve } = pendingVoiceServerUpdate;

              if (!endpoint) {
                throw new GatewayShardError("The voice server update endpoint is missing.", this.id);
              }

              data.endpoint = endpoint;
              data.guildId = guild_id;
              data.token = token;

              resolve(data);
              this._voiceServerUpdates.delete(guild_id);
            }

            break;
          }
          case GatewayDispatchEvents.VoiceStateUpdate: {
            const { guild_id, session_id, user_id } = message.d;
            const pendingVoiceServerUpdate = this._voiceServerUpdates.get(guild_id ?? "");

            if (pendingVoiceServerUpdate) {
              const { data } = pendingVoiceServerUpdate;

              data.sessionId = session_id;
              data.userId = user_id;

              if (guild_id) {
                data.guildId = guild_id;
              }
            }

            break;
          }
          default: {
            break;
          }
        }

        break;
      }
      default: {
        this.manager.emit("debug", `Received unhandled message opcode: ${message.op}`, this.id);
      }
    }
  }

  /**
   * @internal
   */
  private _onOpen(): void {
    this._identify();
  }

  connect(): void {
    const { url } = this.manager;

    if (!url) {
      throw new GatewayShardError("The gateway url has not been set yet.", this.id);
    }

    this._initializeSocket(url);
  }

  getWebSocket(): WebSocket {
    const socket = this.socket;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      const errorMessages = [
        "The shard's socket has not been initialized or opened yet.",
        "Make sure to connect the shard to initialize and open its socket.",
      ];

      throw new GatewayShardError(errorMessages.join("\n"), this.id);
    }

    return socket;
  }

  joinVoiceChannel(
    channelId: string,
    guildId: string,
    options: JoinVoiceChannelOptions = {
      selfDeaf: true,
      selfMute: false,
    },
  ): Promise<VoiceServerUpdateData> {
    const voiceStateUpdatePayload: GatewayVoiceStateUpdatePayload = {
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      channel_id: channelId,
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      guild_id: guildId,
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      self_deaf: options.selfDeaf ?? true,
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      self_mute: options.selfMute ?? false,
    };

    this.sendPayload(GatewayOpcodes.VoiceStateUpdate, voiceStateUpdatePayload);

    const promise = new Promise<VoiceServerUpdateData>((resolve, reject) =>
      this._voiceServerUpdates.set(guildId, {
        data: {
          endpoint: "",
          guildId,
          sessionId: "",
          token: "",
          userId: "",
        },
        reject,
        resolve: (value) => resolve(value),
      }),
    );

    return promise;
  }

  sendPayload<Opcode extends AnySendableOpcode>(opcode: Opcode, payload: SendPayloadData[Opcode]): void {
    if (!SENDABLE_OPCODES.includes(opcode)) {
      throw new GatewayShardError("Cannot send a non-sendable opcode to the gateway.", this.id);
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

/**
 * @public
 */
export interface JoinVoiceChannelOptions {
  selfDeaf?: boolean;
  selfMute?: boolean;
}

/**
 * @public
 */
export interface SendPayloadData {
  [GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
  [GatewayOpcodes.Identify]: GatewayIdentifyPayload;
  [GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
  [GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
  [GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestSoundboardSoundsPayload;
  [GatewayOpcodes.Resume]: GatewayResumePayload;
  [GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
}

/**
 * @public
 */
export interface VoiceServerUpdate {
  data: VoiceServerUpdateData;
  reject: (reason?: unknown) => void;
  resolve: (value: VoiceServerUpdateData) => void;
}

/**
 * @public
 */
export interface VoiceServerUpdateData {
  endpoint: string;
  guildId: string;
  sessionId: string;
  token: string;
  userId: string;
}

/**
 * @public
 */
export interface VoiceStateUpdateData {
  guildId: string;
  sessionId: string;
  userId: string;
}

/**
 * @public
 */
export type AnySendableOpcode = (typeof SENDABLE_OPCODES)[number];
