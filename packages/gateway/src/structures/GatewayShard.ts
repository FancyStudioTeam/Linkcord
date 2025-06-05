import EventEmitter from "node:events";
import {
  type APIUser,
  type GatewayEvent,
  type GatewayHeartbeatPayload,
  type GatewayIdentifyPayload,
  GatewayOpcodes,
  type GatewayPresenceUpdatePayload,
  type GatewayRequestGuildMembersPayload,
  type GatewayRequestSoundboardSoundsPayload,
  type GatewayResumePayload,
  type GatewayVoiceStateUpdatePayload,
  type Snowflake,
} from "@fancystudioteam/linkcord-types";
import { type RawData, WebSocket } from "ws";
import {
  GatewayShardError,
  RECONNECTABLE_CLOSE_CODES,
  SENDABLE_OPCODES,
  type SendableOpcodes,
} from "../utils/index.js";
import type { GatewayManager } from "./GatewayManager.js";
import { handlers } from "./handlers/handlers.js";

const MAXIMUM_CONNECTION_ATTEMPTS = 5;
const MAXIMUM_RECONNECTION_ATTEMPTS = 5;

/**
 * @public
 */
export class GatewayShard extends EventEmitter<GatewayShardEvents> {
  private _sequence: number | null = null;

  readonly gatewayManager: GatewayManager;
  readonly voiceServerUpdates: Map<string, VoiceServerUpdate> = new Map();

  connectAttempts = 0;
  heartbeatInterval: number | null = null;
  id: number;
  reconnectAttempts = 0;
  resumeGatewayUrl: string | null = null;
  sessionId: string | null = null;
  socket: WebSocket | null = null;
  status: GatewayShardStatus = GatewayShardStatus.Disconnected;

  constructor(gatewayManager: GatewayManager, id: number) {
    super();

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

    ++this.connectAttempts;
    this.status = GatewayShardStatus.Connecting;
    this.emit("debug", {
      gatewayShard: this,
      message: `Attempt ${this.connectAttempts} to connect the shard.`,
    });

    if (this.connectAttempts > MAXIMUM_CONNECTION_ATTEMPTS) {
      throw new GatewayShardError("Too many connection attempts.", this.id);
    }

    this._initializeSocket(url);
  }

  /**
   * @internal
   */
  private _handleDisconnect(isReconnectable: boolean | null = false): void {
    if (isReconnectable) {
      this._handleResume();
    }
  }

  /**
   * @internal
   */
  private _handleResume(): void {
    const { resumeGatewayUrl } = this;

    if (!resumeGatewayUrl) {
      throw new GatewayShardError("Cannot resume without a resume gateway url.", this.id);
    }

    const url = new URL(resumeGatewayUrl);

    ++this.reconnectAttempts;
    this.status = GatewayShardStatus.Resuming;
    this.emit("debug", {
      gatewayShard: this,
      message: `Attempt ${this.reconnectAttempts} to resume the shard.`,
    });

    if (this.reconnectAttempts > MAXIMUM_RECONNECTION_ATTEMPTS) {
      throw new GatewayShardError("Too many reconnection attempts.", this.id);
    }

    this._initializeSocket(url);
    this.resume();
  }

  /**
   * @internal
   */
  private _initializeSocket(url: URL): void {
    const { searchParams } = url;
    const { gatewayManager } = this;
    const { version } = gatewayManager;

    searchParams.set("v", version.toString());
    searchParams.set("encoding", "json");

    this.emit("debug", {
      gatewayShard: this,
      message: `Handshaking with Discord using url "${url}"...`,
    });

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
    const reconnectable = RECONNECTABLE_CLOSE_CODES.includes(code) || code === 1001;

    this.emit("debug", {
      gatewayShard: this,
      message: `Received close event with code "${code}" and reason "${reason}".`,
    });
    this.emit("close", {
      code,
      gatewayShard: this,
      reason: stringifiedReason,
      reconnectable,
    });
    this._handleDisconnect(reconnectable);
  }

  /**
   * @internal
   */
  private _onMessage(rawData: RawData): void {
    const stringifiedRawData = rawData.toString();
    const packet = JSON.parse(stringifiedRawData) as GatewayEvent;

    this.emit("packet", {
      gatewayShard: this,
      packet,
    });
    this._updateSequence(packet.s);

    const handler = handlers[packet.op];

    handler?.(this, packet as never);
  }

  /**
   * @internal
   */
  private _onOpen(): void {
    if (this.status === GatewayShardStatus.Connecting) {
      this.identify();
    }

    this._resetAttempts();
    this.status = GatewayShardStatus.Connected;
  }

  /**
   * @internal
   */
  private _resetAttempts(): void {
    this.connectAttempts = 0;
    this.reconnectAttempts = 0;
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
    const { gatewayManager } = this;
    const { token } = gatewayManager;

    return token;
  }

  connect(): void {
    this._handleConnect();
  }

  getWebSocket(): WebSocket {
    const socket = this.socket;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      throw new GatewayShardError(
        "The shard socket has not been initialized or opened yet. Make sure to connect the shard before accessing its socket.",
        this.id,
      );
    }

    return socket;
  }

  heartbeat(): void {
    const { _sequence } = this;
    const heartbeatPayload: GatewayHeartbeatPayload = _sequence;

    this.sendPayload(GatewayOpcodes.Heartbeat, heartbeatPayload);
  }

  identify(): void {
    const { gatewayManager } = this;
    const { connectionProperties, intents, shardCount, token } = gatewayManager;
    /**
     * TODO: Allow to set a custom presence when identifying.
     */
    const identifyPayload: GatewayIdentifyPayload = {
      intents,
      properties: connectionProperties,
      shard: [this.id, shardCount],
      token,
    };

    this.sendPayload(GatewayOpcodes.Identify, identifyPayload);
  }

  joinVoiceChannel(
    channelId: Snowflake,
    guildId: Snowflake,
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

  resume(): void {
    const { _sequence, resumeGatewayUrl, sessionId } = this;

    if (!(resumeGatewayUrl && _sequence && sessionId)) {
      throw new GatewayShardError("Cannot resume without a resume gateway url or session id.", this.id);
    }

    const { token } = this;
    const resumePayload: GatewayResumePayload = {
      seq: _sequence,
      session_id: sessionId,
      token,
    };

    this.sendPayload(GatewayOpcodes.Resume, resumePayload);
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
export interface GatewayShardClosePayload {
  code: number;
  gatewayShard: GatewayShard;
  reason: string;
  reconnectable: boolean;
}

/**
 * @public
 */
export interface GatewayShardEvents {
  close: [
    payload: {
      code: number;
      gatewayShard: GatewayShard;
      reason: string;
      reconnectable: boolean;
    },
  ];
  debug: [
    payload: {
      gatewayShard: GatewayShard;
      message: string;
    },
  ];
  hello: [
    payload: {
      gatewayShard: GatewayShard;
      heartbeatInterval: number;
    },
  ];
  packet: [
    payload: {
      gatewayShard: GatewayShard;
      packet: GatewayEvent;
    },
  ];
  ready: [
    payload: {
      gatewayShard: GatewayShard;
      user: APIUser;
    },
  ];
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
