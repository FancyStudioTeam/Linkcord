import type { Client } from "#client/index.js";
import { UsersTransformer } from "#transformers/UsersTransformer.js";
import type {
	APIUser,
	AvatarDecorationData,
	Collectibles,
	PrimaryGuild,
	Snowflake,
} from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./Base.js";

/**
 * Represents a Discord user.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export class User extends Base {
	/** The accent color of the user. */
	accentColor: number | null = null;
	/** The avatar of the user. */
	avatar: string | null = null;
	/** The decoration of the avatar of the user. */
	avatarDecorationData: AvatarDecorationData | null = null;
	/** The banner of the user. */
	banner: string | null = null;
	/** Whether the user is a bot. */
	readonly bot: boolean = false;
	/** The collectibles of the user. */
	collectibles: Collectibles = {};
	/** The discriminator of the user. */
	readonly discriminator: string;
	/** The flags of the user. */
	flags: BitFieldResolver | null = null;
	/** The global name of the user. */
	globalName: string | null = null;
	/** The ID of the user. */
	readonly id: Snowflake;
	/**  The primary guild of the user. */
	primaryGuild: PrimaryGuild | null = null;
	/** Whether the user is from the Discord system. */
	readonly system: boolean = false;
	/** The username of the user. */
	username: string;

	/**
	 * Creates a new {@link User | `User`} instance.
	 * @param client - The client that instantiated the user.
	 * @param data - The {@link APIUser | `APIUser`} object from the Discord API.
	 */
	constructor(client: Client, data: APIUser) {
		super(client);

		const { bot, id, discriminator, system, username } = data;

		this.bot = bot ?? false;
		this.discriminator = discriminator;
		this.id = id;
		this.system = system ?? false;
		this.username = username;
		this.patch(data);
	}

	/**
	 * Patches the current {@link User | `User`} instance with the given data.
	 * @param data - The updated data to use when patching the current {@link User | `User`} instance.
	 */
	protected patch(data: Partial<APIUser> = {}): void {
		const {
			accent_color,
			avatar,
			avatar_decoration_data,
			banner,
			collectibles,
			flags,
			global_name,
			primary_guild,
			username,
		} = data;

		if (accent_color !== undefined) {
			this.accentColor = accent_color;
		}

		if (avatar !== undefined) {
			this.avatar = avatar;
		}

		if (avatar_decoration_data !== undefined) {
			this.avatarDecorationData =
				UsersTransformer.transformAvatarDecorationToParsed(avatar_decoration_data);
		}

		if (banner !== undefined) {
			this.banner = banner;
		}

		if (collectibles !== undefined) {
			this.collectibles = UsersTransformer.transformCollectiblesToParsed(collectibles);
		}

		if (flags !== undefined) {
			this.flags = new BitFieldResolver(flags);
		}

		if (global_name !== undefined) {
			this.globalName = global_name;
		}

		if (primary_guild !== undefined) {
			this.primaryGuild = UsersTransformer.transformPrimaryGuildToParsed(primary_guild);
		}

		if (username !== undefined) {
			this.username = username;
		}
	}
}
