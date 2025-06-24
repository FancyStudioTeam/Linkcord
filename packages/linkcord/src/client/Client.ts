import { join } from "node:path";
import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import { GatewayManager, type GatewayManagerEvents } from "../gateway/index.js";
import { CommandsLoader } from "../handlers/commands/loaders/CommandsLoader.js";
import type { ClientEventNames, EventData } from "../handlers/events/index.js";
import { EventsLoader } from "../handlers/events/loaders/EventsLoader.js";
import { RESTManager } from "../rest/structures/RESTManager.js";
import type { User } from "../structures/index.js";
import type { If, Snowflake } from "../types/raw/index.js";
import { VoiceManager } from "../voice/structures/VoiceManager.js";
import type { ClientEventsMap } from "./ClientEvents.js";
import { resolveGatewayIntents } from "./functions/resolveGatewayIntents.js";
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
    const { gateway, intents, rest, token, voice } = LinkcordConfiguration.loadConfigurationFile();

    if (!token || !intents) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }

    this.gateway = new GatewayManager({
      ...gateway,
      intents: resolveGatewayIntents(intents),
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
  private watchGateway(): void {
    this.gateway.on("packet", this.handleOnGatewayPacket.bind(this));
  }

  async init(): Promise<void> {
    const { gateway } = this;
    const { locations } = LinkcordConfiguration.getOptions();

    await gateway.spawnShards();

    if (locations) {
      const { base, commands, events } = locations;

      if (events) {
        const eventsFolderPath = join(process.cwd(), base, events);

        await EventsLoader.registerEventsToClient(eventsFolderPath, this);
      }

      if (commands) {
        const commandsFolderPath = join(process.cwd(), base, commands);

        await CommandsLoader.registerCommandsToClient(commandsFolderPath, this);
      }
    }
  }

  isReady(): this is Client<true> {
    return this.ready;
  }
}
