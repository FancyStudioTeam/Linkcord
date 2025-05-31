import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import { UserTransformer } from "../../../../../transformers/UserTransformer.js";
import type { DispatchHandler } from "../dispatchHandlers.js";

/**
 * @internal
 */
export const READY: DispatchHandler<GatewayDispatchReadyPayload> = (client, _gatewayShard, { guilds, user }) => {
  if (!client.ready) {
    client.ready = true;
  }

  for (const guild of guilds) {
    const { id, unavailable } = guild;

    client.unavailableGuilds.set(id, unavailable);
  }

  client.user = UserTransformer.transformFromRawUser(user);
};
