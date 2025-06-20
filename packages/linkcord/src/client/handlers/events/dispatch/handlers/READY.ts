import type { GatewayDispatchReadyPayload } from "@fancystudioteam/linkcord-types";
import { User } from "../../../../../structures/index.js";
import type { DispatchHandler } from "../dispatchHandlers.js";

/**
 * @internal
 */
export const READY: DispatchHandler<GatewayDispatchReadyPayload> = (client, shard, { guilds, user }) => {
  if (!client.ready) {
    client.ready = true;
    client.user = new User(user.id, user);

    /**
     * biome-ignore lint/complexity/useLiteralKeys: Accessing private
     * properties.
     */
    client["emit"]("ready", {
      shard,
      user: client.user,
    });
  }

  for (const guild of guilds) {
    const { id, unavailable } = guild;

    client.unavailableGuilds.set(id, unavailable);
  }
};
