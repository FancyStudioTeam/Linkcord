import type { Client } from '#client/index.js';
import { deserializeAvatarDecorationData } from '#transformers/Users/Deserializer.js';
import type { AvatarDecorationData, GatewayDispatchGuildMemberUpdateEventPayload, RawGuildMember, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { BitField, Collection } from '#utils/index.js';
import { Base } from './Base.js';
import type { Role } from './Role.js';
import { User } from './User.js';

export class GuildMember extends Base {
	/** The ID of the member. */
	readonly id: Snowflake;
	/** The cached roles of the member. */
	readonly roles: Collection<Snowflake, Role> = new Collection();

	/** The avatar decoration data of the member, if any. */
	avatarDecorationData: AvatarDecorationData | null = null;
	/** The avatar of the member, if any. */
	avatar: string | null = null;
	/** The banner of the member, if any. */
	banner: string | null = null;
	/** Whether the member is deafen. */
	deaf: boolean;
	/** The flags of the member. */
	flags: BitField;
	/** Whether the member is muted. */
	mute: boolean;
	/** The nickname of the member, if any. */
	nick: string | null = null;

	constructor(client: Client, rawGuildMember: RawGuildMember) {
		super(client);

		const { deaf, flags, mute } = rawGuildMember;
		const user = this.#getMemberUser(rawGuildMember);
		const { id } = user;

		this.deaf = deaf;
		this.flags = new BitField(flags);
		this.id = id;
		this.mute = mute;
		this.patch(rawGuildMember);
	}

	#getMemberUser(rawGuildMember: RawGuildMember): User {
		const { user } = rawGuildMember;
		const { client } = this;

		if (!user) {
			throw new TypeError('Received a guild member without user');
		}

		return new User(client, user);
	}

	protected patch(rawGuildMember: Partial<RawGuildMember & GatewayDispatchGuildMemberUpdateEventPayload>): void {
		const { avatar, avatar_decoration_data, banner, deaf, flags, mute, nick } = rawGuildMember;

		if (!isUndefined(avatar)) {
			this.avatar = avatar;
		}

		if (!isUndefined(avatar_decoration_data)) {
			this.avatarDecorationData = deserializeAvatarDecorationData(avatar_decoration_data);
		}

		if (!isUndefined(banner)) {
			this.banner = banner;
		}

		if (!isUndefined(deaf)) {
			this.deaf = deaf;
		}

		if (!isUndefined(flags)) {
			this.flags = new BitField(flags);
		}

		if (!isUndefined(mute)) {
			this.mute = mute;
		}

		if (!isUndefined(nick)) {
			this.nick = nick;
		}
	}
}
