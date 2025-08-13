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

import { emitWarning, platform } from "node:process";
import { type CloseEvent, type Data, type MessageEvent, WebSocket } from "ws";
import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardError } from "#gateway/errors/GatewayShardError.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { RESUMABLE_CLOSE_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
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
import { LINKCORD_VERSION } from "../../index.js";
import { GatewayManager } from "./GatewayManager.js";

const GOING_AWAY_CLOSE_CODE = 1001;

// TODO: Migrate to native `WebSocket` class.
/**
 * Represents a shard of the Discord gateway.
 * @group Gateway/Structures
 * @public
 */
export class GatewayShard {
	/**
	 * The URL of the Discord gateway used to resume the session if the shard
	 * has been disconnected.
	 */
	private __resumeGatewayURL__: string | null = null;
	/** The number of the sequence received from the `DISPATCH` event. */
	private __sequence__: number | null = null;
	/**
	 * The ID of the current session of the gateway shard used to resume the
	 * session if the shard has been disconnected.
	 */
	private __sessionId__: string | null = null;

	/** The client of the gateway shard. */
	readonly client: Client;
	/** The ID of the gateway shard. */
	readonly id: number;
	/** The gateway manager of the gateway shard. */
	readonly manager: GatewayManager;

	/** The timestamp of the last heartbeat received from the gateway. */
	lastHeartbeatReceivedAt = 0;
	/** The timestamp of the last heartbeat sent to the gateway. */
	lastHeartbeatSentAt = 0;
	/** The current status of the gateway shard. */
	status = GatewayShardStatus.Disconnected;
	/** The `WebSocket` instance used to interact with the Discord gateway. */
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

	/** The default browser to use when identifying the shard. */
	static DEFAULT_BROWSER = "Discord Client";

	/** The default device to use when identifying the shard. */
	static DEFAULT_DEVICE =
		`Linkcord v${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord)`;

	/** The default operating system when identifying the shard. */
	static DEFAULT_OPERATING_SYSTEM = platform;

	/** The shard label to use in the debug messages. */
	private get __label__(): `[Shard ${number}]` {
		const { id } = this;

		return `[Shard ${id}]`;
	}

	/** The latency of the gateway shard. */
	get latency(): number {
		const { lastHeartbeatReceivedAt, lastHeartbeatSentAt } = this;

		return lastHeartbeatReceivedAt - lastHeartbeatSentAt;
	}

	/**
	 * Converts the received `Data` from the `WebSocket` into a `Buffer`.
	 * @param data - The received `Data` to convert.
	 * @returns The converted `Buffer`.
	 */
	private __convertMessageDataToBuffer__(data: Data): Buffer {
		if (typeof data === "string") {
			return Buffer.from(data);
		}

		// Cannot merge the following if statement with the previous one, due
		// to TypeScript issues.
		if (data instanceof ArrayBuffer) {
			return Buffer.from(data);
		}

		if (Array.isArray(data)) {
			return Buffer.concat(data);
		}

		return data;
	}

	/** Gets the initialized `WebSocket` instance. */
	private __getWebSocket__(): WebSocket {
		const { id, ws } = this;
		const { OPEN } = WebSocket;

		if (!ws || ws.readyState !== OPEN) {
			throw new GatewayShardError("WebSocket has not been opened or initialized yet.", id);
		}

		return ws;
	}

