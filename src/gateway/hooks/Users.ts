/* biome-ignore-all lint/style/useNamingConvention: Function names must be the exact name as the corresponding dispatch event. */
/* biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket notation when accessing private or protected members from some structures. */

/*import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Uncached, User } from "#structures/index.js";
import type { GatewayDispatchUserUpdatePayload } from "#types/index.js";*/

/**
 * Handles the received `USER_UPDATE` event from the gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param userData - The received data from the `USER_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
/*export function USER_UPDATE(
	client: Client,
	_shard: GatewayShard,
	userData: GatewayDispatchUserUpdatePayload,
): void {
	const { events, users } = client;
	const { cache: usersCache } = users;
	const { id: userId } = userData;

	const cachedUser = usersCache.get(userId);
	const newUser = new User(client, userData);
	// Clone the cached user to prevent mutating the original instance.
	// If the user is not cached, create a new `Uncached` instance.
	const oldUser = cachedUser?.["_clone"]() ?? new Uncached(userId);

	users["__patch__"](userId, userData);
	events.emit(ClientEvents.UserUpdate, newUser, oldUser);
}*/
