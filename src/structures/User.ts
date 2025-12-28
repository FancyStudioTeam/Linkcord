import type { Client } from '#client/index.js';
import {
	deserializeAvatarDecorationData,
	deserializeUserCollectibles,
	deserializeUserDisplayNameStyles,
	deserializeUserPrimaryGuild,
} from '#transformers/Users/Deserializer.js';
import type { AvatarDecorationData, RawUser, Snowflake, UserCollectibles, UserDisplayNameStyles, UserPrimaryGuild } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { BitField, hexColor, userMention } from '#utils/index.js';
import { Base } from './Base.js';

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export class User extends Base {
	/** Whether the user belongs to an OAuth2 application. */
	readonly bot: boolean;
	/** The discriminator of the user. */
	readonly discriminator: string;
	/** The ID of the user. */
	readonly id: Snowflake;
	/** Whether the user belongs to the Discord system. */
	readonly system: boolean;

	/** The accent color of the user represented in decimal, if any. */
	accentColor: number | null = null;
	/** The avatar hash of the user, if any. */
	avatar: string | null = null;
	/** The avatar decoration data of the user, if any. */
	avatarDecorationData: AvatarDecorationData | null = null;
	/** The banner hash of the user, if any. */
	banner: string | null = null;
	/** The collectibles data of the user, if any. */
	collectibles: UserCollectibles | null = null;
	/** The display name styles data of the user, if any. */
	displayNameStyles: UserDisplayNameStyles | null = null;
	/** The flags of the user. */
	flags: BitField;
	/** The display name of the user, if any. */
	globalName: string | null = null;
	/** The primary guild data of the user, if any. */
	primaryGuild: UserPrimaryGuild | null = null;
	/** The username of the user. */
	username: string;

	constructor(client: Client, rawUser: RawUser) {
		super(client);

		const { bot, discriminator, flags, id, system, username } = rawUser;

		this.bot = Boolean(bot);
		this.discriminator = discriminator;
		this.flags = new BitField(flags);
		this.id = id;
		this.system = Boolean(system);
		this.username = username;
		this.patch(rawUser);
	}

	/** The accent color of the user represented in a hex color, if any. */
	get accentColorHex() {
		return this.accentColor ? hexColor(this.accentColor) : null;
	}

	/** The formatted mention of the user. */
	get mention() {
		return userMention(this.id);
	}

	/**
	 * Patches the current {@link User} instance with the provided data.
	 */
	protected patch(data?: Partial<RawUser>): void {
		const {
			accent_color,
			avatar,
			avatar_decoration_data,
			banner,
			collectibles,
			display_name_styles,
			flags,
			global_name,
			primary_guild,
			username,
		} = data ?? {};

		if (!isUndefined(accent_color)) {
			this.accentColor = accent_color;
		}

		if (!isUndefined(avatar)) {
			this.avatar = avatar;
		}

		if (!isUndefined(avatar_decoration_data)) {
			this.avatarDecorationData = deserializeAvatarDecorationData(avatar_decoration_data);
		}

		if (!isUndefined(banner)) {
			this.banner = banner;
		}

		if (!isUndefined(collectibles)) {
			this.collectibles = deserializeUserCollectibles(collectibles);
		}

		if (!isUndefined(display_name_styles)) {
			this.displayNameStyles = deserializeUserDisplayNameStyles(display_name_styles);
		}

		if (!isUndefined(flags)) {
			this.flags = new BitField(flags);
		}

		if (!isUndefined(global_name)) {
			this.globalName = global_name;
		}

		if (!isUndefined(primary_guild)) {
			this.primaryGuild = deserializeUserPrimaryGuild(primary_guild);
		}

		if (!isUndefined(username)) {
			this.username = username;
		}
	}
}
