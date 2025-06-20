import { join } from "node:path";
import { GatewayManager, type GatewayManagerEvents } from "@fancystudioteam/linkcord-gateway";
import { RESTManager } from "@fancystudioteam/linkcord-rest";
import type { GatewayIntents, If, Snowflake } from "@fancystudioteam/linkcord-types";
import { VoiceManager } from "@fancystudioteam/linkcord-voice";
import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import type { ClientEventNames, EventData } from "../handlers/events/index.js";
import { EventsLoader } from "../handlers/events/loaders/EventsLoader.js";
import type { User } from "../structures/index.js";
import type { ClientEventsMap } from "./events.js";
import { handlers } from "./handlers/handlers.js";

/**
 * @public
 */
export class Client<Ready extends boolean = boolean> {
  private events: Map<ClientEventNames, EventData[]> = new Map();

  readonly gateway: GatewayManager;
  readonly rest: RESTManager;
  readonly unavailableGuilds: Map<Snowflake, boolean> = new Map();
  readonly voice: VoiceManager;

  ready: Ready;
  user: If<Ready, User, null> = null as If<Ready, User, null>;

  constructor() {
    const { gateway, intents: unresolvedIntents, rest, token, voice } = LinkcordConfiguration.loadConfigurationFile();

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

  /**
   * @internal
   */
  private emit<ClientEventName extends ClientEventNames>(
    name: ClientEventName,
    ...data: ClientEventsMap[ClientEventName]
  ): void {
    const eventsArray = this.events.get(name);

    if (Array.isArray(eventsArray)) {
      for (const event of eventsArray) {
        event.run(...data);
      }
    }
  }

  /**
   * @internal
   */
  private handleOnGatewayPacket({ gatewayShard, packet }: GatewayManagerEvents["packet"][0]): void {
    const { op } = packet;
    const handler = handlers[op];

    handler?.(this, gatewayShard, packet as never);
  }

  /**
   * @internal
   */
  private resolveGatewayIntents(intents: GatewayIntents[] | number): number {
    return Array.isArray(intents) ? intents.reduce((acc, curr) => acc | curr, 0) : intents;
  }

  /**
   * @internal
   */
  private watch(): void {
    this.watchGateway();
  }

  /**
   * @internal
   */
  private watchGateway(): void {
    this.gateway.on("packet", this.handleOnGatewayPacket.bind(this));
  }

  async init(): Promise<void> {
    const { gateway } = this;
    const { locations } = LinkcordConfiguration.getOptions();

    await gateway.spawnShards();

    if (locations) {
      const { base, events } = locations;

      if (events) {
        const eventsFolderPath = join(process.cwd(), base, events);

        await EventsLoader.registerEventsToClient(eventsFolderPath, this);
      }
    }
  }

  isReady(): this is Client<true> {
    return this.ready;
  }
}
