import type { Client } from '#client/index.js';
import { deserializeRoleColors, deserializeRoleTags } from '#transformers/Permissions/Deserializer.js';
import type { RawRole, RoleColors, RoleTags, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';
import { Base } from './Base.js';

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export class Role extends Base {
	/** The ID of the role. */
	readonly id: Snowflake;

	/** The colors of the role. */
	colors: RoleColors;
	/** The flags of the role. */
	flags: BitField;
	/** Whether the role is displayed separately from online members. */
	hoist: boolean;
	/** The icon of the role, if any. */
	icon: string | null = null;
	/** Whether the role is from an application integration. */
	managed: boolean;
	/** Whether the role can be mentioned. */
	mentionable: boolean;
	/** The name of the role. */
	name: string;
	/** The permissions of the role. */
	permissions: string;
	/** The position of the role. */
	position: number;
	/** The tags of the role. */
	tags: RoleTags;
	/** The unicode emoji of the role, if any. */
	unicodeEmoji?: string | null = null;

	constructor(client: Client, rawRole: RawRole) {
		super(client);

		const { colors, flags, hoist, id, managed, mentionable, name, permissions, position, tags } = rawRole;

		this.colors = deserializeRoleColors(colors);
		this.flags = new BitField(flags);
		this.hoist = hoist;
		this.id = id;
		this.managed = managed;
		this.mentionable = mentionable;
		this.name = name;
		this.permissions = permissions;
		this.position = position;
		this.tags = deserializeRoleTags(tags ?? {});
		this.patch(rawRole);
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
	 * Patches the current {@link Role} instance with the provided
	 * {@link RawRole} structure.
	 */
	protected patch(rawRole: Partial<RawRole>): void {
		const { colors, flags, hoist, icon, managed, mentionable, name, permissions, position, tags, unicode_emoji } = rawRole;

		if (!isUndefined(colors)) {
			this.colors = deserializeRoleColors(colors);
		}

		if (!isUndefined(flags)) {
			this.flags = new BitField(flags);
		}

		if (!isUndefined(hoist)) {
			this.hoist = hoist;
		}

		if (!isUndefined(icon)) {
			this.icon = icon;
		}

		if (!isUndefined(managed)) {
			this.managed = managed;
		}

		if (!isUndefined(mentionable)) {
			this.mentionable = mentionable;
		}

		if (!isUndefined(name)) {
			this.name = name;
		}

		if (!isUndefined(permissions)) {
			this.permissions = permissions;
		}

		if (!isUndefined(position)) {
			this.position = position;
		}

		if (!isUndefined(tags)) {
			this.tags = deserializeRoleTags(tags);
		}

		if (!isUndefined(unicode_emoji)) {
			this.unicodeEmoji = unicode_emoji;
		}
	}
}
