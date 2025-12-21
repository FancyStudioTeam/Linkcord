import { emitWarning, platform } from "node:process";
import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardError } from "#gateway/errors/GatewayShardError.js";
import { getOpcodeName } from "#gateway/functions/getOpcodeName.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { RESUMABLE_CLOSE_EVENT_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import { type GatewayDispatchEvent, type GatewayEvent, type GatewayHelloEvent, GatewayOpcodes } from "#types/index.js";
import { LINKCORD_AGENT } from "#utils/Constants.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { isInstanceOf, isNull } from "#utils/helpers/AssertionUtils.js";
import { GatewayManager } from "./GatewayManager.js";
import { GatewayShardStatus, type SendableOpcodes, type SendableOpcodesMap } from "./GatewayShard.types.js";

const { OPEN: OPEN_STATE } = WebSocket;

const GOING_AWAY_CLOSE_EVENT_CODE = 1001;
const GRACEFUL_CLOSE_EVENT_CODE = 1000;

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

	get #label(): `[Shard ${number}]` {
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

	#buildGatewayURL(baseURL: string = GatewayManager.GATEWAY_URL_BASE): string {
		const urlObject = new URL(baseURL);
		const { searchParams } = urlObject;

		searchParams.append("encoding", "json");
		searchParams.append("v", String(GatewayManager.GATEWAY_VERSION));

		const urlString = urlObject.toString();

		return urlString;
	}

	#checkAndUpdateSequence(gatewayEvent: GatewayEvent): void {
		const sequence = this.#getSequence(gatewayEvent);

		if (isNull(sequence)) return;

		const { client, id, sequence: storedSequence } = this;
		const expectedSequence = (storedSequence ?? 0) + 1;

		if (expectedSequence < sequence || sequence !== expectedSequence) {
			const { events } = client;
			const warningMessage = `Some sequences were skipped or missed from shard ${id}. Expected "${expectedSequence}" but received "${sequence}".`;

			events.emit(ClientEvents.Warn, {
				message: warningMessage,
			});
		}

		this.sequence = sequence;
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

	#heartbeat(): void {
		const { client, sequence } = this;
		const label = this.#label;

		const debugMessage = `Sending a "${getOpcodeName(GatewayOpcodes.Heartbeat)}" packet to the Discord gateway...`;

		client.debug(debugMessage, {
			label,
		});

		this.#lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	#identify(): void {
		const { client, id, manager } = this;
		const label = this.#label;

		const debugMessage = `Sending a "${getOpcodeName(GatewayOpcodes.Identify)}" packet to the Discord gateway...`;

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
		const { client } = this;
		const gatewayURL = this.#buildGatewayURL(baseURL);

		const label = this.#label;
		const debugMessage = `Handshaking with the Discord gateway using URL "${gatewayURL}"...`;

		client.debug(debugMessage, {
			label,
		});

		this.#ws = new WebSocket(gatewayURL);
		this.#ws.onclose = this.#onClose.bind(this);
		this.#ws.onmessage = this.#onMessage.bind(this);
		this.#ws.onopen = this.#onOpen.bind(this);
	}

	#isCloseEventCodeResumable(code: number): boolean {
		const isResumableCloseEventCode = RESUMABLE_CLOSE_EVENT_CODES.includes(code);
		const isGoingAwaitCloseEventCode = code === GOING_AWAY_CLOSE_EVENT_CODE;

		return isResumableCloseEventCode || isGoingAwaitCloseEventCode;
	}

	#onClose(closeEvent: CloseEvent): void {
		const { code, reason } = closeEvent;
		const isReconnectable = this.#isCloseEventCodeResumable(code);

		if (!isReconnectable) {
			this.resumeGatewayURL = null;
			this.sessionId = null;
		}

		this.status = GatewayShardStatus.Disconnected;

		const { resumeGatewayURL, client } = this;
		const label = this.#label;

		const baseMessage = `Session has been closed with code ${code} (${reason || "N/A"}).`;
		const debugMessage = `${baseMessage} ${isReconnectable ? "Attempting to resume..." : "Attempting to re-identify..."}`;

		const { events } = client;

		client.debug(debugMessage, {
			label,
		});
		events.emit(ClientEvents.ShardDisconnected, {
			code,
			gatewayShard: this,
			isReconnectable,
			reason,
		});

		const gatewayURL = isReconnectable && resumeGatewayURL ? resumeGatewayURL : undefined;

		this.#initializeWebSocket(gatewayURL);
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
	#onMessageHello(gatewayHello: GatewayHelloEvent): void {
		const { d: payload } = gatewayHello;
		const { heartbeat_interval: heartbeatInterval } = payload;

		const { client, resumeGatewayURL, sessionId } = this;
		const { events } = client;

		events.emit(ClientEvents.ShardHello, {
			gatewayShard: this,
			heartbeatInterval,
		});

		if (sessionId && resumeGatewayURL) {
			this.#resume();
		} else {
			this.#identify();
		}

		const heartbeatJitter = heartbeatInterval * Math.random();

		setTimeout(() => {
			const interval = setInterval(this.#heartbeat.bind(this), heartbeatInterval);

			this.#heartbeat();
			this.#setHeartbeatInterval(interval);
		}, heartbeatJitter);
	}

	#onMessageInvalidSession(isResumable: boolean): void {
		const { client } = this;
		const label = this.#label;

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
		const { client } = this;
		const label = this.#label;

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

	#resume(): void {
		const { sequence, sessionId, client, id } = this;
		const label = this.#label;

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
				return this.#onMessageHello(gatewayEvent);
			case GatewayOpcodes.Reconnect:
				return this.#onMessageReconnect();
			default: {
				const { events } = client;
				const label = this.#label;

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
		const { client } = this;

		const ws = this.#getWebSocket();
		const label = this.#label;

		ws.close(GRACEFUL_CLOSE_EVENT_CODE, "User requested a disconnect.");
		client.debug("Disconnecting the shard from the Discord gateway...", {
			label,
		});
	}

	init(): void {
		this.status = GatewayShardStatus.Initializing;
		this.#initializeWebSocket();
	}

	send<Opcode extends SendableOpcodes>(opcode: Opcode, data: SendableOpcodesMap[Opcode]): void {
		if (!SENDABLE_OPCODES.includes(opcode)) {
			return void this.#showInvalidOpcodeWarning(opcode);
		}

		const ws = this.#getWebSocket();
		const payloadString = JSON.stringify({
			d: data,
			op: opcode,
		});

		ws.send(payloadString);
	}
}

type HeartbeatInterval = ReturnType<typeof setInterval>;
type MessageData = string | Blob;
