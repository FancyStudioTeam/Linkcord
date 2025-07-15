import type { APIPartialApplication } from "#types/discord/payloads/Applications.js";
import type { InviteTargetTypes } from "#types/discord/payloads/Invites.js";
import type { APIUser } from "#types/discord/payloads/Users.js";
import type { ISO8601Date, Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invite-create-invite-create-event-fields
 */
export interface GatewayDispatchInviteCreatePayload {
	channel_id: Snowflake;
	code: string;
	created_at: ISO8601Date;
	guild_id?: Snowflake;
	inviter?: APIUser;
	max_age: number;
	max_uses: number;
	target_application?: APIPartialApplication;
	target_type?: InviteTargetTypes;
	target_user?: APIUser;
	temporary: boolean;
	uses: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invite-create
 */
export type GatewayDispatchInviteCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.InviteCreate,
	GatewayDispatchInviteCreatePayload
>;
