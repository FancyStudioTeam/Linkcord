import type { Client } from "#client/index.js";
import type { APIEntitlement, EntitlementTypes, JSONEntitlement, Snowflake } from "#types/index.js";
import { Base } from "./Base.js";

/**
 * Represents a Discord entitlement.
 * @public
 */
export class Entitlement extends Base {
	/**
	 * The ID of the application that the entitlement belongs.
	 */
	readonly applicationId: Snowflake;
	/**
	 * Whether the entitlement was consumed.
	 */
	consumed!: boolean;
	/**
	 * Whether the entitlement was deleted.
	 */
	deleted!: boolean;
	/**
	 * The timestamp at which the entitlement is no longer valid.
	 */
	endsTimestamp!: number | null;
	/**
	 * The ID of the guild at which the entitlement was granted.
	 */
	readonly guildId: Snowflake | null;
	/**
	 * The ID of the entitlement.
	 */
	readonly id: Snowflake;
	/**
	 * The ID of the SKU associated with the entitlement.
	 */
	readonly skuId: Snowflake;
	/**
	 * The timestamp at which the entitlement is valid.
	 */
	startsTimestamp!: number | null;
	/**
	 * The type of the entitlement.
	 */
	readonly type: EntitlementTypes;
	/**
	 * The ID of the user at which the entitlement was granted.
	 */
	readonly userId: Snowflake | null;

	/**
	 * Creates a new {@link Entitlement | `Entitlement`} instance.
	 * @param client - The client that instantiated the entitlement.
	 * @param data - The {@link APIEntitlement | `APIEntitlement`} object.
	 */
	constructor(client: Client, data: APIEntitlement) {
		super(client);

		const { application_id, guild_id, sku_id, id, type, user_id } = data;

		this.applicationId = application_id;
		this.guildId = guild_id ?? null;
		this.id = id;
		this.skuId = sku_id;
		this.type = type;
		this.userId = user_id ?? null;
		this._patch(data);
	}

	/**
	 * Clones the current {@link Entitlement | `Entitlement`} instance.
	 * @returns The cloned {@link Entitlement | `Entitlement`} instance.
	 * @internal
	 */
	protected _clone(): this {
		return super._cloneThis();
	}

	/**
	 * Patches the {@link Entitlement | `Entitlement`} instance with the given
	 * data.
	 * @param data - The data to use when patching the entitlement.
	 * @internal
	 */
	protected _patch(data: EntitlementData): void {
		const { consumed, deleted, ends_at, starts_at } = data;

		if (consumed) {
			this.consumed = consumed;
		} else {
			this.consumed ??= false;
		}

		if (deleted) {
			this.deleted = deleted;
		} else {
			this.deleted ??= false;
		}

		if (ends_at) {
			this.endsTimestamp = Date.parse(ends_at);
		} else {
			this.endsTimestamp ??= null;
		}

		if (starts_at) {
			this.startsTimestamp = Date.parse(starts_at);
		} else {
			this.startsTimestamp ??= null;
		}
	}

	/**
	 * The date at which the entitlement is no longer valid.
	 */
	get endsAt(): Date | null {
		const { endsTimestamp } = this;

		return endsTimestamp ? new Date(endsTimestamp) : null;
	}

	/**
	 * The date at which the entitlement is valid.
	 */
	get startsAt(): Date | null {
		const { startsTimestamp } = this;

		return startsTimestamp ? new Date(startsTimestamp) : null;
	}

	/**
	 * Converts the {@link Entitlement | `Entitlement`} instance to a JSON object.
	 * @returns The {@link JSONEntitlement | `JSONEntitlement`} object.
	 */
	toJSON(): JSONEntitlement {
		const {
			applicationId,
			consumed,
			deleted,
			endsAt,
			endsTimestamp,
			guildId,
			id,
			skuId,
			startsAt,
			startsTimestamp,
			type,
			userId,
		} = this;

		return Object.freeze({
			applicationId,
			consumed,
			deleted,
			endsAt,
			endsTimestamp,
			guildId,
			id,
			skuId,
			startsAt,
			startsTimestamp,
			type,
			userId,
		});
	}
}

/**
 * The available data to patch from an {@link Entitlement | `Entitlement`}
 * instance.
 * @internal
 */
type EntitlementData = Partial<APIEntitlement>;
