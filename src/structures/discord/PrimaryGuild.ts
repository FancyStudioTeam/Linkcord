import type { Client } from "#client/index.js";
import { METHOD_NOT_IMPLEMENTED } from "#errors/messages/General.js";
import { MISSING_REQUIRED_FIELDS_FROM_DATA } from "#errors/messages.js";
import type { APIPrimaryGuild, JSONPrimaryGuild, Snowflake } from "#types/index.js";
import { Base } from "./Base.js";

/**
 * Represents a Discord user primary guild.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 * @group Discord/Structures
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
	 * @param client - The client that instantiated the primary guild.
	 * @param data - The {@link APIPrimaryGuild | `APIPrimaryGuild`} object
	 * from the Discord API.
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
	 * Clones the current {@link PrimaryGuild | `PrimaryGuild`} instance.
	 * @returns The cloned {@link PrimaryGuild | `PrimaryGuild`} instance.
	 * @internal
	 */
	protected _clone(): this {
		return super._cloneThis();
	}

	/**
	 * Patches the {@link PrimaryGuild | `PrimaryGuild`} instance with the
	 * given data.
	 * @internal
	 */
	protected _patch(): void {
		// Use `void` to avoid TypeScript complaining about the return type
		// but still being able to execute the following code.
		return void process.emitWarning(METHOD_NOT_IMPLEMENTED());
	}

	/**
	 * Converts the {@link PrimaryGuild | `PrimaryGuild`} instance to a
	 * {@link JSONPrimaryGuild | `JSONPrimaryGuild`} object.
	 * @returns The {@link JSONPrimaryGuild | `JSONPrimaryGuild`} object.
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
