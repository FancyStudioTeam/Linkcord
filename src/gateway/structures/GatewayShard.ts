/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */
/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */
/*
 * biome-ignore-all lint/nursery/useReadonlyClassProperties: Some private
 * fields are being assigned in the "READY" hook.
 */

import { platform } from "node:process";
import { type CloseEvent, type Data, type MessageEvent, WebSocket } from "ws";
import type { Client } from "#client/index.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { RESUMABLE_CLOSE_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import { LINKCORD_VERSION } from "#index";
import {
	type ActivityTypes,
	type GatewayDispatch,
	type GatewayEvent,
	type GatewayHeartbeatPayload,
	type GatewayHello,
	type GatewayIdentifyPayload,
	type GatewayInvalidSession,
	GatewayOpcodes,
	type GatewayPresenceUpdatePayload,
	type GatewayRequestGuildMembersPayload,
	type GatewayRequestSoundboardSoundsPayload,
	type GatewayResumePayload,
	type GatewayVoiceStateUpdatePayload,
	type StatusTypes,
} from "#types/index.js";
import { GatewayManager } from "./GatewayManager.js";

const GOING_AWAY_CLOSE_CODE = 1001;

/**
 * Represents a shard of the Discord gateway.
 * @group Gateway/Structures
 * @public
 */
export class GatewayShard {
	/**
	 * The URL of the Discord gateway used to resume the session if the shard
	 * is disconnected.
	 */
	private __resumeGatewayURL__: string | null = null;
	/**
	 * The number of the sequence received from the `DISPATCH` event.
	 */
	private __sequence__: number | null = null;
	/**
	 * The ID of the session of the gateway shard.
	 */
	private __sessionId__: string | null = null;

	/**
	 * The client of the gateway shard.
	 */
	readonly client: Client;
	/**
	 * The ID of the gateway shard.
	 */
	readonly id: number;
	/**
	 * The gateway manager of the gateway shard.
	 */
	readonly manager: GatewayManager;

	/**
	 * The timestamp of the last heartbeat received from the gateway.
	 */
	lastHeartbeatReceivedAt = 0;
	/**
	 * The timestamp of the last heartbeat sent to the gateway.
	 */
	lastHeartbeatSentAt = 0;
	/**
	 * The current status of the gateway shard.
	 */
	status = GatewayShardStatus.Disconnected;
	/**
	 * The `WebSocket` instance used to interact with the gateway.
	 */
	ws: WebSocket | null = null;

	/**
	 * Creates a new {@link GatewayShard | `GatewayShard`} instance.
	 * @param id - The ID of the shard.
	 * @param manager - The gateway manager that instantiated the gateway
	 * 	shard.
	 */
	constructor(id: number, manager: GatewayManager) {
		const { client } = manager;

		this.client = client;
		this.id = id;
		this.manager = manager;
	}

	/**
	 * Gets the default browser to use when identifying the shard.
	 * @internal
	 */
	private static get DEFAULT_BROWSER(): string {
		return "Discord Client" as const;
	}

	/**
	 * Gets the default device to use when identifying the shard.
	 * @internal
	 */
	private static get DEFAULT_DEVICE(): string {
		return `Linkcord v${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord)` as const;
	}

	/**
	 * Gets the default operating system when identifying the shard.
	 * @internal
	 */
	private static get DEFAULT_OPERATING_SYSTEM(): string {
		return platform;
	}

	/**
	 * Converts the given `Data` object to a `Buffer`.
	 * @param data - The `Data` object to convert.
	 * @returns The converted `Buffer`.
	 * @internal
	 */
	private __convertMessageDataToBuffer__(data: Data): Buffer {
		if (typeof data === "string") {
			return Buffer.from(data);
		}

		if (data instanceof ArrayBuffer) {
			return Buffer.from(data);
		}

		if (Array.isArray(data)) {
			return Buffer.concat(data);
		}

		return data;
	}

	/**
	 * Gets the initialized `WebSocket` instance.
	 * @internal
	 */
	private __getWebSocket__(): WebSocket {
		const { ws } = this;
		const { OPEN } = WebSocket;

		if (!ws || ws.readyState !== OPEN) {
			throw new Error("WebSocket has not been opened or initialized yet.");
		}

		return ws;
	}

