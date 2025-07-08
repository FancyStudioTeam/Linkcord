import { type RawData, WebSocket } from "ws";
import type { Client } from "#client/Client.js";
import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import {
	GATEWAY_URL_BASE,
	GATEWAY_VERSION,
	RECONNECTABLE_CLOSE_CODES,
	SENDABLE_OPCODES,
} from "#gateway/utils/constants.js";
import {
	type ActivityTypes,
	type GatewayDispatch,
	type GatewayEvent,
	type GatewayHeartbeatPayload,
	type GatewayHello,
	type GatewayIdentifyPayload,
	GatewayOpcodes,
	type GatewayPresenceUpdatePayload,
	type GatewayRequestGuildMembersPayload,
	type GatewayResumePayload,
	type GatewayVoiceStateUpdatePayload,
	type StatusTypes,
} from "#types/index.js";
import type { GatewayManager } from "./GatewayManager.js";

/**
 * @public
 */
export class GatewayShard {
	readonly client: Client;
	readonly id: number;
	readonly manager: GatewayManager;

	sequence: number | null = null;
	status = GatewayShardStatus.Disconnected;
	ws: WebSocket | null = null;

	constructor(id: number, manager: GatewayManager) {
		const { client } = manager;

		this.client = client;
		this.id = id;
		this.manager = manager;
	}

	/**
	 * @internal
	 */
	private getWebSocket(): WebSocket {
		const { ws } = this;

		if (!ws || ws.readyState !== ws.OPEN) {
			throw new Error("WebSocket has not been opened or initialized yet.");
		}

		return ws;
	}

	/**
	 * @internal
	 */
	private heartbeat(): void {
		const { sequence } = this;

		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	/**
	 * @internal
	 */
	private identify(): void {
		const { id, manager } = this;
		const { intents, shardCount, token } = manager;

		/**
		 * TODO: Allow using custom values for `properties` and `presence`.
		 */
		this.send(GatewayOpcodes.Identify, {
			intents,
			properties: {
				browser: "Linkcord",
				device: "Linkcord",
				os: "Linkcord",
			},
			shard: [id, shardCount],
			token,
		});
	}

	/**
	 * @internal
	 */
	private emit<Event extends ClientEventsString>(
		name: Event,
		...data: ClientEventsMap[Event]
	): void {
		const { client } = this;
		const { events } = client;

		events.emit(name, ...data);
	}

	/**
	 * @internal
	 */
	private initializeWebSocket(gatewayURL: string = GATEWAY_URL_BASE): void {
		const urlObject = new URL(gatewayURL);
		const { searchParams } = urlObject;

		/**
		 * TODO: Add compression using `zlib`. (?)
		 */
		searchParams.append("v", GATEWAY_VERSION.toString());
		searchParams.append("encoding", "json");

		const ws = new WebSocket(urlObject.toString());

		/**
		 * TODO: Handle when a shard disconnects.
		 */
		this.ws = ws;
		this.ws.on("close", this.onClose.bind(this));
		this.ws.on("message", this.onMessage.bind(this));
		this.ws.on("open", this.onOpen.bind(this));
	}

	/**
	 * @internal
	 */
	private onClose(code: number, reasonBuffer: Buffer): void {
		const reason = reasonBuffer.toString("utf-8");
		const reconnectable = RECONNECTABLE_CLOSE_CODES.includes(code);

		this.emit("shardDisconnected", reason, code, reconnectable, this);
	}

	/**
	 * @internal
	 */
	private async onMessage(bufferData: RawData): Promise<void> {
		const data = bufferData.toString();
		const message = JSON.parse(data) as GatewayEvent;

		this.emit("shardPacket", message, this);

		const { client } = this;

		switch (message.op) {
			case GatewayOpcodes.Dispatch: {
				await this.onMessageDispatch(message, client);

				break;
			}
			case GatewayOpcodes.Hello: {
				this.onMessageHello(message);

				break;
			}
			default:
		}
	}

	/**
	 * @internal
	 */
	private async onMessageDispatch(dispatch: GatewayDispatch, client: Client): Promise<void> {
		const { d, t } = dispatch;

		await DispatchHooks[t]?.(client, this, d as never);
	}

	/**
	 * @internal
	 */
	private onMessageHello(hello: GatewayHello): void {
		const { d } = hello;
		const { heartbeat_interval } = d;

		this.emit("shardHello", heartbeat_interval, this);

		setInterval(this.heartbeat.bind(this), heartbeat_interval);
	}

	/**
	 * @internal
	 */
	private onOpen(): void {
		this.status = GatewayShardStatus.Handshaking;
		this.identify();
	}

	init(): void {
		this.status = GatewayShardStatus.Connecting;
		this.initializeWebSocket();
	}

	send<Opcode extends AnySendableOpcode>(opcode: Opcode, payload: SendPayload[Opcode]): void {
		if (!SENDABLE_OPCODES.includes(opcode)) {
			throw new Error(`Cannot send a non-sendable opcode '${opcode}'.`);
		}

		const ws = this.getWebSocket();
		const stringifiedPayload = JSON.stringify({
			d: payload,
			op: opcode,
		});

		ws.send(stringifiedPayload);
	}

	setPresence(options: PresenceOptions): void {
		const { activities, status } = options;

		this.send(GatewayOpcodes.PresenceUpdate, {
			activities,
			afk: false,
			since: null,
			status,
		});
	}
}

/**
 * @public
 */
export interface ActivityOptions {
	name: string;
	state?: string;
	type: ActivityTypes;
	url?: string;
}

/**
 * @public
 */
export interface PresenceOptions {
	activities: ActivityOptions[];
	status: StatusTypes;
}

/**
 * @internal
 */
type SendPayload = {
	[GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
	[GatewayOpcodes.Identify]: GatewayIdentifyPayload;
	[GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
	[GatewayOpcodes.Resume]: GatewayResumePayload;
	[GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
	[GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestGuildMembersPayload;
	[GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
};

/**
 * @internal
 */
type AnySendableOpcode = (typeof SENDABLE_OPCODES)[number];

/**
 * @public
 */
export enum GatewayShardStatus {
	Connecting = "CONNECTING",
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Ready = "READY",
}
