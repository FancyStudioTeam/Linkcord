import type { Client } from "#client/Client.js";
import { GuildTransformer } from "#structures/transformers/GuildTransformer.js";
import type { APIRole, JSONRole, RoleColors, RoleTags, Snowflake } from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";
import type { Guild } from "./Guild.js";

/**
 * Represents a Discord role.
 *
 * @public
 */
export class Role extends Base {
	/**
	 * The colors of the role.
	 */
	colors: RoleColors;
	/**
	 * The flags of the role.
	 */
	flags: BitFieldResolver;
	/**
	 * The ID of the guild associated with the role.
	 */
	readonly guildId: Snowflake;
	/**
	 * Whether the role is hoisted.
	 */
	hoist: boolean;
	/**
	 * The icon of the role.
	 */
	icon!: string | null;
	/**
	 * The ID of the role.
	 */
	readonly id: Snowflake;
	/**
	 * Whether the role is managed by an integration.
	 */
	readonly managed: boolean;
	/**
	 * Whether the role can be mentioned.
	 */
	mentionable: boolean;
	/**
	 * The name of the role.
	 */
	name: string;
	/**
	 * The permissions of the role.
	 */
	permissions: string;
	/**
	 * The position of the role.
	 */
	position: number;
	/**
	 * The tags of the role.
	 */
	tags!: RoleTags | null;
	/**
	 * The unicode emoji of the role.
	 */
	unicodeEmoji!: string | null;

	/**
	 * Creates a new {@link Role | `Role`} instance.
	 *
	 * @param client - The client that instantiated the role.
	 * @param data - The raw Discord API role data.
	 * @param guildId - The ID of the guild associated with the role.
	 */
	constructor(client: Client, data: APIRole, guildId: Snowflake) {
		super(client);

		const { colors, flags, hoist, id, managed, mentionable, name, permissions, position } =
			data;

		this.colors = GuildTransformer.transformRoleColors(colors);
		this.flags = new BitFieldResolver(flags);
		this.guildId = guildId;
		this.hoist = hoist;
		this.id = id;
		this.managed = managed;
		this.mentionable = mentionable;
		this.name = name;
		this.permissions = permissions;
		this.position = position;
		this._patch(data);
	}

	/**
	 * @internal
	 */
	protected _patch(data: RoleData = {}): void {
		const {
			colors,
			flags,
			hoist,
			icon,
			mentionable,
			name,
			permissions,
			position,
			tags,
			unicode_emoji,
		} = data;

		if (colors) {
			this.colors = GuildTransformer.transformRoleColors(colors);
		}

		if (flags) {
			this.flags = new BitFieldResolver(flags);
		}

		if (hoist) {
			this.hoist = hoist;
		}

		if (icon) {
			this.icon = icon;
		} else {
			this.icon ??= null;
		}

		if (mentionable) {
			this.mentionable = mentionable;
		}

		if (name) {
			this.name = name;
		}

		if (permissions) {
			this.permissions = permissions;
		}

		if (position) {
			this.position = position;
		}

		if (tags) {
			this.tags = GuildTransformer.transformRoleTags(tags);
		} else {
			this.tags ??= null;
		}

		if (unicode_emoji) {
			this.unicodeEmoji = unicode_emoji;
		} else {
			this.unicodeEmoji ??= null;
		}
	}

	/**
	 * The color of the role.
	 */
	get color(): number {
		const { colors } = this;
		const { primaryColor } = colors;

		return primaryColor;
	}

	/**
	 * Gets or fetches the guild associated with the role.
	 *
	 * @param force - Whether to skip the cache and fetch the guild directly
	 * from the Discord API.
	 *
	 * @returns The guild associated with the role.
	 */
	async fetchGuild(force = false): Promise<Guild> {
		const { client, guildId } = this;
		const { guilds: guildsManager } = client;
		const { cache: guildsCache } = guildsManager;

		let guild: Guild;

		if (!force) {
			/**
			 * Get the guild from the cache if it exists.
			 *
			 * Otherwise, fetch it from the API.
			 */
			guild = guildsCache.get(guildId) ?? (await super._api.getGuild(guildId));
		} else {
			/**
			 * Directly fetch the guild from the API.
			 */
			guild = await super._api.getGuild(guildId);
		}

		return guild;
	}

	/**
	 * Converts the {@link Role | `Role`} instance to a JSON object.
	 *
	 * @returns The JSON role data.
	 */
	toJSON(): JSONRole {
		const {
			color,
			colors,
			flags,
			guildId,
			hoist,
			icon,
			id,
			managed,
			mentionable,
			name,
			permissions,
			position,
			tags,
			unicodeEmoji,
		} = this;

		return Object.freeze({
			color,
			colors,
			flags,
			guildId,
			hoist,
			icon,
			id,
			managed,
			mentionable,
			name,
			permissions,
			position,
			tags,
			unicodeEmoji,
		});
	}
}

/**
 * @internal
 */
type RoleData = Partial<APIRole>;
