import type { Client } from "#client/Client.js";
import { UserTransformer } from "#structures/transformers/UserTransformer.js";
import type { APIUser, Snowflake } from "#types/index.js";
import type {
	AvatarDecorationData,
	JSONUser,
	PrimaryGuild,
	UserCollectibles,
} from "#types/parsed/Users.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./base/Base.js";

/**
 * Represents a Discord user.
 *
 * @public
 */
export class User extends Base {
	/**
	 * The accent color of the user.
	 */
	accentColor!: number | null;
	/**
	 * The avatar of the user, if any.
	 */
	avatar!: string | null;
	/**
	 * The avatar decoration data of the user, if any.
	 */
	avatarDecorationData!: AvatarDecorationData | null;
	/**
	 * The banner of the user, if any.
	 */
	banner!: string | null;
	/**
	 * Whether the user is a bot.
	 */
	readonly bot: boolean;
	/**
	 * The collectibles of the user.
	 */
	collectibles!: UserCollectibles | null;
	/**
	 * The discriminator of the user.
	 */
	discriminator!: string;
	/**
	 * The flags of the user.
	 */
	flags: BitFieldResolver | null;
	/**
	 * The ID of the user.
	 */
	readonly id: Snowflake;
	/**
	 * The primary guild of the user, if any.
	 */
	primaryGuild!: PrimaryGuild | null;
	/**
	 * Whether the user is a system user.
	 */
	readonly system: boolean;
	/**
	 * The username of the user.
	 */
	username!: string;

	/**
	 * Creates a new {@link User} instance from raw Discord API data.
	 *
	 * @param client - The client that instantiated the user.
	 * @param data - The raw Discord API user data.
	 */
	constructor(client: Client, data: APIUser) {
		super(client);

		const { bot, discriminator, id, system, username } = data;

		this.bot = bot ?? false;
		this.discriminator = discriminator;
		this.flags = null;
		this.id = id;
		this.system = system ?? false;
		this.username = username;
		this._patch(data);
	}

	/**
	 * Patches the user properties with the given data.
	 *
	 * @param data - The data to use when patching the user properties.
	 *
	 * @internal
	 */
	private _patch(data: UserData = {}): void {
		const {
			accent_color,
			avatar,
			avatar_decoration_data,
			banner,
			collectibles,
			discriminator,
			flags,
			primary_guild,
			username,
		} = data;

		if (accent_color) {
			this.accentColor = accent_color;
		} else {
			this.accentColor ??= null;
		}

		if (avatar) {
			this.avatar = avatar;
		} else {
			this.avatar ??= null;
		}

		if (avatar_decoration_data) {
			this.avatarDecorationData =
				UserTransformer.transformAvatarDecorationData(avatar_decoration_data);
		} else {
			this.avatarDecorationData ??= null;
		}

		if (banner) {
			this.banner = banner;
		} else {
			this.banner ??= null;
		}

		if (collectibles) {
			this.collectibles = UserTransformer.transformCollectibles(collectibles);
		} else {
			this.collectibles ??= null;
		}

		if (discriminator) {
			this.discriminator = discriminator;
		}

		if (flags) {
			this.flags = new BitFieldResolver(flags);
		}

		if (primary_guild) {
			this.primaryGuild = UserTransformer.transformPrimaryGuild(primary_guild);
		} else {
			this.primaryGuild ??= null;
		}

		if (username) {
			this.username = username;
		}
	}

	/**
	 * Converts the {@link User} instance to a JSON object.
	 *
	 * @returns The JSON user data.
	 */
	toJSON(): JSONUser {
		const {
			accentColor,
			avatar,
			avatarDecorationData,
			banner,
			bot,
			collectibles,
			discriminator,
			flags,
			id,
			primaryGuild,
			system,
			username,
		} = this;

		return Object.freeze({
			accentColor,
			avatar,
			avatarDecorationData,
			banner,
			bot,
			collectibles,
			discriminator,
			flags,
			id,
			primaryGuild,
			system,
			username,
		});
	}
}

/**
 * @internal
 */
type UserData = Partial<APIUser>;
