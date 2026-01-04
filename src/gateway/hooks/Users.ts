/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 *
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */

import { isDeepStrictEqual } from 'node:util';
import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { Uncached } from '#structures/Uncached.js';
import { User } from '#structures/User.js';
import type { GatewayDispatchPresenceUpdateEventPayload, GatewayDispatchUserUpdateEventPayload } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export function PRESENCE_UPDATE(client: Client, gatewayShard: GatewayShard, presencePayload: GatewayDispatchPresenceUpdateEventPayload) {
	const { cache, events } = client;
	const { users } = cache;

	const { user } = presencePayload;
	const { id: userId } = user;

	const cachedUser = users.get(userId);

	if (cachedUser) {
		const oldUser = cachedUser['clone']();

		cachedUser['patch'](user);

		/*
		 * User after patch may still be the same as the old one.
		 * If this happens, do not emit the event.
		 */
		if (!isDeepStrictEqual(oldUser, cachedUser)) {
			events.emit(ClientEvents.UserUpdate, {
				gatewayShard,
				newUser: cachedUser,
				oldUser,
			});
		}
	}
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export function USER_UPDATE(client: Client, gatewayShard: GatewayShard, userPayload: GatewayDispatchUserUpdateEventPayload) {
	const { cache, events } = client;
	const { users } = cache;

	const { id: userId } = userPayload;
	const cachedUser = users.get(userId);

	if (cachedUser) {
		const oldUser = cachedUser['clone']();

		cachedUser['patch'](userPayload);

		/*
		 * When editing the "General Information" of an application in the Discord
		 * Developer Portal, the Discord gateway may emit this event using the same
		 * data as the cached user.
		 *
		 * To avoid emitting a redundant 'USER_UPDATE' event, we must check whether
		 * the patched user's data actually differs from the cached user's data.
		 *
		 * Only if the data is different should we emit the 'USER_UPDATE' event.
		 */
		if (!isDeepStrictEqual(oldUser, cachedUser)) {
			events.emit(ClientEvents.UserUpdate, {
				gatewayShard,
				newUser: cachedUser,
				oldUser,
			});
		}
	} else {
		const newUser = new User(client, userPayload);
		const oldUser = new Uncached(userId);

		users.set(userId, newUser);
		events.emit(ClientEvents.UserUpdate, {
			gatewayShard,
			newUser,
			oldUser,
		});
	}
}
