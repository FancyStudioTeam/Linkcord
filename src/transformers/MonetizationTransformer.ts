import { Entitlement } from "#structures/index.js";
import type { APIEntitlement, Snowflake } from "#types/index.js";

/**
 * @internal
 */
export class MonetizationTransformer {
    /**
     * @internal
     */
    static transformEntitlementsMap(entitlements: APIEntitlement[]): Map<Snowflake, Entitlement> {
        const transformedEntitlements = entitlements.map(
            (entitlement) => new Entitlement(entitlement.id, entitlement),
        );
        const entitlementsMap = transformedEntitlements.map<[Snowflake, Entitlement]>(
            (entitlement) => [entitlement.id, entitlement],
        );

        return new Map(entitlementsMap);
    }
}
