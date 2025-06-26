import { type RawData, WebSocket } from "ws";
import type { Client } from "#client/Client.js";
import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { GATEWAY_URL_BASE, GATEWAY_VERSION, SENDABLE_OPCODES } from "#gateway/utils/constants.js";
import {
  type GatewayDispatch,
  type GatewayEvent,
  type GatewayHeartbeatPayload,
  type GatewayHello,
  type GatewayIdentifyPayload,
  GatewayOpcodes,
  type GatewayPresenceUpdatePayload,
  type GatewayRequestGuildMembersPayload,
  type GatewayResumePayload,
  type GatewayVoiceStateUpdatePayload,
} from "#types/index.js";
import type { GatewayManager } from "./GatewayManager.js";

/**
 * @public
 */
export class GatewayShard {
  readonly client: Client;
  readonly id: number;
  readonly manager: GatewayManager;

  sequence: number | null = null;
  ws: WebSocket | null = null;

  constructor(id: number, manager: GatewayManager) {
    const { client } = manager;

    this.client = client;
    this.id = id;
    this.manager = manager;
  }

  /**
   * @internal
   */
  protected getWebSocket(): WebSocket {
    const { ws } = this;

    if (!ws || ws.readyState !== ws.OPEN) {
      throw new Error("WebSocket has not been opened or initialized yet.");
    }

    return ws;
  }

  /**
   * @internal
   */
  protected heartbeat(): void {
    const { sequence } = this;

    this.send(GatewayOpcodes.Heartbeat, sequence);
  }

  /**
   * @internal
   */
  protected identify(): void {
    const { manager } = this;
    const { intents, token } = manager;

    /**
     * TODO: Implement sharding and custom properties.
     */
    this.send(GatewayOpcodes.Identify, {
      intents,
      properties: {
        browser: "Linkcord",
        device: "Linkcord",
        os: "Linkcord",
      },
      token,
    });
  }

  /**
   * @internal
   */
  protected emit<Event extends ClientEventsString>(name: Event, ...data: ClientEventsMap[Event]): void {
    const { client } = this;
    const { events } = client;

    events.emit(name, ...data);
  }

  /**
   * @internal
   */
  protected initializeWebSocket(gatewayUrl: string = GATEWAY_URL_BASE): void {
    const urlObject = new URL(gatewayUrl);
    const { searchParams } = urlObject;

    /**
     * TODO: Implement "compress" (?)
     */
    searchParams.append("v", GATEWAY_VERSION.toString());
    searchParams.append("encoding", "json");

    const ws = new WebSocket(urlObject.toString());

    /**
     * TODO: Handle reconnections.
     */
    this.ws = ws;
    this.ws.on("message", this.onMessage.bind(this));
    this.ws.on("open", this.onOpen.bind(this));
  }

  /**
   * @internal
   */
  protected async onMessage(data: RawData): Promise<void> {
    const stringifiedData = data.toString();
    const message = JSON.parse(stringifiedData) as GatewayEvent;

    this.emit("shardPacket", message, this);

    const { client } = this;

    switch (message.op) {
      case GatewayOpcodes.Dispatch: {
        await this.onMessageDispatch(message, client);

        break;
      }
      case GatewayOpcodes.Hello: {
        this.onMessageHello(message);

        break;
      }
      default:
    }
  }

  /**
   * @internal
   */
  protected async onMessageDispatch(dispatch: GatewayDispatch, client: Client): Promise<void> {
    const { d, t } = dispatch;

    await DispatchHooks[t]?.(client, this, d as never);
  }

  /**
   * @internal
   */
  protected onMessageHello(hello: GatewayHello): void {
    const { d } = hello;
    const { heartbeat_interval } = d;

    this.emit("shardHello", heartbeat_interval, this);

    setInterval(this.heartbeat.bind(this), heartbeat_interval);
  }

  /**
   * @internal
   */
  protected onOpen(): void {
    this.identify();
  }

  init(): void {
    this.initializeWebSocket();
  }

  send<Opcode extends AnySendableOpcode>(opcode: Opcode, payload: SendPayload[Opcode]): void {
    if (!SENDABLE_OPCODES.includes(opcode)) {
      throw new Error(`Cannot send a non-sendable opcode '${opcode}'.`);
    }

    const ws = this.getWebSocket();
    const stringifiedPayload = JSON.stringify({
      d: payload,
      op: opcode,
    });

    ws.send(stringifiedPayload);
  }
}

type SendPayload = {
  [GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
  [GatewayOpcodes.Identify]: GatewayIdentifyPayload;
  [GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
  [GatewayOpcodes.Resume]: GatewayResumePayload;
  [GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
  [GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestGuildMembersPayload;
  [GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
};

type AnySendableOpcode = (typeof SENDABLE_OPCODES)[number];
