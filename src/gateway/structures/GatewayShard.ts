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

import { WebSocket } from "ws";
import type { ClientEventsMap, ClientEventsString } from "#client/ClientEvents.js";
import type { Client } from "#client/index.js";
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
import { GatewayManager } from "./GatewayManager.js";

/**
 * Represents a shard of the Discord gateway.
 * @group Gateway/Structures
 * @public
 */
export class GatewayShard {
	/**
	 * The number of attempts made to identify the gateway shard.
	 */
	private __identifyAttempts__ = 0;
	/**
	 * The number of attempts made to resume the gateway shard.
	 */
	private __resumeAttempts__ = 0;
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
	 * Emits an event with the given event name and data.
	 * @param name - The name of the event to emit.
	 * @param data - The data to emit with the event.
	 * @internal
	 */
	private __emit__<Event extends ClientEventsString>(
		name: Event,
		...data: ClientEventsMap[Event]
	): void {
		const { client } = this;
		const { events } = client;

		events.emit(name, ...data);
	}

	/**
	 * Gets the initialized `WebSocket` instance.
	 * @internal
	 */
	private __getWebSocket__(): WebSocket {
		const { ws } = this;

		if (!ws || ws.readyState !== ws.OPEN) {
			throw new Error("WebSocket has not been opened or initialized yet.");
		}

		return ws;
	}

	/**
	 * Sends a `HEARTBEAT` packet to the gateway.
	 * @internal
	 */
	private __heartbeat__(): void {
		const { __sequence__, id } = this;

		this.__emit__(
			"debug",
			`Sending a "HEARTBEAT" packet from "Shard ${id}" to the Discord gateway...`,
		);
		this.send(GatewayOpcodes.Heartbeat, __sequence__);
	}

	/**
	 * Sends an `IDENTIFY` packet to the gateway.
	 * @internal
	 */
	private __identify__(): void {
		const { id, manager } = this;
		const { intents, token } = manager;

		const shardCount = manager["__shardsToSpawn__"];

		this.__emit__(
			"debug",
			`Sending an "IDENTIFY" packet from "Shard ${id}" to the Discord gateway...`,
		);
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
	 * Initializes the `WebSocket` instance to interact with the Discord
	 * gateway.
	 * @param gatewayURL - The URL of the Discord gateway.
	 * @param shouldResume - Whether the gateway shard session should be
	 * 	resumed.
	 * @internal
	 */
	private __initializeWebSocket__(
		gatewayURL = GatewayManager.GATEWAY_URL_BASE,
		shouldResume = false,
	): void {
		const urlObject = new URL(gatewayURL);
		const { searchParams } = urlObject;

		const stringifiedGatewayVersion = GatewayManager.GATEWAY_VERSION.toString();

		searchParams.append("encoding", "json");
		searchParams.append("v", stringifiedGatewayVersion);

		const ws = new WebSocket(urlObject.toString());

		this.ws = ws;
		this.ws.on("close", this.__onClose__.bind(this));
		this.ws.on("message", this.__onMessage__.bind(this));
		this.ws.on("open", this.__onOpen__.bind(this)(shouldResume));
	}

	/**
	 * Handles when the gateway shard disconnects.
	 * @param code - The close code of the disconnection.
	 * @param reasonBuffer - The buffered reason of the disconnection.
	 * @internal
	 */
	private __onClose__(code: number, reasonBuffer: Buffer): void {
		if (!Buffer.isBuffer(reasonBuffer)) return;

		const reason = reasonBuffer.toString("utf-8");
		const reconnectable = RESUMABLE_CLOSE_CODES.includes(code);

		this.__emit__("shardDisconnected", reason, code, reconnectable, this);

		const { __resumeGatewayURL__, id } = this;

		if (reconnectable && __resumeGatewayURL__) {
			this.__emit__(
				`Current session from "Shard ${id}" can be resumed, attempting to resume...`,
			);
			this.__initializeWebSocket__(__resumeGatewayURL__, true);
		} else {
			this.__emit__(
				`Current session from "Shard ${id}" cannot be resumed, attempting to identify...`,
			);
			this.__initializeWebSocket__();
		}
	}

	/**
	 * Handles when a message is received from the gateway.
	 * @param bufferData - The buffered data of the message.
	 * @internal
	 */
	private async __onMessage__(bufferData: Buffer): Promise<void> {
		if (!Buffer.isBuffer(bufferData)) return;

		const data = bufferData.toString();
		const message = JSON.parse(data) as GatewayEvent;
		const { s } = message;

		this.__sequence__ = s;
		this.__emit__("shardPacket", message, this);

		switch (message.op) {
			case GatewayOpcodes.Dispatch: {
				await this.__onMessageDispatch__(message);
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
	 * Handles when the gateway shard receives an `INVALID_SESSION` packet.
	 * @param invalidSession - The `INVALID_SESSION` packet.
	 * @internal
	 */
	private __onMessageInvalidSession__(invalidSession: GatewayInvalidSession): void {
		const { d } = invalidSession;

		// If this is "true", it means that the session can be resumed.
		if (d) {
			this.__resume__();
		}
	}

	/**
	 * Handles when the gateway shard receives a `HELLO` packet.
	 * @param hello - The `HELLO` packet.
	 * @internal
	 */
	private __onMessageHello__(hello: GatewayHello): void {
		const { d } = hello;
		const { heartbeat_interval } = d;

		this.__emit__("shardHello", heartbeat_interval, this);

		setInterval(this.__heartbeat__.bind(this), heartbeat_interval);
	}

	/**
	 * Handles when the gateway shard receives a `RECONNECT` packet.
	 * @internal
	 */
	private __onMessageReconnect__(): void {
		this.__resume__();
	}

	/**
	 * Handles when the `WebSocket` connection is opened.
	 * @internal
	 */
	private __onOpen__(shouldResume: boolean): void {
		this.status = GatewayShardStatus.Handshaking;

		shouldResume ? this.__resume__() : this.__identify__();
	}

	/**
	 * Sends a `RESUME` packet to the gateway.
	 * @internal
	 */
	private __resume__(): void {
		const { __sequence__, __sessionId__, manager } = this;
		const { token } = manager;

		if (!(__sequence__ && __sessionId__)) return;

		this.send(GatewayOpcodes.Heartbeat, {
			seq: __sequence__,
			session_id: __sessionId__,
			token,
		});
	}

	/**
	 * Resets the number of attempts made to identify or resume the gateway
	 * shard.
	 * @internal
	 */
	private __resetAttempts__(): void {
		this.__identifyAttempts__ = 0;
		this.__resumeAttempts__ = 0;
	}

	/**
	 * Initializes the gateway shard by connecting to the Discord gateway.
	 */
	init(): void {
		this.status = GatewayShardStatus.Disconnected;
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
		const stringifiedPayload = JSON.stringify({
			d: payload,
			op: opcode,
		});

		ws.send(stringifiedPayload);
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
	Disconnected = "DISCONNECTED",
	Handshaking = "HANDSHAKING",
	Ready = "READY",
}
