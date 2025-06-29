import type { APIEntitlement, EntitlementTypes, Snowflake } from "#types/index.js";
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

        const {
            application_id,
            consumed,
            deleted,
            ends_at,
            guild_id,
            sku_id,
            starts_at,
            type,
            user_id,
        } = data;

        this.applicationId = application_id;
        this.consumed = consumed ?? false;
        this.deleted = deleted;
        this.endsAt = ends_at ? new Date(ends_at) : null;
        this.guildId = guild_id ?? null;
        this.skuId = sku_id;
        this.startsAt = starts_at ? new Date(starts_at) : null;
        this.type = type;
        this.userId = user_id ?? null;
    }

    /**
     * @internal
     */
    protected patch(data: EntitlementData): void {
        const {
            application_id,
            consumed,
            deleted,
            ends_at,
            guild_id,
            sku_id,
            starts_at,
            type,
            user_id,
        } = data;

        if (application_id) {
            this.applicationId = application_id;
        }

        if (consumed) {
            this.consumed = consumed;
        }

        if (deleted) {
            this.deleted = deleted;
        }

        if (ends_at) {
            this.endsAt = ends_at ? new Date(ends_at) : null;
        }

        if (guild_id) {
            this.guildId = guild_id;
        }

        if (sku_id) {
            this.skuId = sku_id;
        }

        if (starts_at) {
            this.startsAt = starts_at ? new Date(starts_at) : null;
        }

        if (type) {
            this.type = type;
        }

        if (user_id) {
            this.userId = user_id;
        }
    }
}

/**
 * @internal
 */
type EntitlementData = Partial<APIEntitlement>;
