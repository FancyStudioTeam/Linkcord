import type { GatewayDispatchGuildCreateEventData } from "#types/gateway/events";
import type { DiscordGuild, Guild } from "#types/guilds/guild";

export class GuildsTransformer {
  rawGuildToParsed(rawGuild: RawGuild): Guild {
    const { id, name } = rawGuild;
    const guild: Guild = {
      id,
      name,
    };

    return guild;
  }
}

type RawGuild = DiscordGuild | GatewayDispatchGuildCreateEventData;
