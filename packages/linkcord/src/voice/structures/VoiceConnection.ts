import type { Readable } from "node:stream";
import {
  type Snowflake,
  SpeakingFlags,
  VoiceCloseEventCodes,
  type VoiceEvent,
  type VoiceHeartbeatPayload,
  type VoiceIdentifyPayload,
  VoiceOpcodes,
  type VoiceResumePayload,
  type VoiceSelectProtocolPayload,
  type VoiceSpeakingPayload,
} from "@fancystudioteam/linkcord-types";
import OpusScript from "opusscript";
import prismMedia from "prism-media";
import { type RawData, WebSocket } from "ws";
import { CHANNELS, SAMPLE_RATE, VOICE_GATEWAY_VERSION, VoiceConnectionError } from "../utils/index.js";
import type { VoiceManager } from "./VoiceManager.js";
import { VoiceUDPSocket } from "./VoiceUDPSocket.js";

const { FFmpeg } = prismMedia;
const RECONNECTABLE_VOICE_CLOSE_CODES = [
  VoiceCloseEventCodes.UnknownOpcode,
  VoiceCloseEventCodes.FailedToDecodePayload,
  VoiceCloseEventCodes.NotAuthenticated,
  VoiceCloseEventCodes.AlreadyAuthenticated,
];
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
  private _address: VoiceConnectionAddress | null = null;
  private _heartbeatAck = 0;
  private _sequence = 0;

  readonly endpoint: URL;
  readonly guildId: Snowflake;
  readonly manager: VoiceManager;
  readonly sessionId: string;
  readonly token: string;
  readonly userId: Snowflake;

  sequence = 0;
  socket: WebSocket | null = null;
  ssrc: number | null = null;
  timestamp = 0;
  udpSocket: VoiceUDPSocket | null = null;

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

  private _heartbeat(): void {
    const { _sequence, _heartbeatAck } = this;
    /*const heartbeatPayload: VoiceHeartbeatPayload = {
      seq_ack: _sequence,
      t: _heartbeatAck,
    };*/

    // @ts-expect-error
    this.sendVoicePayload(VoiceOpcodes.Heartbeat, _heartbeatAck);
  }

  /**
   * @internal
   */
  private _initializeSocket(url: URL): void {
    const { searchParams } = url;

    searchParams.set("v", VOICE_GATEWAY_VERSION.toString());
    searchParams.set("encoding", "json");

    this.manager.emit("debug", `Creating voice connection socket using "${url}".`);

    this.socket = new WebSocket(url);
    this.socket.on("open", this._onOpen.bind(this));
    this.socket.on("message", this._onMessage.bind(this));
    this.socket.on("close", this._onClose.bind(this));
  }

  /**
   * @internal
   */
  private _onClose(code: number, reason: Buffer): void {
    const stringifiedReason = reason.toString();
    const isReconnectable = RECONNECTABLE_VOICE_CLOSE_CODES.includes(code);

    this.manager.emit("debug", `Voice connection socket closed with code "${code}" and reason "${stringifiedReason}".`);
    this.manager.emit("close", code, stringifiedReason, isReconnectable);
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

        this.setSpeaking(true);

        udpSocket.sendSilenceFrames();
        udpSocket.setSecretKey(secret_key);

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
      server_id: this.guildId,
      session_id: this.sessionId,
      token: this.token,
      user_id: this.userId,
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

  playRawStream(stream: Readable, opusFactory: OpusFactoryFunction): void {
    this.setSpeaking(true);

    const startTime = Date.now();
    const length = 20;

    const send = () => {
      const buffer = opusFactory(stream);
      const udpSocket = this.getUDPSocket();

      if (buffer) {
        udpSocket.sendAudioPacket(buffer);
      }

      setTimeout(() => send(), startTime + this.sequence * length - Date.now());
    };

    this.setSpeaking(true);
    send();
  }

  playStream(stream: Readable): void {
    const prismFFmpeg = new FFmpeg({
      args: [
        "-analyzeduration",
        "0",
        "-loglevel",
        "0",
        "-f",
        "s16le",
        "-ac",
        CHANNELS.toString(),
        "-ar",
        SAMPLE_RATE.toString(),
      ],
    });
    const encoder = new OpusScript(48000, 2, OpusScript.Application.AUDIO);
    const pcmStream = stream.pipe(prismFFmpeg);

    const opusFactory = (stream: Readable): Buffer | null => {
      let packet = stream.read(1920 * 2);

      if (!packet) {
        return null;
      }

      if (packet.length !== 1920 * 2) {
        const newBuffer = Buffer.alloc(1920 * 2).fill(0);

        packet.copy(newBuffer);
        packet = newBuffer;
      }

      return encoder.encode(packet, 1920);
    };

    pcmStream.once("readable", () => this.playRawStream(pcmStream, opusFactory));
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

  setSpeaking(speaking: boolean | number): void {
    const speakingValue = typeof speaking === "boolean" ? (speaking === true ? SpeakingFlags.Microphone : 0) : speaking;
    const speakingPayload: VoiceSpeakingPayload = {
      delay: 0,
      speaking: speakingValue,
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

/**
 * @public
 */
export type OpusFactoryFunction = (stream: Readable) => Buffer | null;
