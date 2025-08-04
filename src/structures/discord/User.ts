import type { Client } from "#client/index.js";
import { UserTransformer } from "#structures/transformers/UserTransformer.js";
import type { APIUser, Snowflake } from "#types/index.js";
import type { AvatarDecorationData, JSONUser, UserCollectibles } from "#types/parsed/Users.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./Base.js";
import { PrimaryGuild } from "./PrimaryGuild.js";

/**
 * Represents a Discord user.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 * @group Discord/Structures
 * @public
 */
export class User extends Base {
	/**
	 * The accent color of the user, if any.
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
	flags!: BitFieldResolver | null;
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
	 * Creates a new {@link User | `User`} instance.
	 * @param client - The client that instantiated the user.
	 * @param data - The {@link APIUser | `APIUser`} object from the Discord
	 * API.
	 */
	constructor(client: Client, data: APIUser) {
		super(client);

		const { bot, discriminator, id, system, username } = data;

		this.bot = bot ?? false;
		this.discriminator = discriminator;
		this.id = id;
		this.system = system ?? false;
		this.username = username;
		this._patch(data);
	}

	/**
	 * Patches the {@link User | `User`} instance with the given data.
	 * @param data - The data to patch the instance.
	 * @internal
	 */
	protected _patch(data: UserData = {}): void {
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
		} else {
			this.flags ??= null;
		}

		if (primary_guild) {
			const { client } = this;

			this.primaryGuild = new PrimaryGuild(client, primary_guild);
		} else {
			this.primaryGuild ??= null;
		}

		if (username) {
			this.username = username;
		}
	}

	/**
	 * Converts the {@link User | `User`} instance to a
	 * {@link JSONUser | `JSONUser`} object.
	 * @returns The {@link JSONUser | `JSONUser`} object.
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
 * The available data for patching a {@link User | `User`} instance.
 * @internal
 */
type UserData = Partial<APIUser>;
