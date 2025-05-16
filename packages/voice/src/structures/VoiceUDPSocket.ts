import { type Socket, type SocketType, createSocket } from "node:dgram";
import { isIPv4 } from "node:net";
import { type Nullable, VoiceOpcodes, type VoiceSelectProtocolPayload } from "@fancystudioteam/linkcord-types";
import sodium from "libsodium-wrappers";
import { VoiceConnectionError } from "#utils";
import type { VoiceConnection, VoiceConnectionAddress } from "./VoiceConnection.js";

const { crypto_aead_xchacha20poly1305_ietf_encrypt } = sodium;

const IP_DISCOVERY_PACKET_LENGTH = 74;
const MAX_NONCE_SIZE = 2 ** 32 - 1;
const NONCE = Buffer.alloc(24);
const SILENCE_FRAMES = Buffer.from([0xf8, 0xff, 0xfe]);
const TIMESTAMP_INCREASE = (48000 / 100) * 2;

/**
 * @public
 */
export class VoiceUDPSocket {
  private _localAddress: Nullable<VoiceConnectionUDPSocketAddress> = null;
  private _secretKey: Buffer = Buffer.alloc(32);
  private _socket: Nullable<Socket> = null;

  readonly _address: VoiceConnectionAddress;

  nonce = 0;
  nonceBuffer = Buffer.alloc(24);
  voiceConnection: VoiceConnection;

  constructor(voiceConnection: VoiceConnection, address: VoiceConnectionAddress) {
    this._address = address;
    this.voiceConnection = voiceConnection;
    this.discovery();
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

    rtpHeader.writeUInt8(0x80, 0);
    rtpHeader.writeUInt8(0x78, 1);

    rtpHeader.writeUInt16BE(sequence, 2);
    rtpHeader.writeUInt32BE(timestamp, 4);
    rtpHeader.writeUInt32BE(ssrc ?? 0, 8);

    rtpHeader.copy(NONCE, 0, 0, 12);

    return rtpHeader;
  }

  /**
   * @internal
   */
  private _encryptOpusPacket(opusData: Buffer, rtpHeader: Buffer): Buffer {
    this.nonce++;

    if (this.nonce > MAX_NONCE_SIZE) {
      this.nonce = 0;
    }

    this.nonceBuffer.writeUInt32BE(this.nonce, 0);

    const noncePadding = this.nonceBuffer.subarray(0, 4);
    const encryptedOpusPacket = crypto_aead_xchacha20poly1305_ietf_encrypt(
      opusData,
      rtpHeader,
      null,
      this.nonceBuffer,
      this._secretKey,
    );

    return Buffer.concat([encryptedOpusPacket, noncePadding]);
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
        mode: "aead_xchacha20_poly1305_rtpsize",
        port,
      },
      protocol: "udp",
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

  sendAudioPacket(audioFrame: Buffer): void {
    const { ip, port } = this._localAddress ?? {};
    let { timestamp, sequence } = this.voiceConnection;

    if (!(ip && port)) {
      throw new VoiceConnectionError("Local address has not been set yet.");
    }

    sequence++;
    timestamp += TIMESTAMP_INCREASE;

    if (sequence >= 2 ** 16) {
      sequence = 0;
    }

    if (timestamp >= 2 ** 32) {
      timestamp = 0;
    }

    const audioPacket = this._createAudioPacket(audioFrame);

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
