/*
 * biome-ignore-all lint/style/useNamingConvention: Keys inside `DispatchHooks`
 * must exactly match Discord dispatch event names.
 */

import type { Client } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import type { GatewayDispatchEvent } from '#types/index.js';
import type { Awaitable } from '#utils/index.js';
import { GUILD_CREATE, GUILD_MEMBER_UPDATE, GUILD_UPDATE } from './Guilds.js';
import { MESSAGE_CREATE } from './Messages.js';
import { READY } from './Shard.js';
import { PRESENCE_UPDATE, USER_UPDATE } from './Users.js';

export const DispatchHooks: Partial<DispatchHooksMap> = {
	GUILD_CREATE,
	GUILD_MEMBER_UPDATE,
	GUILD_UPDATE,
	MESSAGE_CREATE,
	PRESENCE_UPDATE,
	READY,
	USER_UPDATE,
};

type DispatchHookFunction<Event extends GatewayDispatchEvent> = (client: Client, shard: GatewayShard, data: Event['d']) => Awaitable<void>;

type DispatchHooksMap = {
	[Dispatch in GatewayDispatchEvent as Dispatch['t']]: DispatchHookFunction<Dispatch>;
};
