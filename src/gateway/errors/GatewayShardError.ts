import type { GatewayShard } from "#gateway/structures/GatewayShard.js";

/** Represents an error thrown by a {@link GatewayShard | `GatewayShard`}. */
export class GatewayShardError extends Error {
	/** The ID of the {@link GatewayShard | `GatewayShard`} that caused the error. */
	readonly shardId: number;

	/**
	 * Creates a new {@link GatewayShardError | `GatewayShardError`} instance.
	 * @param message - The error message.
	 * @param shardId - The ID of the {@link GatewayShard | `GatewayShard`} that caused the error.
	 */
	constructor(message: string, shardId: number) {
		super(message);

		this.shardId = shardId;
	}
}