	/**
	 * Sends a `HEARTBEAT` packet to the gateway.
	 * @internal
	 */
	private __heartbeat__(): void {
		const { __name__, __sequence__, manager } = this;

		manager["__debug__"](
			`[GatewayShard] Sending a "HEARTBEAT" packet from "${__name__}" to the Discord gateway...`,
		);

		this.lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, __sequence__);
	}

	/**
	 * Sends an `IDENTIFY` packet to the gateway.
	 * @internal
	 */
	private __identify__(): void {
		const { __name__, id, manager } = this;
		const { intents, token } = manager;

		const shardCount = manager["__shardsToSpawn__"];

		manager["__debug__"](
			`[GatewayShard] Sending an "IDENTIFY" packet from "${__name__}" to the Discord gateway...`,
		);

		const { DEFAULT_BROWSER, DEFAULT_DEVICE, DEFAULT_OPERATING_SYSTEM } = GatewayShard;

		this.send(GatewayOpcodes.Identify, {
			intents,
			properties: {
				browser: DEFAULT_BROWSER,
				device: DEFAULT_DEVICE,
				os: DEFAULT_OPERATING_SYSTEM,
			},
			shard: [id, shardCount],
			token,
		});
	}

	/**
	 * Initializes the `WebSocket` instance to interact with the Discord
	 * gateway.
	 * @param gatewayURL - The URL of the Discord gateway.
	 * @internal
	 */
	private __initializeWebSocket__(gatewayURL = GatewayManager.GATEWAY_URL_BASE): void {
		const urlObject = new URL(gatewayURL);

		const { searchParams } = urlObject;
		const { __name__, manager } = this;

		const gatewayVersionString = String(GatewayManager.GATEWAY_VERSION);

		searchParams.append("encoding", "json");
		searchParams.append("v", gatewayVersionString);

		const gatewayURLString = urlObject.toString();

		manager["__debug__"](
			`[GatewayShard] Handshaking "${__name__}" with the Discord gateway using URL "${gatewayURLString}".`,
		);

		this.ws = new WebSocket(gatewayURLString);
		this.ws.onclose = this.__onClose__.bind(this);
		this.ws.onmessage = this.__onMessage__.bind(this);
		this.ws.onopen = this.__onOpen__.bind(this);
	}

	/**
	 * Handles when the gateway shard disconnects.
	 * @param code - The close code of the disconnection.
	 * @param reason - The reason of the disconnection.
	 * @internal
	 */
	private __onClose__({ code, reason }: CloseEvent): void {
		this.status = GatewayShardStatus.Disconnected;

		const isReconnectable =
			RESUMABLE_CLOSE_CODES.includes(code) || code === GOING_AWAY_CLOSE_CODE;

		const { __name__, __resumeGatewayURL__, manager } = this;

		const debugMessage = isReconnectable
			? `[GatewayShard] Session from "${__name__}" has been closed. Session can be resumed, attempting to resume...`
			: `[GatewayShard] Session from "${__name__}" has been closed. Session cannot be resumed, attempting to identify...`;

		manager["__emit__"]("shardDisconnected", reason, code, isReconnectable, this);
		manager["__debug__"](debugMessage);

		this.__initializeWebSocket__(
			isReconnectable && __resumeGatewayURL__ ? __resumeGatewayURL__ : undefined,
		);
	}

	/**
	 * Handles when a message is received from the gateway.
	 * @param data - The received data from the `WebSocket`.
	 * @internal
	 */
	private async __onMessage__({ data }: MessageEvent): Promise<void> {
		const convertedBufferData = this.__convertMessageDataToBuffer__(data);
		const bufferString = convertedBufferData.toString();

		const message = JSON.parse(bufferString) as GatewayEvent;

		const { s: sequence } = message;
		const { manager } = this;

		manager["__emit__"]("shardPacket", message, this);

		this.__sequence__ = sequence;

		switch (message.op) {
			case GatewayOpcodes.Dispatch: {
				await this.__onMessageDispatch__(message);

				break;
			}
			case GatewayOpcodes.HeartbeatAck: {
				this.__onMessageHeartbeatAck__();

				break;
			}
			case GatewayOpcodes.Hello: {
				this.__onMessageHello__(message);

				break;
			}
			case GatewayOpcodes.InvalidSession: {
				this.__onMessageInvalidSession__(message);

				break;
			}
			case GatewayOpcodes.Reconnect: {
				this.__onMessageReconnect__();

				break;
			}
			default:
		}
	}

	/**
	 * Handles when the gateway shard receives a `DISPATCH` packet.
	 * @param dispatch - The `DISPATCH` packet.
	 * @internal
	 */
	private async __onMessageDispatch__(dispatch: GatewayDispatch): Promise<void> {
		const { client } = this;
		const { d, t } = dispatch;

		const hook = DispatchHooks[t];

		if (hook) {
			await hook(client, this, d as never);
		}
	}

	/**
	 * Handles when the gateway shard receives a `HEARTBEAT_ACK` packet.
	 * @internal
	 */
	private __onMessageHeartbeatAck__(): void {
		this.lastHeartbeatReceivedAt = Date.now();
	}

	/**
	 * Handles when the gateway shard receives a `HELLO` packet.
	 * @param hello - The `HELLO` packet.
	 * @internal
	 */
	private __onMessageHello__(hello: GatewayHello): void {
		const { d } = hello;
		const { heartbeat_interval } = d;
		const { __sessionId__, manager } = this;

		manager["__emit__"]("shardHello", heartbeat_interval, this);

		if (__sessionId__) {
			this.__resume__();
		} else {
			this.__identify__();
			this.__heartbeat__();
		}

		setInterval(this.__heartbeat__.bind(this), heartbeat_interval);
	}

	/**
	 * Handles when the gateway shard receives an `INVALID_SESSION` packet.
	 * @param invalidSession - The `INVALID_SESSION` packet.
	 * @internal
	 */
	private __onMessageInvalidSession__(invalidSession: GatewayInvalidSession): void {
		const { d: isResumable } = invalidSession;
		const { __name__, manager } = this;

		const debugMessage = isResumable
			? `[GatewayShard] Session from "${__name__}" has been invalidated. Session can be resumed, attempting to resume...`
			: `[GatewayShard] Session from "${__name__}" has been invalidated. Session cannot be resumed, attempting to identify... `;
		const resumeOrIdentify = isResumable ? this.__resume__ : this.__identify__;

		manager["__debug__"](debugMessage);
		resumeOrIdentify();
	}

	/**
	 * Handles when the gateway shard receives a `RECONNECT` packet.
	 * @internal
	 */
	private __onMessageReconnect__(): void {
		this.__resume__();
	}

	/**
	 * Handles when the gateway connection is opened.
	 * @internal
	 */
	private __onOpen__(): void {
		this.status = GatewayShardStatus.Handshaking;
	}

	/**
	 * Sends a `RESUME` packet to the gateway.
	 * @internal
	 */
	private __resume__(): void {
		const { __name__, __sequence__, __sessionId__, manager } = this;
		const { token } = manager;

		if (!(__sequence__ && __sessionId__)) {
			throw new Error("Cannot resume a shard without a sequence number or session ID.");
		}

		manager["__debug__"](
			`[GatewayShard] Sending a "RESUME" packet from "${__name__}" to the Discord gateway...`,
		);

		this.send(GatewayOpcodes.Resume, {
			seq: __sequence__,
			session_id: __sessionId__,
			token,
		});
	}

	/**
	 * Gets the shard name.
	 */
	private get __name__(): string {
		const { id } = this;

		return `Shard ${id}`;
	}

	/**
	 * Gets the latency of the gateway shard.
	 */
	get latency(): number {
		const { lastHeartbeatReceivedAt, lastHeartbeatSentAt } = this;

		return lastHeartbeatReceivedAt - lastHeartbeatSentAt;
	}

	/**
	 * Initializes the gateway shard by connecting to the Discord gateway.
	 */
	init(): void {
		this.status = GatewayShardStatus.Connecting;
		this.__initializeWebSocket__();
	}

	/**
	 * Sends a payload to the Discord gateway.
	 * @param opcode - The opcode of the payload.
	 * @param payload - The data related to the opcode.
	 */
	send<Opcode extends SendableOpcodes>(
		opcode: Opcode,
		payload: SendableOpcodesPayloadMap[Opcode],
	): void {
		if (!SENDABLE_OPCODES.includes(opcode)) {
			throw new Error(`Cannot send a non-sendable opcode '${opcode}'.`);
		}

		const ws = this.__getWebSocket__();
		const payloadString = JSON.stringify({
			d: payload,
			op: opcode,
		});

		ws.send(payloadString);
	}

	/**
	 * Sets the presence of the gateway shard.
	 * @param options - The options to use when setting the presence.
	 */
	setPresence(options: PresenceOptions): void {
		let { activities, afk, since, status } = options;

		afk ??= false;
		since ??= null;

		this.send(GatewayOpcodes.PresenceUpdate, {
			activities,
			afk,
			since,
			status,
		});
	}
}

