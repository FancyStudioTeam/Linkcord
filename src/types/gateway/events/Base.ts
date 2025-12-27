import type { GatewayOpcodes } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data = null> {
	d: Data;
	op: Opcode;
}
