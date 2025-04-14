import type { APIApplication } from "#types/payloads";

export interface GatewayApplication extends Pick<APIApplication, "flags" | "id"> {}
