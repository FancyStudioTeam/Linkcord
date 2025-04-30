export class ShardError extends Error {
  shardId: number;

  constructor(shardId: number) {
    super();

    this.shardId = shardId;
  }
}
