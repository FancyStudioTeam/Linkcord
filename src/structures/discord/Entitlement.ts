import type { APIEntitlement, EntitlementTypes, Snowflake } from "@fancystudioteam/linkcord-types";
import { Base } from "./base/Base.js";

/**
 * @public
 */
export class Entitlement extends Base {
  applicationId: Snowflake;
  consumed: boolean;
  deleted: boolean;
  endsAt: Date | null;
  guildId: Snowflake | null;
  skuId: Snowflake;
  startsAt: Date | null;
  type: EntitlementTypes;
  userId: Snowflake | null;

  constructor(id: Snowflake, data: APIEntitlement) {
    super(id);

    this.applicationId = data.application_id;
    this.consumed = Boolean(data.consumed);
    this.deleted = Boolean(data.deleted);
    this.endsAt = data.ends_at ? new Date(data.ends_at) : null;
    this.guildId = data.guild_id ?? null;
    this.skuId = data.sku_id;
    this.startsAt = data.starts_at ? new Date(data.starts_at) : null;
    this.type = data.type;
    this.userId = data.user_id ?? null;
  }
}
