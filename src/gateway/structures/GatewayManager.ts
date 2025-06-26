import type { Client } from "#client/Client.js";
import { resolveGatewayIntents } from "#client/functions/resolveGatewayIntents.js";
import type { GatewayIntentsString } from "#configuration/defineConfig.js";
import { createReadonlyPropertyDescriptor } from "#gateway/functions/createReadonlyPropertyDescriptor.js";
import { getPropertyDescriptorValue } from "#gateway/functions/getPropertyDescriptorValue.js";
import type { GatewayIntents } from "#types/index.js";
import { GatewayShard } from "./GatewayShard.js";

/**
 * @public
 */
export class GatewayManager {
  readonly client: Client;
  readonly shards = new Map<number, GatewayShard>();

  ready = false;

  constructor(client: Client) {
    this.client = client;
  }

  get intents(): Readonly<number> {
    return Number(getPropertyDescriptorValue(this, "_intents", true));
  }

  get shardCount(): number {
    return Number(getPropertyDescriptorValue(this, "_shardCount") ?? 0);
  }

  get token(): Readonly<string> {
    return String(getPropertyDescriptorValue(this, "_token", true));
  }

  /**
   * @internal
   */
  protected checkReady(): void {
    const { shardCount, shards } = this;

    if (shards.size !== shardCount || this.ready) {
      return;
    }

    this.triggerReady();
  }

  /**
   * @internal
   */
  protected triggerReady(): void {
    const { client } = this;
    const { events } = client;

    this.ready = true;
    events.emit("ready");
  }

  async init(): Promise<void> {
    /**
     * TODO: Fetch shards from gateway information and spawn them.
     */
    const shard = new GatewayShard(0, this);

    shard.init();

    await Promise.resolve();
  }

  setIntents(intents: GatewayIntents[] | GatewayIntentsString[] | number): void {
    const resolvedIntents = resolveGatewayIntents(intents);

    Object.defineProperty(this, "_intents", createReadonlyPropertyDescriptor(resolvedIntents));
  }

  setShardCount(shardCount: number): void {
    Object.defineProperty(this, "_shardCount", createReadonlyPropertyDescriptor(shardCount));
  }

  setToken(token: string): void {
    Object.defineProperty(this, "_token", createReadonlyPropertyDescriptor(token));
  }
}
