import type { Client } from "#client/index.js";
import {
	parseAvatarDecoration,
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
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import { BitFieldResolver, FormatterUtils } from "#utils/index.js";
import { Base } from "./Base.js";

const { isUndefined } = AssertionUtils;
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
			accent_color: accentColor,
			avatar,
			avatar_decoration_data: avatarDecorationData,
			banner,
			bot,
			collectibles,
			discriminator,
			display_name_styles: displayNameStyles,
			flags,
			global_name: globalName,
			id,
			primary_guild: primaryGuild,
			system,
			username,
		} = data;

		this.accentColor = accentColor ?? null;
		this.avatar = avatar;
		this.avatarDecorationData = parseAvatarDecoration(avatarDecorationData ?? null);
		this.banner = banner ?? null;
		this.bot = Boolean(bot);
		this.collectibles = parseCollectibles(collectibles ?? null);
		this.discriminator = discriminator;
		this.displayNameStyles = parseDisplayNameStyles(displayNameStyles ?? null);
		this.flags = new BitFieldResolver(flags);
		this.globalName = globalName;
		this.id = id;
		this.primaryGuild = parsePrimaryGuild(primaryGuild ?? null);
		this.system = Boolean(system);
		this.username = username;
	}

	get accentColorHex() {
		return this.accentColor ? hexColor(this.accentColor) : null;
	}

	get mention() {
		return userMention(this.id);
	}

	protected patch(data: Partial<APIUser> = {}): void {
		const {
			accent_color: accentColor,
			avatar,
			avatar_decoration_data: avatarDecorationData,
			banner,
			collectibles,
			display_name_styles: displayNameStyles,
			flags,
			global_name: globalName,
			primary_guild: primaryGuild,
			username,
		} = data;

		if (!isUndefined(accentColor)) {
			this.accentColor = accentColor;
		}

		if (!isUndefined(avatar)) {
			this.avatar = avatar;
		}

		if (!isUndefined(avatarDecorationData)) {
			this.avatarDecorationData = parseAvatarDecoration(avatarDecorationData);
		}

		if (!isUndefined(banner)) {
			this.banner = banner;
		}

		if (!isUndefined(collectibles)) {
			this.collectibles = parseCollectibles(collectibles);
		}

		if (!isUndefined(displayNameStyles)) {
			this.displayNameStyles = parseDisplayNameStyles(displayNameStyles);
		}

		if (!isUndefined(flags)) {
			this.flags = new BitFieldResolver(flags);
		}

		if (!isUndefined(globalName)) {
			this.globalName = globalName;
		}

		if (!isUndefined(primaryGuild)) {
			this.primaryGuild = parsePrimaryGuild(primaryGuild);
		}

		if (!isUndefined(username)) {
			this.username = username;
		}
	}
}
