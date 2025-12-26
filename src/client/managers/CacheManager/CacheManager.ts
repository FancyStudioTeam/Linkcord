import type { Guild } from '#structures/Guild.js';
import type { User } from '#structures/User.js';
import type { Snowflake } from '#types/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { Collection } from '#utils/index.js';
import type { CacheManagerOptions } from './CacheManager.types.js';

export class CacheManager {
	declare readonly guilds: Collection<Snowflake, Guild>;
	declare readonly users: Collection<Snowflake, User>;

	constructor(options?: CacheManagerOptions) {
		const { collectionLimits } = options ?? {};
		const { guilds: guildsLimit = Infinity, users: usersLimit = Infinity } = collectionLimits ?? {};

		defineReadonlyProperty(this, 'guilds', new Collection(guildsLimit));
		defineReadonlyProperty(this, 'users', new Collection(usersLimit));
	}
}
