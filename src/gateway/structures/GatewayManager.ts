import type { Client } from "#client/Client.js";
import { GatewayShard } from "./GatewayShard.js";

/**
 * @public
 */
export class GatewayManager {
    readonly client: Client;
    readonly shards = new Map<number, GatewayShard>();

    ready = false;
    shardCount = 0;

    constructor(client: Client) {
        this.client = client;
    }

    get intents(): Readonly<number> {
        const { client } = this;
        const { intents } = client;

        return intents;
    }

    get token(): Readonly<string> {
        const { client } = this;
        const { token } = client;

        return token;
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
    protected setShardCount(shardCount: number): void {
        this.shardCount = shardCount;
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
}
