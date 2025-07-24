import type { Client } from "#client/Client.js";
import { Entitlement } from "#structures/index.js";
import type { APIEntitlement, Snowflake } from "#types/index.js";

/**
 * Transformer class for monetization-related data.
 *
 * @internal
 */
export class MonetizationTransformer {
	/**
	 * @internal
	 */
	static transformEntitlementsMap(
		entitlementsData: APIEntitlement[],
		client: Client,
	): Map<Snowflake, Entitlement> {
		const transformedEntitlements = entitlementsData.map(
			(entitlement) => new Entitlement(client, entitlement),
		);

		const entitlementsIteratorMap = transformedEntitlements.map<[Snowflake, Entitlement]>(
			(entitlement) => [entitlement.id, entitlement],
		);
		const entitlementsMap = new Map(entitlementsIteratorMap);

		return entitlementsMap;
	}
}
