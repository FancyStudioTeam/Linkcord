import type { Snowflake } from "@fancystudioteam/linkcord-types";

export const calculateShardIdFromGuildId = (shardCount: number, guildId: Snowflake): number => {
  const guildIdBigInt = BigInt(guildId);

  /**
   * @see https://discord.com/developers/docs/events/gateway#sharding-sharding-formula
   */
  return Number(guildIdBigInt >> 22n) % shardCount;
};
