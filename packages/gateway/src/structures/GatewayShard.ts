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
} from "@fancystudioteam/linkcord-types";
import { type RawData, WebSocket } from "ws";
import {
  GatewayShardError,
  RECONNECTABLE_CLOSE_CODES,
  SENDABLE_OPCODES,
  type SendableOpcodes,
} from "../utils/index.js";
import type { GatewayManager } from "./GatewayManager.js";
import { dispatchHandlers } from "./dispatch/dispatchHandlers.js";

/**
 * @public
 */
export class GatewayShard {
  private _resumeGatewayUrl: string | null = null;
  private _sequence: number | null = null;
  private _sessionId: string | null = null;

  readonly gatewayManager: GatewayManager;
  readonly voiceServerUpdates: Map<string, VoiceServerUpdate> = new Map();

  heartbeatInterval: number | null = null;
  id: number;
  reconnectAttempts = 0;
  socket: WebSocket | null = null;
  status: GatewayShardStatus = GatewayShardStatus.Disconnected;

  constructor(gatewayManager: GatewayManager, id: number) {
    this.id = id;
    this.gatewayManager = gatewayManager;
  }

  /**
   * @internal
   */
  private _handleConnect(): void {
    const { gatewayManager } = this;
    const { url } = gatewayManager;

    if (!url) {
      throw new GatewayShardError("Cannot connect without a gateway url.", this.id);
    }

    this._initializeSocket(url);
  }

  /**
   * @internal
   */
  private _handleDisconnect(isReconnectable?: boolean | null): void {
    isReconnectable ? this._handleResume() : this._handleConnect();
  }

  /**
   * @internal
   */
  private _handleResume(): void {
    const { _resumeGatewayUrl } = this;

    if (!_resumeGatewayUrl) {
      throw new GatewayShardError("Cannot resume without a resume gateway url.", this.id);
    }

    this.reconnectAttempts++;

    const resumeGatewayUrl = new URL(_resumeGatewayUrl);

    this._initializeSocket(resumeGatewayUrl);
    this._resume();
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
    const { connectionProperties, intents, shardCount, token } = this.gatewayManager;
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
    const { version } = this.gatewayManager;

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

    this.gatewayManager.emit("debug", `Received close event with code "${code}" and reason "${reason}".`);
    this.gatewayManager.emit("close", code, stringifiedReason, isReconnectable);
    this._handleDisconnect(isReconnectable);
  }

  /**
   * @internal
   */
  private _onMessage(rawData: RawData): void {
    const stringifiedRawData = rawData.toString();
    const message = JSON.parse(stringifiedRawData) as GatewayEvent;

    this.gatewayManager.emit("packet", message, this.id);
    this._updateSequence(message.s);

    switch (message.op) {
      case GatewayOpcodes.Dispatch: {
        const handler = dispatchHandlers[message.t];

        if (handler) {
          handler(this, message.d as never);
        }

        break;
      }
      case GatewayOpcodes.Hello: {
        const { heartbeat_interval } = message.d;

        this.heartbeatInterval = heartbeat_interval;
        this.gatewayManager.emit("hello", heartbeat_interval, this.id);

        setInterval(this._heartbeat.bind(this), heartbeat_interval);

        break;
      }
      case GatewayOpcodes.InvalidSession: {
        const isReconnectable = message.d;

        this._handleDisconnect(isReconnectable);

        break;
      }
      case GatewayOpcodes.Reconnect: {
        break;
      }
      default: {
        this.gatewayManager.emit("debug", `Received unhandled message opcode: ${message.op}`, this.id);
      }
    }
  }

  /**
   * @internal
   */
  private _onOpen(): void {
    this._identify();
  }

  /**
   * @internal
   */
  private _resume(): void {
    const { _resumeGatewayUrl, _sequence, _sessionId } = this;

    if (!(_resumeGatewayUrl && _sequence && _sessionId)) {
      throw new GatewayShardError("Cannot resume without a resume gateway url or session id.", this.id);
    }

    const { token } = this;
    const resumePayload: GatewayResumePayload = {
      seq: _sequence,
      session_id: _sessionId,
      token,
    };

    this.sendPayload(GatewayOpcodes.Resume, resumePayload);
  }

  /**
   * @internal
   */
  private _updateSequence(sequence?: number | null): void {
    if (sequence) {
      this._sequence = sequence;
    }
  }

  get token(): string {
    return this.gatewayManager.token;
  }

  connect(): void {
    this._handleConnect();
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
      channel_id: channelId,
      guild_id: guildId,
      self_deaf: options.selfDeaf ?? true,
      self_mute: options.selfMute ?? false,
    };

    this.sendPayload(GatewayOpcodes.VoiceStateUpdate, voiceStateUpdatePayload);

    const promise = new Promise<VoiceServerUpdateData>((resolve, reject) =>
      this.voiceServerUpdates.set(guildId, {
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

  sendPayload<Opcode extends SendableOpcodes>(opcode: Opcode, payload: SendPayload[Opcode]): void {
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
export interface SendPayload {
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
export enum GatewayShardStatus {
  Connected = "CONNECTED",
  Connecting = "CONNECTING",
  Disconnected = "DISCONNECTED",
  Handshaking = "HANDSHAKING",
  Resuming = "RESUMING",
}
