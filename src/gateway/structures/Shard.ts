import { match } from "ts-pattern";
import { EventEmitter, type RawData, WebSocket as Socket } from "ws";
import {
  type GatewayEvent,
  type GatewayHeartbeatData,
  type GatewayIdentifyData,
  GatewayOpcodes,
  type Optional,
  type ShardEvents,
  ShardStatus,
} from "#types";
import type { GatewayManager } from "./GatewayManager.js";

export class Shard extends EventEmitter<ShardEvents> {
  protected _gatewayManager: GatewayManager;
  protected _heartbeatInterval: Optional<NodeJS.Timeout>;
  protected _sequenceNumber = 0;
  /** The shard id. */
  readonly id: number;
  /** The gateway url. */
  readonly gatewayUrl: string;
  /** The socked used to interact with the Discord gateway. */
  socket: Socket;
  /** The current shard status. */
  status = ShardStatus.Disconnected;

  constructor(id: number, gatewayManager: GatewayManager) {
    super();

    const { gatewayUrl } = gatewayManager;

    this._gatewayManager = gatewayManager;
    this.gatewayUrl = gatewayUrl;
    this.id = id;
    this.socket = this._initializeSocket();
  }

  /** Sends a "Heartbeat" payload to the Discord gateway. */
  private _heartbeat(): void {
    const { _sequenceNumber } = this;

    this.send(GatewayOpcodes.Heartbeat, _sequenceNumber);
  }

  /** Sends a "Identify" payload to the Discord gateway. */
  private _identify(): void {
    const { _gatewayManager } = this;
    const { connectionProperties, intents, token } = _gatewayManager;
    const identifyPayload: GatewayIdentifyData = {
      intents,
      properties: connectionProperties,
      token,
    };

    this.send(GatewayOpcodes.Identify, identifyPayload);
  }

  /** Initializes the shard connection and the event listeners. */
  private _initialize(): void {
    this.status = ShardStatus.Connecting;
    this.socket = this._initializeSocket();

    this.socket.on("open", () => this._onSocketOpen());
    this.socket.on("message", (message) => this._onSocketMessage(message));
  }

  /** Initializes the Socket connection. */
  private _initializeSocket(): Socket {
    const { gatewayUrl } = this;
    const socket = new Socket(gatewayUrl);

    return socket;
  }

  /** Handles the incoming events from the Discord gateway. */
  private _onSocketMessage(message: RawData): void {
    const stringifiedMessage = message.toString();
    const parsedGatewayEvent = JSON.parse(stringifiedMessage) as GatewayEvent;

    match(parsedGatewayEvent)
      .with(
        {
          op: GatewayOpcodes.Hello,
        },
        (helloEvent) => {
          const { d } = helloEvent;
          const { heartbeat_interval } = d;
          const { _heartbeatInterval } = this;

          if (_heartbeatInterval) {
            clearInterval(_heartbeatInterval);
          }

          this.emit("hello", heartbeat_interval);
          this.status = ShardStatus.Ready;
          this._heartbeatInterval = setInterval(() => this._heartbeat(), heartbeat_interval);
        },
      )
      .otherwise((unhandledGatewayEvent) => {
        const { op } = unhandledGatewayEvent;

        this.emit("debug", `Received unhandled gateway event: ${op}.`);
      });
  }

  /** Handles the incoming events from the Discord gateway. */
  private _onSocketOpen(): void {
    this.status = ShardStatus.Identifying;
    this._identify();
  }

  /** Connects this shard to the Discord gateway. */
  connect(): void {
    this._initialize();
  }

  /**
   * Sends a gateway payload to the Discord gateway.
   *
   * @param opcode - The opcode of the gateway payload.
   * @param data - The data to send.
   */
  send<Opcode extends GatewayOpcodes>(opcode: Opcode, data: SendDataPayload<Opcode>): void {
    const { socket } = this;
    const stringifiedData = JSON.stringify({
      d: data,
      op: opcode,
    });

    socket.send(stringifiedData);
  }
}

type SendDataPayload<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Heartbeat
  ? GatewayHeartbeatData
  : Opcode extends GatewayOpcodes.Identify
    ? GatewayIdentifyData
    : unknown;
