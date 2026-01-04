import type { Client } from '#client/index.js';
import { deserializeAvatarDecorationData } from '#transformers/Users/Deserializer.js';
import type { APIGuildMember, AvatarDecorationData, GatewayDispatchGuildMemberUpdateEventPayload, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Collection } from '#utils/index.js';
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
	/** The nickname of the member, if any. */
	nick: string | null = null;

	constructor(client: Client, rawGuildMember: APIGuildMember) {
		super(client);

		const user = this.#getMemberUser(rawGuildMember);
		const { id } = user;

		this.id = id;
		this.patch(rawGuildMember);
	}

	#getMemberUser(rawGuildMember: APIGuildMember): User {
		const { user } = rawGuildMember;
		const { client } = this;

		if (!user) {
			throw new TypeError('Received a guild member without user');
		}

		return new User(client, user);
	}

	protected patch(data: Partial<APIGuildMember & GatewayDispatchGuildMemberUpdateEventPayload>): void {
		const { avatar_decoration_data, nick } = data;

		if (!isUndefined(avatar_decoration_data)) {
			this.avatarDecorationData = deserializeAvatarDecorationData(avatar_decoration_data);
		}

		if (!isUndefined(nick)) {
			this.nick = nick;
		}
	}
}
