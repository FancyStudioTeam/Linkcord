import { createSocket, type Socket, type SocketType } from "node:dgram";
import { isIPv4 } from "node:net";
import {
  ProtocolTypes,
  VoiceEncryptionModes,
  VoiceOpcodes,
  type VoiceSelectProtocolPayload,
} from "@fancystudioteam/linkcord-types";
import { XChaCha20Poly1305 } from "@stablelib/xchacha20poly1305";
import sodium from "libsodium-wrappers";
import { VoiceConnectionError } from "../utils/index.js";
import type { VoiceConnection, VoiceConnectionAddress } from "./VoiceConnection.js";

const IP_DISCOVERY_PACKET_LENGTH = 74;
const SILENCE_FRAMES = Buffer.from([0xf8, 0xff, 0xfe]);

/**
 * @public
 */
export class VoiceUDPSocket {
  private _localAddress: VoiceConnectionUDPSocketAddress | null = null;
  private _secretKey = Buffer.alloc(32);
  private _socket: Socket | null = null;

  readonly _address: VoiceConnectionAddress;

  nonce = 0;
  nonceBuffer = Buffer.alloc(24);
  voiceConnection: VoiceConnection;

  constructor(voiceConnection: VoiceConnection, address: VoiceConnectionAddress) {
    this._address = address;
    this.voiceConnection = voiceConnection;
    this.discovery();

    (async () => await sodium.ready)();
  }

  /**
   * @internal
   */
  private _createAudioPacket(opusData: Buffer): Buffer {
    const rtpHeader = this._createRTPHeader();
    const encryptedOpusData = this._encryptOpusPacket(opusData, rtpHeader);

    return Buffer.concat([rtpHeader, encryptedOpusData]);
  }

  /**
   * @internal
   */
  private _createRTPHeader(): Buffer {
    const rtpHeader = Buffer.alloc(12);
    const { sequence, ssrc, timestamp } = this.voiceConnection;

    rtpHeader[0] = 0x80;
    rtpHeader[1] = 0x78;

    rtpHeader.writeUInt16BE(sequence, 2);
    rtpHeader.writeUInt32BE(timestamp, 4);
    rtpHeader.writeUInt32BE(ssrc ?? 0, 8);

    return rtpHeader;
  }

  private _createNonceBuffer(rtpHeader: Buffer): Buffer {
    const nonce = Buffer.alloc(24);

    rtpHeader.copy(nonce, 0, 0, 12);

    return nonce;
  }

  /**
   * @internal
   */
  private _encryptOpusPacket(opusData: Buffer, rtpHeader: Buffer): Buffer {
    const cipher = new XChaCha20Poly1305(this._secretKey);
    const nonce = this._createNonceBuffer(rtpHeader);
    const encrypted = cipher.seal(nonce, opusData);

    return Buffer.from(encrypted);
  }

  /**
   * @internal
   */
  private _onMessage(rawData: Buffer): void {
    const addressOffset = 8;
    const addressStart = addressOffset;
    let addressEnd = addressOffset;

    while (rawData[addressEnd] !== 0) {
      addressEnd++;
    }

    const address = rawData.toString("ascii", addressStart, addressEnd);
    const port = rawData.readUInt16BE(IP_DISCOVERY_PACKET_LENGTH - 2);

    this._localAddress = {
      ip: address,
      port,
    };

    const selectProtocolPayload: VoiceSelectProtocolPayload = {
      data: {
        address,
        mode: VoiceEncryptionModes.AEADXChaCha20Poly1305RTPSize,
        port,
      },
      protocol: ProtocolTypes.Udp,
    };

    this.voiceConnection.sendVoicePayload(VoiceOpcodes.SelectProtocol, selectProtocolPayload);
  }

  discovery(): void {
    const { ip } = this._address;
    const type: SocketType = isIPv4(ip) ? "udp4" : "udp6";

    this._socket = createSocket(type);
    this._socket.once("message", this._onMessage.bind(this));
    this.sendDiscoveryPacket();
  }

  getUDPSocket(): Socket {
    const socket = this._socket;

    if (!socket) {
      const errorMessages = [
        "The voice connection's udp socket has not been initialized yet.",
        "Make sure to create a voice connection to initialize and open its udp socket.",
      ];

      throw new VoiceConnectionError(errorMessages.join("\n"));
    }

    return socket;
  }

  sendAudioPacket(opusAudioFrame: Buffer): void {
    const { ip, port } = this._localAddress ?? {};

    if (!(ip && port)) {
      throw new VoiceConnectionError("Local address has not been set yet.");
    }

    this.voiceConnection.timestamp = (this.voiceConnection.timestamp + 960) >>> 0;
    this.voiceConnection.sequence = (this.voiceConnection.sequence + 1) & 0xffff;

    const audioPacket = this._createAudioPacket(opusAudioFrame);

    this.voiceConnection.setSpeaking(true);
    this.sendUDPPacket(audioPacket, ip, port);
  }

  sendDiscoveryPacket(): void {
    const { ip, port } = this._address;
    const { ssrc } = this.voiceConnection;
    const data = Buffer.allocUnsafe(IP_DISCOVERY_PACKET_LENGTH);

    data.writeUInt16BE(0x1, 0);
    data.writeUInt16BE(70, 2);
    data.writeUInt32BE(ssrc ?? 0, 4);

    this.sendUDPPacket(data, ip, port);
  }

  sendSilenceFrames(): void {
    const { ip, port } = this._localAddress ?? {};

    if (!(ip && port)) {
      throw new VoiceConnectionError("Local address has not been set yet.");
    }

    this.sendUDPPacket(SILENCE_FRAMES, ip, port);
  }

  sendUDPPacket(data: Buffer, ip: string, port: number): void {
    const socket = this.getUDPSocket();
    const length = data.length;
    const offset = 0;

    socket.send(data, offset, length, port, ip);
  }

  setSecretKey(secretKey: number[]): void {
    this._secretKey = Buffer.from(secretKey);
  }
}

/**
 * @public
 */
export interface VoiceConnectionUDPSocketAddress {
  ip: string;
  port: number;
}
