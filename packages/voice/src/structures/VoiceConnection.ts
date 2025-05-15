import type { Readable } from "node:stream";
import {
  type Nullable,
  type Snowflake,
  SpeakingFlags,
  type VoiceEvent,
  type VoiceHeartbeatPayload,
  type VoiceIdentifyPayload,
  VoiceOpcodes,
  type VoiceResumePayload,
  type VoiceSelectProtocolPayload,
  type VoiceSpeakingPayload,
} from "@fancystudioteam/linkcord-types";
import { type RawData, WebSocket } from "ws";
import { VoiceConnectionError } from "#utils";
import type { VoiceManager } from "./VoiceManager.js";
import { VoiceStreamTransformer } from "./VoiceStreamTransformer.js";
import { VoiceUDPSocket } from "./VoiceUDPSocket.js";

const SENDABLE_VOICE_OPCODES = [
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
  private _address: Nullable<VoiceConnectionAddress> = null;
  private _heartbeatAck = 0;
  private _sequence = 0;

  readonly endpoint: URL;
  readonly guildId: Snowflake;
  readonly manager: VoiceManager;
  readonly sessionId: string;
  readonly token: string;
  readonly userId: Snowflake;

  sequence = 0;
  socket: Nullable<WebSocket> = null;
  ssrc: Nullable<number> = null;
  timestamp = 0;
  udpSocket: Nullable<VoiceUDPSocket> = null;

  constructor(manager: VoiceManager, options: VoiceConnectionOptions) {
    const { endpoint, guildId, sessionId, token, userId } = options;

    this.endpoint = new URL(`wss://${endpoint}`);
    this.guildId = guildId;
    this.manager = manager;
    this.sessionId = sessionId;
    this.token = token;
    this.userId = userId;
    this._initializeSocket(this.endpoint);
  }

  private *_chunkBuffer(buffer: Buffer, chunkSize: number): Generator<Buffer> {
    for (let offset = 0; offset < buffer.length; offset += chunkSize) {
      yield buffer.slice(offset, offset + chunkSize);
    }
  }

  private _heartbeat(): void {
    const { _sequence, _heartbeatAck } = this;
    const heartbeatPayload: VoiceHeartbeatPayload = {
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      seq_ack: _sequence,
      t: _heartbeatAck,
    };

    this.sendVoicePayload(VoiceOpcodes.Heartbeat, heartbeatPayload);
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
  private _onClose(code: number, reason: Buffer): void {
    console.log(code, reason.toString());
  }

  /**
   * @internal
   */
  private _onMessage(rawData: RawData, _isBinary: boolean): void {
    const stringifiedRawData = rawData.toString();
    const message = JSON.parse(stringifiedRawData) as VoiceEvent;

    if (message.seq) {
      this._sequence = message.seq;
    }

    switch (message.op) {
      case VoiceOpcodes.HeartbeatAck: {
        const { t } = message.d;

        this._heartbeatAck = t;

        break;
      }
      case VoiceOpcodes.Hello: {
        const { heartbeat_interval } = message.d;

        setInterval(this._heartbeat.bind(this), heartbeat_interval);

        break;
      }
      case VoiceOpcodes.Ready: {
        const { ip, port, ssrc } = message.d;

        this._address = {
          ip,
          port,
        };
        this.udpSocket = new VoiceUDPSocket(this, this._address);
        this.ssrc = ssrc;

        break;
      }
      case VoiceOpcodes.SessionDescription: {
        const { secret_key } = message.d;
        const udpSocket = this.getUDPSocket();

        udpSocket.setSecretKey(secret_key);
        udpSocket.sendSilenceFrames();

        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * @internal
   */
  private _onOpen(): void {
    const identifyPayload = {
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      server_id: this.guildId,
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      user_id: this.userId,
      // biome-ignore lint/style/useNamingConvention: Discord fields use snake case.
      session_id: this.sessionId,
      token: this.token,
    };

    this.sendVoicePayload(VoiceOpcodes.Identify, identifyPayload);
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

  getUDPSocket(): VoiceUDPSocket {
    const socket = this.udpSocket;

    if (!socket) {
      const errorMessages = [
        "The voice connection's udp socket has not been initialized yet.",
        "Make sure to create a voice connection to initialize and open its udp socket.",
      ];

      throw new VoiceConnectionError(errorMessages.join("\n"));
    }

    return socket;
  }

  async playStream(stream: Readable): Promise<void> {
    const transformer = new VoiceStreamTransformer();
    const data: Readable = stream;
    const opusData = await transformer.transformToOpus(data);
    const udpSocket = this.getUDPSocket();

    this.setSpeaking(SpeakingFlags.Microphone | SpeakingFlags.Soundshare);
  }

  sendVoicePayload<Opcode extends AnySendableVoiceOpcode>(opcode: Opcode, payload: SendVoicePayloadData[Opcode]): void {
    if (!SENDABLE_VOICE_OPCODES.includes(opcode)) {
      throw new VoiceConnectionError("Cannot send a non-sendable voice opcode to the gateway.");
    }

    this.manager.emit(
      "debug",
      `Sending voice gateway opcode "${opcode}" with payload: ${JSON.stringify(payload, null, 2)}`,
    );

    const socket = this.getWebSocket();
    const dataToSend = {
      d: payload,
      op: opcode,
    };
    const stringifiedDataToSend = JSON.stringify(dataToSend);

    socket.send(stringifiedDataToSend);
  }

  setSpeaking(speaking: number): void {
    const speakingPayload: VoiceSpeakingPayload = {
      delay: 0,
      speaking,
      ssrc: this.ssrc ?? 0,
    };

    this.sendVoicePayload(VoiceOpcodes.Speaking, speakingPayload);
  }
}

/**
 * @public
 */
export interface SendVoicePayloadData {
  [VoiceOpcodes.Heartbeat]: VoiceHeartbeatPayload;
  [VoiceOpcodes.Identify]: VoiceIdentifyPayload;
  [VoiceOpcodes.Resume]: VoiceResumePayload;
  [VoiceOpcodes.SelectProtocol]: VoiceSelectProtocolPayload;
  [VoiceOpcodes.Speaking]: VoiceSpeakingPayload;
}

/**
 * @public
 */
export interface VoiceConnectionAddress {
  ip: string;
  port: number;
}

/**
 * @public
 */
export interface VoiceConnectionOptions {
  endpoint: string;
  guildId: Snowflake;
  sessionId: string;
  token: string;
  userId: Snowflake;
}

/**
 * @public
 */
export type AnySendableVoiceOpcode = (typeof SENDABLE_VOICE_OPCODES)[number];
