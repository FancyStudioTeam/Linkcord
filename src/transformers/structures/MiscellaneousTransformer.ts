import type { Client } from "#client";
import type {
  APIGateway,
  APIGatewayBot,
  APIGatewayBotSessionStartLimit,
  Gateway,
  GatewayBot,
  GatewayBotSessionStartLimit,
} from "#types";
import { Transformer } from "./base/Transformer.js";

export class MiscellaneousTransformer extends Transformer {
  // biome-ignore lint/complexity/noUselessConstructor:
  constructor(client: Client) {
    super(client);
  }

  /** @internal */
  rawGatewayBotSessionStartObjectLimitToParsed(
    rawGatewayBotSessionStartLimit: RawGatewayBotSessionStartLimit,
  ): GatewayBotSessionStartLimit {
    const { max_concurrency, remaining, reset_after, total } = rawGatewayBotSessionStartLimit;
    const gatewayBotSessionStartLimit: GatewayBotSessionStartLimit = {
      maxConcurrency: max_concurrency,
      remaining,
      resetAfter: reset_after,
      total,
    };

    return gatewayBotSessionStartLimit;
  }

  /** @internal */
  rawGatewayBotToParsed(rawGatewayBot: RawGatewayBot): GatewayBot {
    const { session_start_limit, shards, url } = rawGatewayBot;
    const parsedSessionStartLimit = this.rawGatewayBotSessionStartObjectLimitToParsed(session_start_limit);
    const gatewayBot: GatewayBot = {
      sessionStartLimit: parsedSessionStartLimit,
      shards,
      url,
    };

    return gatewayBot;
  }

  /** @internal */
  rawGatewayToParsed(rawGateway: RawGateway): Gateway {
    const { url } = rawGateway;
    const gateway: Gateway = {
      url,
    };

    return gateway;
  }
}

type RawGateway = APIGateway;
type RawGatewayBot = APIGatewayBot;
type RawGatewayBotSessionStartLimit = APIGatewayBotSessionStartLimit;
