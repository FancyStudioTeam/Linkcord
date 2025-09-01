/* biome-ignore-all lint/style/useReadonlyClassProperties: Some private fields are being assigned in the "READY" hook. */

import { platform } from "node:process";
import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardError } from "#gateway/errors/GatewayShardError.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import {
	GatewayShardStatus,
	type SendableOpcodes,
	type SendableOpcodesPayloadMap,
} from "#gateway/types/index.js";
import { OPCODE_NAMES, RESUMABLE_CLOSE_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import { type GatewayDispatchEvent, type GatewayEvent, GatewayOpcodes } from "#types/index.js";
import { LINKCORD_VERSION } from "../../index.js";
import { GatewayManager } from "./GatewayManager.js";

const GRACEFUL_CLOSE_CODE = 1000;
const GOING_AWAY_CLOSE_CODE = 1001;

/** Represents a shard of the Discord gateway. */
export class GatewayShard {
	/** The URL of the Discord gateway used to resume the session if the shard has been disconnected. */
	protected resumeGatewayURL: string | null = null;
	/** The number of the sequence received from the `DISPATCH` event. */
	protected sequence: number | null = null;
	/** The ID of the current session of the gateway shard used to resume the session if the shard has been disconnected. */
	protected sessionId: string | null = null;

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
	 * @param manager - The gateway manager that instantiated the gateway shard.
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
	get #label(): `[Shard ${number}]` {
		const { id } = this;

		return `[Shard ${id}]`;
	}

	/** The latency of the gateway shard. */
	get latency(): number {
		const { lastHeartbeatReceivedAt, lastHeartbeatSentAt } = this;

		return lastHeartbeatReceivedAt - lastHeartbeatSentAt;
	}

	/** Gets the initialized `WebSocket` instance. */
	#getWebSocket(): WebSocket {
		const { id, ws } = this;
		const { OPEN } = WebSocket;

		if (!ws || ws.readyState !== OPEN) {
			throw new GatewayShardError("WebSocket has not been opened or initialized yet.", id);
		}

		return ws;
	}

	/** Sends a {@link GatewayOpcodes.Heartbeat | `HEARTBEAT`} packet to the Discord gateway. */
	#heartbeat(): void {
		const { sequence, client } = this;
		const label = this.#label;

		client.debug(label, `Sending a "HEARTBEAT" packet to the Discord gateway...`);

		this.lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	/** Sends an {@link GatewayOpcodes.Identify | `IDENTIFY`} packet to the Discord gateway. */
	#identify(): void {
		const { id, client, manager } = this;
		const { DEFAULT_BROWSER, DEFAULT_DEVICE, DEFAULT_OPERATING_SYSTEM } = GatewayShard;

		const label = this.#label;

		const { intents, token } = client;
		const { shardCount } = manager;

		client.debug(label, `Sending an "IDENTIFY" packet to the Discord gateway...`);

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
	 * Initializes the `WebSocket` instance to interact with the Discord gateway.
	 * @param gatewayURL - The URL of the Discord gateway to use.
	 */
	#initializeWebSocket(gatewayURL = GatewayManager.GATEWAY_URL_BASE): void {
		const urlObject = new URL(gatewayURL);

		const { searchParams } = urlObject;
		const { client } = this;

		const label = this.#label;
		const gatewayVersionString = String(GatewayManager.GATEWAY_VERSION);

		searchParams.append("encoding", "json");
		searchParams.append("v", gatewayVersionString);

		const gatewayURLString = urlObject.toString();

		client.debug(
			label,
			`Handshaking with the Discord gateway using URL "${gatewayURLString}".`,
		);

		this.ws = new WebSocket(gatewayURLString);
		this.ws.onclose = this.#onClose.bind(this);
		this.ws.onmessage = this.#onMessage.bind(this);
		this.ws.onopen = this.#onOpen.bind(this);
	}

	/**
	 * Checks whether the close code is resumable.
	 * @param code - The received close code.
	 */
	#isCloseCodeResumable(code: number): boolean {
		return RESUMABLE_CLOSE_CODES.includes(code) || code === GOING_AWAY_CLOSE_CODE;
	}

	/**
	 * Handles when the gateway shard connection has been closed.
	 * @param closeEvent - The received `CloseEvent` from the `WebSocket`.
	 */
	#onClose(closeEvent: CloseEvent): void {
		const { code, reason } = closeEvent;
		const isReconnectable = this.#isCloseCodeResumable(code);

		this.status = GatewayShardStatus.Disconnected;

		const { resumeGatewayURL, client } = this;
		const label = this.#label;

		const baseMessage = `Session has been closed with code ${code} (${reason || "N/A"}).`;
		const message = `${baseMessage} ${isReconnectable ? "Attempting to resume..." : "Attempting to re-identify..."}`;

		client.emit(ClientEvents.ShardDisconnected, reason, code, isReconnectable, this);
		client.debug(label, message);

		// Using "undefined" will use the default gateway URL from the "initializeWebSocket" method.
		const gatewayURL = isReconnectable && resumeGatewayURL ? resumeGatewayURL : undefined;

		this.#initializeWebSocket(gatewayURL);
	}

	/**
	 * Handles when a message is received from the gateway.
	 * @param messageEvent - The received `MessageEvent` from the `WebSocket`.
	 */
	async #onMessage(messageEvent: MessageEvent): Promise<void> {
		const { data } = messageEvent;

		const dataString = data.toString();
		const message = JSON.parse(dataString) as GatewayEvent;

		const { op: opcode } = message;
		const { client, id } = this;

		client.emit(ClientEvents.ShardPacket, message, this);

		if ("s" in message) {
			const { s: sequence } = message;

			this.#updateSequence(sequence);
		}

		switch (opcode) {
			case GatewayOpcodes.Dispatch: {
				await this.#onMessageDispatch(message);

				break;
			}
			case GatewayOpcodes.HeartbeatAck: {
				this.#onMessageHeartbeatAck();

				break;
			}
			case GatewayOpcodes.Hello: {
				const { d } = message;
				const { heartbeat_interval: heartbeatInterval } = d;

				this.#onMessageHello(heartbeatInterval);

				break;
			}
			case GatewayOpcodes.InvalidSession: {
				const { d: isResumable } = message;

				this.#onMessageInvalidSession(isResumable);

				break;
			}
			case GatewayOpcodes.Reconnect: {
				this.#onMessageReconnect();

				break;
			}
			default: {
				const opcodeName = OPCODE_NAMES[opcode];
				const warning = `Received an unhandled opcode (${opcode}: ${opcodeName}) from "Shard ${id}".`;

				client.emit(ClientEvents.Warn, warning);

				break;
			}
		}
	}

	/**
	 * Handles when the gateway shard receives a {@link GatewayDispatchEvent | `DISPATCH`} packet.
	 * @param dispatch - The received {@link GatewayDispatchEvent | `DISPATCH`} packet from the Discord gateway.
	 */
	async #onMessageDispatch(dispatch: GatewayDispatchEvent): Promise<void> {
		const { client } = this;
		const { d, t } = dispatch;

		const hook = DispatchHooks[t];

		if (hook) {
			await hook(client, this, d as never);
		}
	}

	/** Handles when the gateway shard receives a {@link GatewayOpcodes.HeartbeatAck | `HEARTBEAT_ACK`} packet. */
	#onMessageHeartbeatAck(): void {
		this.lastHeartbeatReceivedAt = Date.now();
	}

	/**
	 * Handles when the gateway shard receives a {@link GatewayOpcodes.Hello | `HELLO`} packet.
	 * @param heartbeatInterval - The interval at which a {@link GatewayOpcodes.Heartbeat | `HEARTBEAT`} packet should be sent.
	 */
	#onMessageHello(heartbeatInterval: number): void {
		const { sessionId, client } = this;

		client.emit(ClientEvents.ShardHello, heartbeatInterval, this);

		if (sessionId) {
			this.#resume();
		} else {
			this.#identify();
			this.#heartbeat();
		}

		setInterval(this.#heartbeat.bind(this), heartbeatInterval);
	}

	/**
	 * Handles when the gateway shard receives an {@link GatewayOpcodes.InvalidSession | `INVALID_SESSION`} packet.
	 * @param isResumable - Whether the session can be resumed.
	 */
	#onMessageInvalidSession(isResumable: boolean): void {
		const { client } = this;
		const label = this.#label;

		const debugMessage = isResumable
			? `Session has been invalidated. Session can be resumed, attempting to resume...`
			: `Session has been invalidated. Session cannot be resumed, attempting to identify... `;

		client.debug(label, debugMessage);

		isResumable ? this.#resume() : this.#identify();
	}

	/** Handles when the gateway shard receives a {@link GatewayOpcodes.Reconnect | `RECONNECT`} packet. */
	#onMessageReconnect(): void {
		const { client } = this;
		const label = this.#label;

		client.debug(label, `Discord is requesting a reconnection for the shard...`);

		this.#resume();
	}

	/** Handles when the gateway connection has been opened. */
	#onOpen(): void {
		this.status = GatewayShardStatus.Handshaking;
	}

	/** Sends a {@link GatewayOpcodes.Resume | `RESUME`} packet to the Discord gateway. */
	#resume(): void {
		const { sequence, sessionId, client, id } = this;
		const label = this.#label;

		const { token } = client;

		if (!(sequence && sessionId)) {
			throw new GatewayShardError(
				"Cannot resume the shard without a sequence number or session ID.",
				id,
			);
		}

		client.debug(label, `Sending a "RESUME" packet to the Discord gateway...`);

		this.send(GatewayOpcodes.Resume, {
			seq: sequence,
			session_id: sessionId,
			token,
		});
	}

	/**
	 * Updates the sequence of the gateway shard.
	 * @param sequence - The received sequence from the Discord gateway.
	 */
	#updateSequence(sequence: number | null): void {
		// Do not increment the sequence if it is null.
		if (sequence === null) return;

		const { client, id, sequence: currentSequence } = this;
		const expectedCurrentSequence = (currentSequence ?? 0) + 1;

		// Check for missed or skipped sequences.
		if (expectedCurrentSequence < sequence || sequence !== expectedCurrentSequence) {
			const warning = `Some sequences were skipped or missed from "Shard ${id}". Expected "${expectedCurrentSequence}" but received "${sequence}".`;

			client.emit(ClientEvents.Warn, warning);
		}

		this.sequence = sequence;
	}

	/** Disconnects the gateway shard from the Discord gateway. */
	disconnect(): void {
		const { client } = this;

		const ws = this.#getWebSocket();
		const label = this.#label;

		ws.close(GRACEFUL_CLOSE_CODE, "User requested a disconnect.");
		client.debug(label, "Disconnecting the shard from the Discord gateway...");
	}

	/** Initializes the gateway shard by connecting it to the Discord gateway. */
	init(): void {
		this.status = GatewayShardStatus.Connecting;
		this.#initializeWebSocket();
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
			const opcodeName = OPCODE_NAMES[opcode];

			throw new GatewayShardError(
				`Cannot send a non-sendable opcode (${opcode}: ${opcodeName}) to the Discord gateway.`,
				id,
			);
		}

		const ws = this.#getWebSocket();
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
	// TODO: Add "setPresence" to "GatewayShard".
	/*setPresence(options: PresenceOptions): void {
		let { activities, afk, since, status } = options;

		afk ??= false;
		since ??= null;

		this.send(GatewayOpcodes.PresenceUpdate, {
			activities,
			afk,
			since,
			status,
		});
	}*/
}
