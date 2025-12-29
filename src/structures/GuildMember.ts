import type { Client } from '#client/index.js';
import { deserializeAvatarDecorationData } from '#transformers/Users/Deserializer.js';
import type {
	APIGuildMember,
	AvatarDecorationData,
	GatewayDispatchGuildMemberUpdateEventPayload,
	RawUser,
	Snowflake,
} from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Base } from './Base.js';
import { User } from './User.js';

export class GuildMember extends Base {
	/** The ID of the member. */
	readonly id: Snowflake;

	/** The avatar decoration data of the member, if any. */
	avatarDecorationData: AvatarDecorationData | null = null;
	/** The nickname of the member, if any. */
	nick: string | null = null;

	constructor(client: Client, data: APIGuildMember | GatewayDispatchGuildMemberUpdateEventPayload) {
		super(client);

		const { user } = data;
		const { id } = user;

		this.#handleUser(user);

		this.id = id;
		this.patch(data);
	}

	#handleUser(rawUser: RawUser): void {
		const { client } = this;
		const { cache } = client;
		const { users } = cache;

		const { id: userId } = rawUser;
		const cachedUser = users.get(userId);

		if (!cachedUser) {
			users.set(userId, new User(client, rawUser));
		}
	}

	protected patch(data?: Partial<APIGuildMember>): void {
		const { avatar_decoration_data, nick } = data ?? {};

		if (!isUndefined(avatar_decoration_data)) {
			this.avatarDecorationData = deserializeAvatarDecorationData(avatar_decoration_data);
		}

		if (!isUndefined(nick)) {
			this.nick = nick;
		}
	}
}
