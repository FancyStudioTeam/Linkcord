import type { Client } from '#client/index.js';
import { deserializeAvatarDecorationData } from '#transformers/Users/Deserializer.js';
import type { APIGuildMember, AvatarDecorationData, Snowflake } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';
import { Base } from './Base.js';

export class GuildMember extends Base {
	/** The ID of the member. */
	readonly id: Snowflake;

	/** The avatar decoration data of the member, if any. */
	avatarDecorationData: AvatarDecorationData | null = null;

	constructor(client: Client, data: APIGuildMember) {
		super(client);

		const { user } = data;
		const { id } = user;

		this.id = id;
		this.patch(data);
	}

	protected patch(data?: Partial<APIGuildMember>): void {
		const { avatar_decoration_data } = data ?? {};

		if (!isUndefined(avatar_decoration_data)) {
			this.avatarDecorationData = deserializeAvatarDecorationData(avatar_decoration_data);
		}
	}
}
