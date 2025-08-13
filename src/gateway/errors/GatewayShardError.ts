import type { GatewayShard } from "#gateway/structures/GatewayShard.js";

/**
 * Represents an error thrown by a {@link GatewayShard | `GatewayShard`}.
 * @group Gateway/Errors
 * @public
 */
export class GatewayShardError extends Error {
	/**
	 * The ID of the {@link GatewayShard | `GatewayShard`} that caused the
	 * error.
	 */
	readonly shardId: number;

	constructor(message: string, shardId: number) {
		super(message);

		this.shardId = shardId;
	}
}
