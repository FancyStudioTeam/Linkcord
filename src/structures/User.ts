import type { Client } from "#client/index.js";
import { parseAvatarDecoration, parseCollectibles, parsePrimaryGuild } from "#transformers/Users.js";
import type { APIUser, AvatarDecorationData, Collectibles, PrimaryGuild, Snowflake } from "#types/index.js";
import { BitFieldResolver } from "#utils/index.js";
import { Base } from "./Base.js";

/**
 * Represents a Discord user object.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 *
 * @group Structures/Classes
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
	 * @param client - The client that instantiated the {@link User | `User`} instance.
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
	 * @param data - The updated data for the current {@link User | `User`} instance.
	 */
	protected patch(data: Partial<APIUser> = {}): void {
		const {
			accent_color: accentColor,
			avatar,
			avatar_decoration_data: avatarDecorationData,
			banner,
			collectibles,
			flags,
			global_name: globalName,
			primary_guild: primaryGuild,
			username,
		} = data;

		if (accentColor !== undefined) this.accentColor = accentColor;
		if (avatar !== undefined) this.avatar = avatar;
		if (avatarDecorationData !== undefined) this.avatarDecorationData = parseAvatarDecoration(avatarDecorationData);
		if (banner !== undefined) this.banner = banner;
		if (collectibles !== undefined) this.collectibles = parseCollectibles(collectibles);
		if (flags !== undefined) this.flags = new BitFieldResolver(flags);
		if (globalName !== undefined) this.globalName = globalName;
		if (primaryGuild !== undefined) this.primaryGuild = parsePrimaryGuild(primaryGuild);
		if (username !== undefined) this.username = username;
	}
}
