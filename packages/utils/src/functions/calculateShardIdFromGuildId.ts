/**
 * Calculates the shard id from a guild id.
 * @param shardCount - The shard count of the client or gateway manager.
 * @param guildId - The guild id to get its shard id.
 * @returns The shard id of the guild.
 */
export const calculateShardIdFromGuildId = (shardCount: number, guildId: string): number => {
  const guildIdBigInt = BigInt(guildId);

  /**
   * @see https://discord.com/developers/docs/events/gateway#sharding-sharding-formula
   */
  return Number(guildIdBigInt >> 22n) % shardCount;
};
