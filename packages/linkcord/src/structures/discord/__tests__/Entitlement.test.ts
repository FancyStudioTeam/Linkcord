import { type APIEntitlement, EntitlementTypes } from "@fancystudioteam/linkcord-types";
import { describe, expect, it } from "vitest";
import { Entitlement } from "../Entitlement.js";

const RAW_DISCORD_ENTITLEMENT: APIEntitlement = {
  application_id: "1019653849998299136",
  deleted: false,
  ends_at: null,
  id: "1019653849998299136",
  sku_id: "1019475255913222144",
  starts_at: new Date(1663174818704).toISOString(),
  type: EntitlementTypes.ApplicationSubscription,
};

describe("Class: Entitlement", () => {
  it("Returns an instance of the 'Entitlement' class.", () => {
    const entitlement = new Entitlement(RAW_DISCORD_ENTITLEMENT.id, RAW_DISCORD_ENTITLEMENT);

    expect(entitlement.applicationId).toStrictEqual("1019653849998299136");
    expect(entitlement.consumed).toStrictEqual(false);
    expect(entitlement.deleted).toStrictEqual(false);
    expect(entitlement.endsAt).toStrictEqual(null);
    expect(entitlement.guildId).toStrictEqual(null);
    expect(entitlement.skuId).toStrictEqual("1019475255913222144");
    expect(entitlement.startsAt).toStrictEqual(new Date(1663174818704));
    expect(entitlement.type).toStrictEqual(EntitlementTypes.ApplicationSubscription);
    expect(entitlement.userId).toStrictEqual(null);
  });
});
