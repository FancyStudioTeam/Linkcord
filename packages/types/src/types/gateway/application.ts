import type { APIApplication } from "#types/payloads";

export interface GatewayApplication extends Required<Pick<APIApplication, "flags" | "id">> {}
