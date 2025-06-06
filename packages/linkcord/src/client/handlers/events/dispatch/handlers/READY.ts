import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import { User } from "../../../../../structures/index.js";
import type { DispatchHandler } from "../dispatchHandlers.js";

/**
 * @internal
 */
export const READY: DispatchHandler<GatewayDispatchReadyPayload> = (client, gatewayShard, { guilds, user }) => {
  if (!client.ready) {
    client.ready = true;
    client.emit("ready", gatewayShard);
  }

  for (const guild of guilds) {
    const { id, unavailable } = guild;

    client.unavailableGuilds.set(id, unavailable);
  }

  client.user = new User(user.id, user);
};
