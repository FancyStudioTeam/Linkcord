/**
 * An error that is thrown when the gateway shard encounters an error.
 *
 * @public
 */
export class GatewayShardError extends Error {
  shardId: number;

  constructor(message: string, shardId: number) {
    super(message);

    this.message = message;
    this.shardId = shardId;
  }
}
