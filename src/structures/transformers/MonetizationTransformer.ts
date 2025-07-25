import type { Client } from "#client/Client.js";
import { Entitlement } from "#structures/index.js";
import type { APIEntitlement, Snowflake } from "#types/index.js";

/**
 * Transforms a raw Discord API entitlements map into a map of
 * {@link Entitlement | `Entitlement`} instances.
 *
 * @param entitlementsData - The raw Discord API entitlements data.
 * @param client - The client to use when instantiating the
 * 		{@link Entitlement | `Entitlement`} instances.
 *
 * @returns The transformed map of {@link Entitlement | `Entitlement`}
 * instances.
 */
function transformEntitlementsMap(
	entitlementsData: APIEntitlement[],
	client: Client,
): Map<Snowflake, Entitlement> {
	const entitlementsIteratorMap: [Snowflake, Entitlement][] = [];

	for (const entitlement of entitlementsData) {
		const transformedEntitlement = new Entitlement(client, entitlement);
		const { id } = transformedEntitlement;

		entitlementsIteratorMap.push([id, transformedEntitlement]);
	}

	const entitlementsMap = new Map(entitlementsIteratorMap);

	return entitlementsMap;
}

/**
 * Transformers for monetization-related data.
 *
 * @internal
 */
export const MonetizationTransformer = Object.freeze({
	transformEntitlementsMap,
});
