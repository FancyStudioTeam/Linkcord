import { EventEmitter } from "node:events";
import { GatewayManager, type GatewayManagerEvents } from "@fancystudioteam/linkcord-gateway";
import { RESTManager } from "@fancystudioteam/linkcord-rest";
import type { GatewayIntents, If, Snowflake } from "@fancystudioteam/linkcord-types";
import { VoiceManager } from "@fancystudioteam/linkcord-voice";
import { getConfig, loadConfigFile } from "../configuration/internal.js";
import type { User } from "../structures/index.js";
import { handlers } from "./handlers/handlers.js";
import type { ClientEventsMap } from "./types/Client.js";

/**
 * @public
 */
export class Client<Ready extends boolean = boolean> extends EventEmitter<ClientEventsMap> {
  readonly gateway: GatewayManager;
  readonly rest: RESTManager;
  readonly unavailableGuilds: Map<Snowflake, boolean> = new Map();
  readonly voice: VoiceManager;

  ready: Ready;
  user: If<Ready, User, null> = null as If<Ready, User, null>;

  constructor() {
    super();

    (async () => {
      await loadConfigFile();
    })();

    const { gateway, intents: unresolvedIntents, rest, token, voice } = getConfig();

    if (!token || !unresolvedIntents) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }

    const intents = this.resolveGatewayIntents(unresolvedIntents);

    this.gateway = new GatewayManager({
      ...gateway,
      intents,
      token,
    });
    this.ready = false as Ready;
    this.rest = new RESTManager({
      ...rest,
      token,
    });
    this.voice = new VoiceManager({
      ...voice,
      gatewayManager: this.gateway,
    });
    this.watch();
  }

  private handleOnGatewayPacket({ gatewayShard, packet }: GatewayManagerEvents["packet"][0]): void {
    const { op } = packet;
    const handler = handlers[op];

    handler?.(this, gatewayShard, packet as never);
  }

  private resolveGatewayIntents(intents: GatewayIntents[] | number): number {
    return Array.isArray(intents) ? intents.reduce((acc, curr) => acc | curr, 0) : intents;
  }

  private watch(): void {
    this.watchGateway();
  }

  private watchGateway(): void {
    this.gateway.on("packet", this.handleOnGatewayPacket.bind(this));
  }

  async connect(): Promise<void> {
    const { gateway } = this;

    await gateway.spawnShards();
  }

  isReady(): this is Client<true> {
    return this.ready;
  }
}
