import { describe, expect, it } from "vitest";
import { calculateShardIdFromGuildId } from "../calculateShardIdFromGuildId.js";

const GUILD_ID = "613425648685547541";

describe("Function: calculateShardIdFromGuildId", () => {
  it("Returns the shard id from the guild id in a specific amount of shards.", () => {
    expect(calculateShardIdFromGuildId(1, GUILD_ID)).toBe(0);
    expect(calculateShardIdFromGuildId(15, GUILD_ID)).toBe(14);
  });
});
