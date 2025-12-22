import type { Client } from "#client/index.js";
import {
	parseAvatarDecorationData,
	parseCollectibles,
	parseDisplayNameStyles,
	parsePrimaryGuild,
} from "#transformers/Users.js";
import type {
	APIUser,
	AvatarDecorationData,
	Collectibles,
	DisplayNameStyles,
	PrimaryGuild,
	Snowflake,
} from "#types/index.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { BitFieldResolver, FormatterUtils } from "#utils/index.js";
import { Base } from "./Base.js";

const { hexColor, userMention } = FormatterUtils;

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
	accentColor: number | null;
	/** The avatar hash of the user, if any. */
	avatar: string | null;
	/** The avatar decoration data of the user, if any. */
	avatarDecorationData: AvatarDecorationData | null;
	/** The banner hash of the user, if any. */
	banner: string | null;
	/** The collectibles data of the user. */
	collectibles: Collectibles;
	/** The display name styles data of the user, if any. */
	displayNameStyles: DisplayNameStyles | null;
	/** The flags of the user. */
	flags: BitFieldResolver;
	/** The display name of the user, if any. */
	globalName: string | null;
	/** The primary guild data of the user, if any. */
	primaryGuild: PrimaryGuild | null;
	/** The username of the user. */
	username: string;

	constructor(client: Client, data: APIUser) {
		super(client);

		const {
			accent_color,
			avatar,
			avatar_decoration_data,
			banner,
			bot,
			collectibles,
			discriminator,
			display_name_styles,
			flags,
			global_name,
			id,
			primary_guild,
			system,
			username,
		} = data;

		this.accentColor = accent_color ?? null;
		this.avatar = avatar;
		this.avatarDecorationData = parseAvatarDecorationData(avatar_decoration_data ?? null);
		this.banner = banner ?? null;
		this.bot = Boolean(bot);
		this.collectibles = parseCollectibles(collectibles ?? null);
		this.discriminator = discriminator;
		this.displayNameStyles = parseDisplayNameStyles(display_name_styles ?? null);
		this.flags = new BitFieldResolver(flags);
		this.globalName = global_name;
		this.id = id;
		this.primaryGuild = parsePrimaryGuild(primary_guild ?? null);
		this.system = Boolean(system);
		this.username = username;
	}

	/** The accent color of the user represented in a hex color, if any. */
	get accentColorHex() {
		return this.accentColor ? hexColor(this.accentColor) : null;
	}

	/** The formatted mention of the user. */
	get mention() {
		return userMention(this.id);
	}

	protected patch(data?: Partial<APIUser>): void {
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
			this.avatarDecorationData = parseAvatarDecorationData(avatar_decoration_data);
		}

		if (!isUndefined(banner)) {
			this.banner = banner;
		}

		if (!isUndefined(collectibles)) {
			this.collectibles = parseCollectibles(collectibles);
		}

		if (!isUndefined(display_name_styles)) {
			this.displayNameStyles = parseDisplayNameStyles(display_name_styles);
		}

		if (!isUndefined(flags)) {
			this.flags = new BitFieldResolver(flags);
		}

		if (!isUndefined(global_name)) {
			this.globalName = global_name;
		}

		if (!isUndefined(primary_guild)) {
			this.primaryGuild = parsePrimaryGuild(primary_guild);
		}

		if (!isUndefined(username)) {
			this.username = username;
		}
	}
}
