/**
 * La interfaz "Gateway" representa la estructura parseada de la interfaz "APIGateway".
 * Las estructuras parseadas se diferencian de las estructuras originales por estas razones:
 *   1. Las estructuras parseadas no contienen el prefijo "API" en su nombre.
 *
 *   2. Las estructuras parseadas usan la convención estructural de "camel case".
 *        Un ejemplo sería "session_start_limit" de la estructura "APIGatewayBot".
 *
 *        En su estructura parseada (GatewayBot), la propiedad sería "sessionStartLimit".
 *
 *   3. Las estructuras parseadas pueden contener algunas propiedades opcionales de su estructura original que siempre estarán presentes en la estructura parseada.
 *        Un ejemplo sería "bot" de la estructura "APIUser". En su caso, "bot" es opcional y no siempre estará presente.
 *
 *        En su estructura parseada, "bot" es una propiedad que siempre estará presente, esto debido a que se puede considerar una propiedad "importante" de la estructura.
 *
 *   4. Las propiedades de las estructuras parseadas deben estar documentadas usando la misma documentación que la estructura original.
 *
 *   5. En caso de que una propiedad sea un enum, el enum deberá ser importado desde `@fancystudioteam/linkcord-types`.
 *        Si da problemas de tipado, asegúrese de ejecutar la build de la carpeta `types`.
 *
 *        Una vez hecha la build, no se necesitará instalar de nuevo el paquete `@fancystudioteam/linkcord-types`, esto debido a que PNPM actualiza automáticamente los paquetes del workspace.
 */

/**
 * Represents a parsed gateway structure.
 * @see https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface Gateway {
  /** A gateway url which can be used to connect the bot to the gateway. */
  url: string;
}

/**
 * Represents a parsed gateway bot structure.
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export interface GatewayBot extends Gateway {
  /** The recommended number of shards to use. */
  shards: number;
  /** An object containing information about the session start limit. */
  sessionStartLimit: GatewayBotSessionStartLimit;
}

/**
 * Represents a parsed gateway bot session start limit structure.
 * @see https://discord.com/developers/docs/events/gateway#session-start-limit-object-session-start-limit-structure
 */
export interface GatewayBotSessionStartLimit {
  /** The number of `Identify` request allowed per 5 seconds. */
  maxConcurrency: number;
  /** The number of remaining sessions the bot can start. */
  remaining: number;
  /** The time in seconds after which the limit resets. */
  resetAfter: number;
  /** The total number of sessions the bot can start. */
  total: number;
}
