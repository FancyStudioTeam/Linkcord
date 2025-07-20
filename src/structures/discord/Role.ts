import type { Client } from "#client/Client.js";
import { GuildTransformer } from "#structures/transformers/GuildTransformer.js";
import type { APIRole, JSONRole, RoleColors, RoleTags } from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";

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
	 * Whether the role is hoisted.
	 */
	hoist: boolean;
	/**
	 * The icon of the role.
	 */
	icon!: string | null;
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
	 * Creates a new {@link Role} instance from raw Discord API data.
	 *
	 * @param client - The client that instantiated the role.
	 * @param data - The raw Discord API role data.
	 */
	constructor(client: Client, data: APIRole) {
		super(client);

		const { colors, flags, hoist, managed, mentionable, name, permissions, position } = data;

		this.colors = GuildTransformer.transformRoleColors(colors);
		this.flags = new BitFieldResolver(flags);
		this.hoist = hoist;
		this.managed = managed;
		this.mentionable = mentionable;
		this.name = name;
		this.permissions = permissions;
		this.position = position;
		this._patch(data);
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
	 * Patches the role properties with the given data.
	 *
	 * @param data - The data to use when patching the role properties.
	 *
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
	 * Converts the {@link Role | `Role`} instance to a JSON object.
	 *
	 * @returns The JSON role data.
	 */
	toJSON(): JSONRole {
		const {
			color,
			colors,
			flags,
			hoist,
			icon,
			managed,
			mentionable,
			name,
			permissions,
			position,
			tags,
			unicodeEmoji,
		} = this;

		return {
			color,
			colors,
			flags,
			hoist,
			icon,
			managed,
			mentionable,
			name,
			permissions,
			position,
			tags,
			unicodeEmoji,
		};
	}
}

/**
 * @internal
 */
type RoleData = Partial<APIRole>;
