import type { APIGuildMember } from "#types/discord/payloads/Guilds.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayPresence } from "../../presence.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-members-chunk-guild-members-chunk-event-fields
 */
export interface GatewayDispatchGuildMembersChunkPayload {
	chunk_count: number;
	chunk_index: number;
	guild_id: Snowflake;
	members: APIGuildMember[];
	nonce?: string;
	not_found: number[];
	presences: GatewayPresence[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-members-chunk
 */
export type GatewayDispatchGuildMembersChunk = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildMembersChunk,
	GatewayDispatchGuildMembersChunkPayload
>;