	/** Sends a `HEARTBEAT` packet to the Discord gateway. */
	private __heartbeat__(): void {
		const { __label__: label, __sequence__: sequence, client } = this;

		client["__debug__"](label, `Sending a "HEARTBEAT" packet to the Discord gateway...`);

		this.lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	/** Sends an `IDENTIFY` packet to the Discord gateway. */
	private __identify__(): void {
		const { __label__: label, id, client, manager } = this;
		const { DEFAULT_BROWSER, DEFAULT_DEVICE, DEFAULT_OPERATING_SYSTEM } = GatewayShard;
		const { intents, token } = client;

		const shardCount = manager["__shardsToSpawn__"];

		client["__debug__"](label, `Sending an "IDENTIFY" packet to the Discord gateway...`);

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
	 */
	private __initializeWebSocket__(gatewayURL = GatewayManager.GATEWAY_URL_BASE): void {
		const urlObject = new URL(gatewayURL);

		const { searchParams } = urlObject;
		const { __label__: label, client } = this;

		const gatewayVersionString = String(GatewayManager.GATEWAY_VERSION);

		searchParams.append("encoding", "json");
		searchParams.append("v", gatewayVersionString);

		const gatewayURLString = urlObject.toString();

		client["__debug__"](
			label,
			`Handshaking with the Discord gateway using URL "${gatewayURLString}".`,
		);

		this.ws = new WebSocket(gatewayURLString);
		this.ws.onclose = this.__onClose__.bind(this);
		this.ws.onmessage = this.__onMessage__.bind(this);
		this.ws.onopen = this.__onOpen__.bind(this);
	}

	/**
	 * Handles when the gateway shard connection has been closed.
	 * @param closeEvent - The received `CloseEvent` from the `WebSocket`.
	 */
	private __onClose__(closeEvent: CloseEvent): void {
		const { code, reason } = closeEvent;

		this.status = GatewayShardStatus.Disconnected;

		const isReconnectable =
			RESUMABLE_CLOSE_CODES.includes(code) || code === GOING_AWAY_CLOSE_CODE;

		const { __label__: label, __resumeGatewayURL__: resumeGatewayURL, client } = this;

		const debugMessage = isReconnectable
			? `Session has been closed. Session can be resumed, attempting to resume...`
			: `Session has been closed. Session cannot be resumed, attempting to identify...`;

		client["__emit__"](ClientEvents.ShardDisconnected, reason, code, isReconnectable, this);
		client["__debug__"](label, debugMessage);

		this.__initializeWebSocket__(
			isReconnectable && resumeGatewayURL ? resumeGatewayURL : undefined,
		);
	}

	/**
	 * Handles when a message is received from the gateway.
	 * @param messageEvent - The received `MessageEvent` from the `WebSocket`.
	 */
	private async __onMessage__(messageEvent: MessageEvent): Promise<void> {
		const { data } = messageEvent;

		const convertedBufferData = this.__convertMessageDataToBuffer__(data);
		const bufferString = convertedBufferData.toString();

		const message = JSON.parse(bufferString) as GatewayEvent;

		const { op, s: sequence } = message;
		const { client, id } = this;

		client["__emit__"](ClientEvents.ShardPacket, message, this);
		this.__sequence__ = sequence;

		switch (op) {
			case GatewayOpcodes.Dispatch:
				await this.__onMessageDispatch__(message);
				break;
			case GatewayOpcodes.HeartbeatAck:
				this.__onMessageHeartbeatAck__();
				break;
			case GatewayOpcodes.Hello:
				this.__onMessageHello__(message);
				break;
			case GatewayOpcodes.InvalidSession:
				this.__onMessageInvalidSession__(message);
				break;
			case GatewayOpcodes.Reconnect:
				this.__onMessageReconnect__();
				break;
			default:
				emitWarning(`Unhandled opcode "${op}" from "Shard ${id}".`);
				break;
		}
	}

	/**
	 * Handles when the gateway shard receives a `DISPATCH` packet.
	 * @param dispatch - The received `DISPATCH` packet from the Discord
	 * 	gateway.
	 */
	private async __onMessageDispatch__(dispatch: GatewayDispatch): Promise<void> {
		const { client } = this;
		const { d, t } = dispatch;

		const hook = DispatchHooks[t];

		if (hook) {
			await hook(client, this, d as never);
		}
	}

	/** Handles when the gateway shard receives a `HEARTBEAT_ACK` packet. */
	private __onMessageHeartbeatAck__(): void {
		this.lastHeartbeatReceivedAt = Date.now();
	}

	/**
	 * Handles when the gateway shard receives a `HELLO` packet.
	 * @param hello - The received `HELLO` packet from the Discord gateway.
	 */
	private __onMessageHello__(hello: GatewayHello): void {
		const { d } = hello;
		const { heartbeat_interval } = d;
		const { __sessionId__: sessionId, client } = this;

		client["__emit__"](ClientEvents.ShardHello, heartbeat_interval, this);

		if (sessionId) {
			this.__resume__();
		} else {
			this.__identify__();
			this.__heartbeat__();
		}

		setInterval(this.__heartbeat__.bind(this), heartbeat_interval);
	}

	/**
	 * Handles when the gateway shard receives an `INVALID_SESSION` packet.
	 * @param invalidSession - The received `INVALID_SESSION` packet from the
	 * 	Discord gateway.
	 */
	private __onMessageInvalidSession__(invalidSession: GatewayInvalidSession): void {
		const { d: isResumable } = invalidSession;
		const { __label__: label, client } = this;

		const debugMessage = isResumable
			? `Session has been invalidated. Session can be resumed, attempting to resume...`
			: `Session has been invalidated. Session cannot be resumed, attempting to identify... `;
		const resumeOrIdentify = isResumable ? this.__resume__ : this.__identify__;

		client["__debug__"](label, debugMessage);
		resumeOrIdentify();
	}

	/** Handles when the gateway shard receives a `RECONNECT` packet. */
	private __onMessageReconnect__(): void {
		const { __label__: label, client } = this;

		client["__debug__"](label, `Discord is requesting a reconnection...`);
		this.__resume__();
	}

	/** Handles when the gateway connection has been opened. */
	private __onOpen__(): void {
		this.status = GatewayShardStatus.Handshaking;
	}

	/** Sends a `RESUME` packet to the Discord gateway. */
	private __resume__(): void {
		const {
			__label__: label,
			__sequence__: sequence,
			__sessionId__: sessionId,
			client,
			id,
		} = this;
		const { token } = client;

		if (!(sequence && sessionId)) {
			throw new GatewayShardError(
				"Cannot resume the shard without a sequence number or session ID.",
				id,
			);
		}

		client["__debug__"](label, `Sending a "RESUME" packet to the Discord gateway...`);

		this.send(GatewayOpcodes.Resume, {
			seq: sequence,
			session_id: sessionId,
			token,
		});
	}

	/** Initializes the gateway shard by connecting it to the Discord gateway. */
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
		const { id } = this;

		if (!SENDABLE_OPCODES.includes(opcode)) {
			throw new GatewayShardError(
				`Cannot send a non-sendable opcode "${opcode}" to the Discord gateway.`,
				id,
			);
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
