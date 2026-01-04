/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 */

import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { GatewayShardStatus } from '#gateway/structures/GatewayShard.types.js';
import { User } from '#structures/index.js';
import type { GatewayDispatchReadyEventPayload } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export function READY(client: Client, gatewayShard: GatewayShard, readyPayload: GatewayDispatchReadyEventPayload): void {
	const { cache, events } = client;
	const { users } = cache;
	const { manager } = gatewayShard;

	const { guilds: initialGuilds, resume_gateway_url, session_id, user: userData } = readyPayload;

	gatewayShard.status = GatewayShardStatus.Ready;
	gatewayShard['resumeGatewayUrl'] = resume_gateway_url;
	gatewayShard['sessionId'] = session_id;

	const initialGuildsSet = gatewayShard['initialGuilds'];

	/*
	 * Set the initial guild IDs for later to check whether the user was
	 * already in the guild when receiving the 'GUILD_CREATE' event.
	 */
	for (const { id: guildId } of initialGuilds) {
		initialGuildsSet.add(guildId);
	}

	const { id: userId } = userData;
	const cachedUser = users.get(userId);

	let user: User;

	if (cachedUser) {
		user = cachedUser;
	} else {
		user = new User(client, userData);
		users.set(userId, user);
	}

	manager['triggerReady'](user);
	events.emit(ClientEvents.GatewayShardReady, {
		gatewayShard,
		user,
	});
}