/**
 * The activity options to include in the presence.
 * @public
 */
export interface ActivityOptions {
	/**
	 * The name of the activity.
	 */
	name: string;
	/**
	 * The state of the activity.
	 */
	state?: string;
	/**
	 * The type of the activity.
	 */
	type: ActivityTypes;
	/**
	 * The stream URL associated with the activity.
	 */
	url?: string;
}

/**
 * The presence options to send to the Discord gateway.
 * @public
 */
export interface PresenceOptions {
	/**
	 * The activities to display in the presence.
	 */
	activities: ActivityOptions[];
	/**
	 * Whether the client is afk.
	 */
	afk?: boolean;
	/**
	 * The timestamp at which the client went afk.
	 */
	since?: number | null;
	/**
	 * The status of the presence.
	 */
	status: StatusTypes;
}

/**
 * Represents the opcodes that can be sent to the Discord gateway.
 * @public
 */
export type SendableOpcodes = (typeof SENDABLE_OPCODES)[number];

/**
 * Represents a map of opcodes that can be sent to the Discord gateway with
 * their respective payloads.
 * @internal
 */
export type SendableOpcodesPayloadMap = {
	[GatewayOpcodes.Heartbeat]: GatewayHeartbeatPayload;
	[GatewayOpcodes.Identify]: GatewayIdentifyPayload;
	[GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdatePayload;
	[GatewayOpcodes.Resume]: GatewayResumePayload;
	[GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersPayload;
	[GatewayOpcodes.RequestSoundboardSounds]: GatewayRequestSoundboardSoundsPayload;
	[GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdatePayload;
};

/**
 * The status of the gateway shard.
 * @public
 */
export enum GatewayShardStatus {
	Connecting = "CONNECTING",
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Identifying = "IDENTIFYING",
	Ready = "READY",
	Resuming = "RESUMING",
}
