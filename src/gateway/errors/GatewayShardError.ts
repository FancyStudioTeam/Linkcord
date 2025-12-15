export class GatewayShardError extends Error {
	readonly shardId: number;

	constructor(message: string, shardId: number) {
		super();

		this.message = message;
		this.shardId = shardId;
	}
}
