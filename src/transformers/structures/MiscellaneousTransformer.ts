import type { DiscordGatewayBot, GatewayBot } from "#types";

export class MiscellaneousTransformer {
  rawGatewayBotToParsed(rawGatewayBot: DiscordGatewayBot): GatewayBot {
    const { session_start_limit, shards, url } = rawGatewayBot;
    const { max_concurrency, remaining, reset_after, total } = session_start_limit;
    const gatewayBot: GatewayBot = {
      sessionStartLimit: {
        maxConcurrency: max_concurrency,
        remaining: remaining,
        resetAfter: reset_after,
        total: total,
      },
      shards,
      url,
    };

    return gatewayBot;
  }
}
