import { emitWarning, platform } from "node:process";
import { setTimeout } from "node:timers/promises";
import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardError } from "#gateway/errors/GatewayShardError.js";
import { getOpcodeName } from "#gateway/functions/getOpcodeName.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { RECONNECTABLE_CLOSE_EVENT_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import {
	type GatewayDispatchEvent,
	type GatewayEvent,
	type GatewayHelloEvent,
	type GatewayInvalidSessionEvent,
	GatewayOpcodes,
} from "#types/index.js";
import { LINKCORD_AGENT } from "#utils/Constants.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { isInstanceOf, isNull } from "#utils/helpers/AssertionUtils.js";
import { GatewayManager } from "./GatewayManager.js";
import { GatewayShardStatus, type SendableOpcodes, type SendableOpcodesMap } from "./GatewayShard.types.js";

const NORMAL_CLOSURE_CLOSE_EVENT_CODE = 1000;
const { OPEN: OPEN_STATE } = WebSocket;

export class GatewayShard {
	declare readonly client: Client;
	declare readonly manager: GatewayManager;

	protected resumeGatewayURL: string | null = null;
	protected sequence: number | null = null;
	protected sessionId: string | null = null;

	readonly id: number;

	#heartbeatInterval: HeartbeatInterval | null = null;
	#lastHeartbeatReceivedAt: number = 0;
	#lastHeartbeatSentAt: number = 0;
	#ws: WebSocket | null = null;

	status = GatewayShardStatus.Disconnected;

