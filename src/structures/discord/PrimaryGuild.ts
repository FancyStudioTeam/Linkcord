import type { Client } from "#client/Client.js";
import { MISSING_REQUIRED_FIELDS_FROM_DATA } from "#errors/messages.js";
import type { APIPrimaryGuild, JSONPrimaryGuild, Snowflake } from "#types/index.js";
import { Base } from "./base/Base.js";

/**
 * Represents a Discord user primary guild.
 *
 * @public
 */
export class PrimaryGuild extends Base {
	/**
	 * The badge of the primary guild.
	 */
	readonly badge: string;
	/**
	 * Whether the user has its primary guild identity enabled.
	 */
	readonly identityEnabled: boolean;
	/**
	 * The ID of the primary guild.
	 */
	readonly identityGuildId: Snowflake;
	/**
	 * The tag of the primary guild.
	 */
	readonly tag: string;

	/**
	 * Creates a new {@link PrimaryGuild | `PrimaryGuild`} instance.
	 *
	 * @param client - The client that instantiated the primary guild.
	 * @param data - The raw Discord API primary guild data.
	 */
	constructor(client: Client, data: APIPrimaryGuild) {
		super(client);

		const { badge, identity_enabled, identity_guild_id, tag } = data;

		if (!(badge && identity_enabled && identity_guild_id && tag)) {
			throw new TypeError(
				MISSING_REQUIRED_FIELDS_FROM_DATA(
					["badge", "identity_enabled", "identity_guild_id", "tag"],
					"APIPrimaryGuild",
				),
			);
		}

		this.badge = badge;
		this.identityEnabled = identity_enabled;
		this.identityGuildId = identity_guild_id;
		this.tag = tag;
	}

	/**
	 * @internal
	 */
	protected _patch(): void {
		undefined;
	}

	/**
	 * Converts the {@link PrimaryGuild | `PrimaryGuild`} instance to a JSON
	 * object.
	 *
	 * @returns The JSON primary guild data.
	 */
	toJSON(): JSONPrimaryGuild {
		const { badge, identityEnabled, identityGuildId, tag } = this;

		return Object.freeze({
			badge,
			identityEnabled,
			identityGuildId,
			tag,
		});
	}
}
