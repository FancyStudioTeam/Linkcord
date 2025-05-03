export class ShardError extends Error {
  shardId: number;

  constructor(message: string, shardId: number) {
    super(message);

    this.message = message;
    this.shardId = shardId;
  }
}