	constructor(id: number, manager: GatewayManager) {
		const { client } = manager;

		this.id = id;

		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "manager", manager);
	}

	static DEFAULT_BROWSER = "Discord Client" as const;
	static DEFAULT_DEVICE = LINKCORD_AGENT;
	static DEFAULT_OPERATING_SYSTEM = platform;

	get label(): `[Shard ${number}]` {
		return `[Shard ${this.id}]` as const;
	}

	get latency(): number {
		const lastHeartbeatReceivedAt = this.#lastHeartbeatReceivedAt;
		const lastHeartbeatSentAt = this.#lastHeartbeatSentAt;

		return lastHeartbeatReceivedAt - lastHeartbeatSentAt;
	}

	#clearHeartbeatInterval(): void {
		const heartbeatInterval = this.#heartbeatInterval;

		if (!isNull(heartbeatInterval)) {
			clearInterval(heartbeatInterval);

			this.#heartbeatInterval = null;
		}
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#connecting
	 */
	#buildGatewayURL(baseURL: string = GatewayManager.GATEWAY_URL_BASE): string {
		const urlObject = new URL(baseURL);
		const { searchParams } = urlObject;

		searchParams.append("encoding", "json");
		searchParams.append("v", String(GatewayManager.GATEWAY_VERSION));

		const urlString = urlObject.toString();

		return urlString;
	}

	#checkAndUpdateSequence(gatewayEvent: GatewayEvent): void {
		const receivedSequence = this.#getSequence(gatewayEvent);

		if (isNull(receivedSequence)) return;

		const { client, label, sequence: storedSequence } = this;
		const expectedSequence = (storedSequence ?? 0) + 1;

		const debugMessage = `Received Sequence: ${receivedSequence} - Expected Sequence: ${expectedSequence}`;

		client.debug(debugMessage, {
			label,
		});

		if (expectedSequence !== receivedSequence) {
			const { id } = this;
			const { events } = client;

			const warningMessages = [
				`Some sequences were skipped or missed from "Shard ${id}".`,
				`Expected sequence to be ${expectedSequence} but received ${receivedSequence}`,
			];
			const warningMessage = warningMessages.join("\n");

			events.emit(ClientEvents.Warn, {
				message: warningMessage,
			});
		}

		this.sequence = receivedSequence;
	}

	#getSequence(gatewayEvent: GatewayEvent): number | null {
		if ("s" in gatewayEvent) {
			return gatewayEvent.s;
		}

		return null;
	}

	#getWebSocket(required?: boolean): WebSocket | null;
	#getWebSocket(required: true): WebSocket;

	#getWebSocket(required?: boolean): WebSocket | null {
		const ws = this.#ws;

		if ((isNull(ws) || ws.readyState !== OPEN_STATE) && required) {
			const { id } = this;

			throw new GatewayShardError("WebSocket has not been initialized yet", id);
		}

		return ws;
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#sending-heartbeats
	 */
	#heartbeat(): void {
		const { client, label, sequence } = this;

		const opcodeName = getOpcodeName(GatewayOpcodes.Heartbeat);
		const debugMessage = `Sending a "${opcodeName}" packet to the Discord gateway...`;

		client.debug(debugMessage, {
			label,
		});

		this.#lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#identifying
	 */
	#identify(): void {
		const { client, id, label, manager } = this;

		const opcodeName = getOpcodeName(GatewayOpcodes.Heartbeat);
		const debugMessage = `Sending a "${opcodeName}" packet to the Discord gateway...`;

		client.debug(debugMessage, {
			label,
		});

		const { intents, token } = client;
		const { shardCount } = manager;

		const { DEFAULT_BROWSER, DEFAULT_DEVICE, DEFAULT_OPERATING_SYSTEM } = GatewayShard;

		this.send(GatewayOpcodes.Identify, {
			intents,
			properties: {
				browser: DEFAULT_BROWSER,
				device: DEFAULT_DEVICE,
				os: DEFAULT_OPERATING_SYSTEM,
			},
			shard: [
				id,
				shardCount,
			],
			token,
		});
	}

	#initializeWebSocket(baseURL: string = GatewayManager.GATEWAY_URL_BASE): void {
		const { client, label } = this;

		const gatewayURL = this.#buildGatewayURL(baseURL);
		const debugMessage = `Handshaking with the Discord gateway using URL "${gatewayURL}"...`;

		client.debug(debugMessage, {
			label,
		});

		this.#ws = new WebSocket(gatewayURL);
		this.#ws.onclose = this.#onClose.bind(this);
		this.#ws.onmessage = this.#onMessage.bind(this);
		this.#ws.onopen = this.#onOpen.bind(this);
	}

	#isCloseEventCodeReconnectable(code: number): boolean {
		return RECONNECTABLE_CLOSE_EVENT_CODES.includes(code);
	}

	#onClose(closeEvent: CloseEvent): void {
		const { code, reason } = closeEvent;
		const isReconnectable = this.#isCloseEventCodeReconnectable(code);

		if (!isReconnectable) {
			this.disconnect();
		}

		this.status = GatewayShardStatus.Disconnected;

		const { client, label } = this;
		const baseMessage = `Session has been closed with code ${code} (${reason || "N/A"}).`;

		const { events } = client;

		client.debug(baseMessage, {
			label,
		});
		events.emit(ClientEvents.ShardDisconnected, {
			code,
			gatewayShard: this,
			isReconnectable,
			reason,
		});
	}

	async #onMessage(messageEvent: MessageEvent<string>): Promise<void> {
		const bufferData = await this.#normalizeMessageEvent(messageEvent);
		const bufferString = String(bufferData);

		const gatewayEvent = JSON.parse(bufferString) as GatewayEvent;

		this.#checkAndUpdateSequence(gatewayEvent);

		const { client } = this;
		const { events } = client;

		events.emit(ClientEvents.ShardPacket, {
			gatewayShard: this,
			packet: gatewayEvent,
		});

		await this.#switchGatewayEvent(gatewayEvent, client);
	}

	async #onMessageDispatch(dispatch: GatewayDispatchEvent): Promise<void> {
		const { client } = this;
		const { d, t } = dispatch;

		const hook = DispatchHooks[t];

		if (hook) {
			await hook(client, this, d as never);
		}
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#heartbeat-requests
	 */
	#onMessageHeartbeat(): void {
		this.#heartbeat();
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval
	 */
	#onMessageHeartbeatAck(): void {
		this.#lastHeartbeatReceivedAt = Date.now();
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#hello-event
	 */
	async #onMessageHello(gatewayHello: GatewayHelloEvent): Promise<void> {
		const { d: payload } = gatewayHello;
		const { heartbeat_interval: heartbeatInterval } = payload;

		const { client, label } = this;
		const { events } = client;

		const heartbeatJitter = Math.random();
		const heartbeatFirstWait = heartbeatInterval * heartbeatJitter;

		client.debug(
			`Waiting to send the first heartbeat with a jitter of ${heartbeatJitter}. (Waiting ${heartbeatFirstWait}ms)`,
			{
				label,
			},
		);

		events.emit(ClientEvents.ShardHello, {
			gatewayShard: this,
			heartbeatInterval,
			heartbeatJitter,
		});

		await setTimeout(heartbeatFirstWait);

		this.#heartbeat();

		const interval = setInterval(this.#heartbeat.bind(this), heartbeatInterval);

		this.#setHeartbeatInterval(interval);
	}

	#onMessageInvalidSession(gatewayInvalidSession: GatewayInvalidSessionEvent): void {
		const { d: isResumable } = gatewayInvalidSession;
		const { client, label } = this;

		if (!isResumable) {
			this.resumeGatewayURL = null;
			this.sessionId = null;
		}

		const baseMessage = "Session has been invalidated.";
		const message = `${baseMessage} ${isResumable ? "Attempting to resume..." : "Attempting to identify..."}`;

		client.debug(message, {
			label,
		});

		isResumable ? this.#resume() : this.#identify();
	}

	#onMessageReconnect(): void {
		const { client, label } = this;

		client.debug(`Discord is requesting a reconnection for the shard...`, {
			label,
		});

		this.#resume();
	}

	#onOpen(): void {
		this.status = GatewayShardStatus.Handshaking;
	}

	async #normalizeMessageEvent(messageEvent: MessageEvent<MessageData>): Promise<Buffer> {
		const { data } = messageEvent;

		if (isInstanceOf(data, Blob)) {
			const bufferArray = await data.arrayBuffer();
			const buffer = Buffer.from(bufferArray);

			return buffer;
		}

		const buffer = Buffer.from(data);

		return buffer;
	}

	#removeWebSocketEventListeners(): void {
		const ws = this.#getWebSocket();

		if (ws) {
			ws.onclose = null;
			ws.onmessage = null;
			ws.onopen = null;
		}
	}

	#reset() {
		this.resumeGatewayURL = null;
		this.sessionId = null;
		this.status = GatewayShardStatus.Disconnected;
	}

	#resume(): void {
		const { client, id, label, sequence, sessionId } = this;
		const { token } = client;

		if (!sessionId) {
			throw new GatewayShardError("Cannot resume the shard witout a session ID.", id);
		}

		if (!sequence) {
			throw new GatewayShardError("Cannot resume the shard witout a sequence number.", id);
		}

		client.debug(`Sending a "RESUME" packet to the Discord gateway...`, {
			label,
		});

		this.send(GatewayOpcodes.Resume, {
			seq: sequence,
			session_id: sessionId,
			token,
		});
	}

	#showInvalidOpcodeWarning(opcode: GatewayOpcodes): void {
		const opcodeName = getOpcodeName(opcode);
		const warningMessage = `Cannot send a non-sendable opcode (${opcodeName}) to the Discord gateway`;

		emitWarning(warningMessage, {
			code: "GATEWAY_SHARD",
			type: "Invalid Opcode Warning",
		});
	}

	#setHeartbeatInterval(interval: HeartbeatInterval): void {
		this.#clearHeartbeatInterval();
		this.#heartbeatInterval = interval;
	}

	async #switchGatewayEvent(gatewayEvent: GatewayEvent, client: Client): Promise<void> {
		const { op: opcode } = gatewayEvent;

		switch (opcode) {
			case GatewayOpcodes.Dispatch:
				return await this.#onMessageDispatch(gatewayEvent);
			case GatewayOpcodes.Heartbeat:
				return this.#onMessageHeartbeat();
			case GatewayOpcodes.HeartbeatAck:
				return this.#onMessageHeartbeatAck();
			case GatewayOpcodes.Hello:
				return await this.#onMessageHello(gatewayEvent);
			case GatewayOpcodes.InvalidSession:
				return this.#onMessageInvalidSession(gatewayEvent);
			case GatewayOpcodes.Reconnect:
				return this.#onMessageReconnect();
			default: {
				const { label } = this;
				const { events } = client;

				const opcodeName = getOpcodeName(opcode);
				const warningMessage = `Received an unhandled opcode (${opcodeName}) from ${label}.`;

				events.emit(ClientEvents.Warn, {
					message: warningMessage,
				});

				break;
			}
		}
	}

	disconnect(): void {
		this.#clearHeartbeatInterval();

		const ws = this.#getWebSocket(true);

		ws.close(NORMAL_CLOSURE_CLOSE_EVENT_CODE, "User requested a complete disconnection");

		this.#removeWebSocketEventListeners();
		this.#ws = null;
	}

	init(): void {
		this.status = GatewayShardStatus.Initializing;
		this.#initializeWebSocket();
	}

	send<Opcode extends SendableOpcodes>(opcode: Opcode, data: SendableOpcodesMap[Opcode]): void {
		if (!SENDABLE_OPCODES.includes(opcode)) {
			return void this.#showInvalidOpcodeWarning(opcode);
		}

		const ws = this.#getWebSocket(true);
		const payloadString = JSON.stringify({
			d: data,
			op: opcode,
		});

		ws.send(payloadString);
	}
}

type HeartbeatInterval = ReturnType<typeof setInterval>;
type MessageData = string | Blob;
