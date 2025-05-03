import { EventEmitter } from "node:events";

export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  connectionProperties: GatewayManagerConnectionProperties;
  options: GatewayManagerOptions;
  token: string;

  constructor(options: GatewayManagerOptions) {
    super();

    this.connectionProperties = options.connection.properties;
    this.options = options;
    this.token = options.token;
  }
}

export interface GatewayManagerOptions {
  connection: GatewayManagerConnection;
  token: string;
}

export interface GatewayManagerConnection {
  intents: number;
  properties: GatewayManagerConnectionProperties;
}

export interface GatewayManagerConnectionProperties {
  browser: string;
  device: string;
  os: string;
}

export interface GatewayManagerEvents {
  debug: [shardId: number, message: string];
  hello: [shardId: number, heartbeatInterval: number];
}
