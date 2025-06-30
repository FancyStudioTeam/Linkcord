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
        this.description = description ?? null;
        this.flags = new BitFieldResolver(flags);
        this.hoist = Boolean(hoist);
        this.icon = icon ?? null;
        this.managed = Boolean(managed);
        this.mentionable = Boolean(mentionable);
        this.name = name;
        this.permissions = permissions;
        this.position = position;
        this.tags = GuildTransformer.transformRoleTags(tags);
        this.unicodeEmoji = unicode_emoji ?? null;
    }
}
