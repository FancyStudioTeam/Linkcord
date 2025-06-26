import type { GatewayIntentsString } from "../../configuration/defineConfig.js";
import { GatewayIntents } from "../../types/raw/index.js";

/**
 * @internal
 */
export const resolveGatewayIntents = (
  intentsToResolve: GatewayIntents[] | GatewayIntentsString[] | number,
): number => {
  if (Array.isArray(intentsToResolve)) {
    return intentsToResolve.reduce((accumulator, intent) => {
      if (typeof intent === "string") {
        const intentValue = GatewayIntents[intent];

        if (!intentValue) {
          throw new TypeError(`Intent '${intent}' is not a valid string intent.`);
        }

        accumulator |= intentValue;
      } else {
        accumulator |= intent;
      }

      return accumulator;
    }, 0);
  }

  return intentsToResolve;
};
