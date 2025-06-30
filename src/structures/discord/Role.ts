import { GuildTransformer } from "#structures/transformers/GuildTransformer.js";
import type { APIRole, RoleColors, RoleTags, Snowflake } from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";

/**
 * @public
 */
export class Role extends Base {
    color: number;
    colors: RoleColors;
    description: string | null;
    flags: BitFieldResolver;
    hoist: boolean;
    icon: string | null;
    managed: boolean;
    mentionable: boolean;
    name: string;
    permissions: string;
    position: number;
    tags: RoleTags | null;
    unicodeEmoji: string | null;

    constructor(id: Snowflake, data: APIRole) {
        super(id);

        const {
            color,
            colors,
            description,
            flags,
            hoist,
            icon,
            managed,
            mentionable,
            name,
            permissions,
            position,
            tags,
            unicode_emoji,
        } = data;

        this.color = color;
        this.colors = GuildTransformer.transformRoleColors(colors);
        this.description = description;
        this.flags = new BitFieldResolver(flags);
        this.hoist = hoist;
        this.icon = icon ?? null;
        this.managed = managed;
        this.mentionable = mentionable;
        this.name = name;
        this.permissions = permissions;
        this.position = position;
        this.tags = GuildTransformer.transformRoleTags(tags);
        this.unicodeEmoji = unicode_emoji ?? null;
        this.patch(data);
    }

    /**
     * @internal
     */
    private patch(data: RoleData): void {
        const {
            color,
            colors,
            description,
            flags,
            hoist,
            icon,
            managed,
            mentionable,
            name,
            permissions,
            position,
            tags,
            unicode_emoji,
        } = data;

        if (color) {
            this.color = color;
        }

        if (colors) {
            this.colors = GuildTransformer.transformRoleColors(colors);
        }

        if (description) {
            this.description = description;
        }

        if (flags) {
            this.flags = new BitFieldResolver(flags);
        }

        if (hoist) {
            this.hoist = hoist;
        }

        if (icon) {
            this.icon = icon;
        }

        if (managed) {
            this.managed = managed;
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
        }

        if (unicode_emoji) {
            this.unicodeEmoji = unicode_emoji;
        }
    }
}

/**
 * @internal
 */
type RoleData = Partial<APIRole>;
