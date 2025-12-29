import { emitWarning, platform } from 'node:process';
import { setTimeout } from 'node:timers/promises';
import { type Client, ClientEvents } from '#client/index.js';
import { GatewayShardError } from '#gateway/errors/GatewayShardError.js';
import { getOpcodeName } from '#gateway/functions/getOpcodeName.js';
import { DispatchHooks } from '#gateway/hooks/index.js';
import { RECONNECTABLE_CLOSE_EVENT_CODES, SENDABLE_OPCODES } from '#gateway/utils/Constants.js';
import {
	type GatewayDispatchEvent,
	type GatewayEvent,
	type GatewayHelloEvent,
	type GatewayInvalidSessionEvent,
	GatewayOpcodes,
} from '#types/index.js';
import { LINKCORD_AGENT } from '#utils/Constants.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { isInstanceOf, isNull, isNumber } from '#utils/helpers/AssertionUtils.js';
import { GatewayManager } from './GatewayManager.js';
import { GatewayShardStatus, type SendableOpcodes, type SendableOpcodesMap } from './GatewayShard.types.js';

const ABNORMAL_CLOSURE_CLOSE_CODE = 1006;
const NORMAL_CLOSURE_CLOSE_CODE = 1000;
const RECONNECTION_CLOSE_CODE = 4999;

const { OPEN: OPEN_STATE } = WebSocket;

export class GatewayShard {
	declare readonly client: Client;
	declare readonly manager: GatewayManager;

	protected resumeGatewayUrl: string | null = null;
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

		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'manager', manager);
	}

	static DEFAULT_BROWSER = 'Discord Client' as const;
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

	/**
	 * @see https://discord.com/developers/docs/events/gateway#connecting
	 */
	#buildGatewayURL(baseURL: string = GatewayManager.GATEWAY_URL_BASE): string {
		const urlObject = new URL(baseURL);
		const { searchParams } = urlObject;

		searchParams.append('encoding', 'json');
		searchParams.append('v', String(GatewayManager.GATEWAY_VERSION));

		return urlObject.toString();
	}

	#checkAndUpdateSequence(gatewayEvent: GatewayEvent): void {
		const receivedSequence = this.#getSequence(gatewayEvent);

		if (isNull(receivedSequence)) return;

		const { client, label, sequence: storedSequence } = this;
		const expectedSequence = (storedSequence ?? 0) + 1;

		const sequenceStatus = this.#getSequenceStatus(expectedSequence, receivedSequence);
		const debugMessage = `Expected Sequence: ${expectedSequence} - Received Sequence: ${receivedSequence} (${sequenceStatus})`;

		client.debug(debugMessage, {
			label,
		});

		if (expectedSequence !== receivedSequence) {
			this.#showMissingSequencesWarning(expectedSequence, receivedSequence);
		}

		this.sequence = receivedSequence;
	}

	#clearHeartbeatInterval(): void {
		const heartbeatInterval = this.#heartbeatInterval;

		if (!isNull(heartbeatInterval)) {
			clearInterval(heartbeatInterval);
			this.#heartbeatInterval = null;
		}
	}

	#getSequence(gatewayEvent: GatewayEvent): number | null {
		const sequenceValue = Reflect.get(gatewayEvent, 's');
		const sequence = isNumber(sequenceValue) ? sequenceValue : null;

		return sequence;
	}

	#getSequenceStatus(expectedSequence: number, receivedSequence: number): string {
		const sequenceDelta = expectedSequence - receivedSequence;
		const absoluteSequenceDelta = Math.abs(sequenceDelta);

		if (sequenceDelta > 0) {
			return `${absoluteSequenceDelta} Sequence(s) Missing`;
		}

		if (sequenceDelta < 0) {
			return `${absoluteSequenceDelta} Sequence(s) Ahead`;
		}

		return 'OK';
	}

	#getWebSocket(required?: boolean): WebSocket | null;
	#getWebSocket(required: true): WebSocket;

	#getWebSocket(required?: boolean): WebSocket | null {
		const ws = this.#ws;

		if ((isNull(ws) || ws.readyState !== OPEN_STATE) && required) {
			throw new GatewayShardError('WebSocket has not been initialized yet', this.id);
		}

		return ws;
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#sending-heartbeats
	 */
	#heartbeat(): void {
		const { sequence } = this;

		this.#lastHeartbeatSentAt = Date.now();
		this.send(GatewayOpcodes.Heartbeat, sequence);
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#identifying
	 */
	#identify(): void {
		const { client, id, manager } = this;
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

		this.#ws.binaryType = 'arraybuffer';

		this.#ws.onclose = this.#onClose.bind(this);
		this.#ws.onmessage = this.#onMessage.bind(this);
		this.#ws.onopen = this.#onOpen.bind(this);
	}

	#isCloseEventCodeReconnectable(code: number): boolean {
		const isReconnectableCloseEventCode = RECONNECTABLE_CLOSE_EVENT_CODES.includes(code);

		const isAbnormalClosureCloseCode = code === ABNORMAL_CLOSURE_CLOSE_CODE;
		const isReconnectCloseCode = code === RECONNECTION_CLOSE_CODE;

		return isReconnectableCloseEventCode || isAbnormalClosureCloseCode || isReconnectCloseCode;
	}

	#onClose(closeEvent: CloseEvent): void {
		const { code, reason } = closeEvent;
		const isReconnectable = this.#isCloseEventCodeReconnectable(code);

		const { client, label } = this;
		const debugMessage = `Session has been closed with code ${code}. Reason: ${reason || 'N/A'}`;

		const { events } = client;

		client.debug(debugMessage, {
			label,
		});
		events.emit(ClientEvents.GatewayShardDisconnect, {
			code,
			gatewayShard: this,
			isReconnectable,
			reason,
		});

		this.status = GatewayShardStatus.Disconnected;
		this.#resetWebSocketData();

		if (!isReconnectable) {
			return void this.#reset();
		}

		const { resumeGatewayUrl, sessionId } = this;

		if (resumeGatewayUrl && sessionId) {
			this.#initializeWebSocket(resumeGatewayUrl);
		} else {
			this.#initializeWebSocket();
		}
	}

	async #onMessage(messageEvent: MessageEvent<string>): Promise<void> {
		const bufferData = this.#normalizeMessageEvent(messageEvent);
		const bufferString = String(bufferData);

		const gatewayEvent = JSON.parse(bufferString) as GatewayEvent;

		this.#checkAndUpdateSequence(gatewayEvent);

		const { client } = this;
		const { events } = client;

		events.emit(ClientEvents.GatewayShardPacket, {
			gatewayShard: this,
			packet: gatewayEvent,
		});

		await this.#switchGatewayEvent(gatewayEvent);
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

		/*
		 * Math.random can return 0. If this happens, use a fallback of 0.5.
		 */
		// biome-ignore lint/style/noMagicNumbers: Hearbeat jitter fallback.
		const heartbeatJitter = Math.random() || 0.5;
		const heartbeatFirstWait = heartbeatInterval * heartbeatJitter;

		const opcodeName = getOpcodeName(GatewayOpcodes.Heartbeat);
		const debugMessage = `Waiting to Send First "${opcodeName}" Packet. Jitter: ${heartbeatJitter.toFixed(2)} (Waiting ${heartbeatFirstWait.toFixed()}ms)`;

		client.debug(debugMessage, {
			label,
		});

		events.emit(ClientEvents.GatewayShardHello, {
			gatewayShard: this,
			heartbeatInterval,
			heartbeatJitter,
		});

		/*
		 * TODO: Abort asynchronous operation if WebSocket is closed before sending
		 * first 'Heartbeat' packet.
		 */
		await setTimeout(heartbeatFirstWait).then(() => {
			this.#heartbeat();

			const opcodeName = getOpcodeName(GatewayOpcodes.Heartbeat);
			const debugMessage = `First "${opcodeName}" packet has been sent. Next "${opcodeName}" packets will be sent in an interval of ${heartbeatInterval}ms`;

			client.debug(debugMessage, {
				label,
			});
		});

		const interval = setInterval(this.#heartbeat.bind(this), heartbeatInterval);

		this.#setHeartbeatInterval(interval);
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session
	 */
	#onMessageInvalidSession(gatewayInvalidSession: GatewayInvalidSessionEvent): void {
		const { d: isResumable } = gatewayInvalidSession;
		const { client, label } = this;

		const action = isResumable ? 'Resume' : 'Re-identify';
		const debugMessage = `Session Invalidated by Discord. Gateway Shard must ${action}`;

		client.debug(debugMessage, {
			label,
		});

		if (isResumable) {
			this.#resume();
		} else {
			this.#resetResumeData();
			this.#identify();
		}
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway-events#reconnect
	 */
	#onMessageReconnect(): void {
		const { client, label } = this;
		const debugMessage = 'Reconnection Requested by Discord';

		client.debug(debugMessage, {
			label,
		});

		this.disconnect(true);
	}

	#onOpen(): void {
		this.status = GatewayShardStatus.Handshaking;

		const { sessionId } = this;

		if (sessionId) {
			this.#resume();
		} else {
			this.#identify();
		}
	}

	#normalizeMessageEvent(messageEvent: MessageEvent<MessageData>): Buffer {
		const { data } = messageEvent;

		/**
		 * This type-guard fixes a TypeScript issue with ArrayBuffer(s).
		 */
		if (isInstanceOf(data, ArrayBuffer)) {
			return Buffer.from(data);
		}

		return Buffer.from(data);
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
		this.#resetHeartbeatData();
		this.#resetResumeData();
		this.#resetWebSocketData();
		this.status = GatewayShardStatus.Disconnected;
	}

	#resetHeartbeatData() {
		this.#clearHeartbeatInterval();
		this.#lastHeartbeatReceivedAt = 0;
		this.#lastHeartbeatSentAt = 0;
	}

	#resetResumeData() {
		this.resumeGatewayUrl = null;
		this.sessionId = null;
	}

	#resetWebSocketData() {
		this.#removeWebSocketEventListeners();
		this.#ws = null;
	}

	#resume(): void {
		const { client, id, sequence, sessionId } = this;
		const { token } = client;

		if (!(sessionId && sequence)) {
			throw new GatewayShardError('Cannot resume without a session id or sequence number', id);
		}

		this.send(GatewayOpcodes.Resume, {
			seq: sequence,
			session_id: sessionId,
			token,
		});
	}

	#showInvalidOpcodeWarning(opcode: GatewayOpcodes): void {
		const { id } = this;

		const opcodeName = getOpcodeName(opcode);
		const warningMessage = `Cannot send a non-sendable opcode (${opcodeName}) to the Discord gateway.`;

		emitWarning(warningMessage, {
			code: `GATEWAY_SHARD_${id}`,
			type: 'Invalid Opcode Warning',
		});
	}

	#showMissingSequencesWarning(expectedSequence: number, receivedSequence: number): void {
		const { id } = this;

		const warningMessages = [
			`Some sequences were missed or skipped from shard ${id}.`,
			`Expected Sequence: ${expectedSequence} - Received Sequence: ${receivedSequence}.`,
		];
		const warningMessage = warningMessages.join('\n');

		emitWarning(warningMessage, {
			code: `GATEWAY_SHARD_${id}`,
			type: 'Missing Sequences Warning',
		});
	}

	#setHeartbeatInterval(interval: HeartbeatInterval): void {
		this.#clearHeartbeatInterval();
		this.#heartbeatInterval = interval;
	}

	async #switchGatewayEvent(gatewayEvent: GatewayEvent): Promise<void> {
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
			default:
				return;
		}
	}

	connect(): void {
		this.status = GatewayShardStatus.Connecting;
		this.#initializeWebSocket();
	}

	disconnect(reconnect: boolean = false): void {
		this.#clearHeartbeatInterval();

		const ws = this.#getWebSocket(true);

		const closeCode = reconnect ? RECONNECTION_CLOSE_CODE : NORMAL_CLOSURE_CLOSE_CODE;
		const closeReason = reconnect ? 'User Requested a Reconnection' : 'User Requested a Disconnection';

		ws.close(closeCode, closeReason);

		if (!reconnect) {
			this.#reset();
		}
	}

	send<Opcode extends SendableOpcodes>(opcode: Opcode, data: SendableOpcodesMap[Opcode]): void {
		if (!SENDABLE_OPCODES.includes(opcode)) {
			return void this.#showInvalidOpcodeWarning(opcode);
		}

		const { client, label } = this;
		const ws = this.#getWebSocket(true);

		const opcodeName = getOpcodeName(opcode);
		const debugMessage = `Sending Packet "${opcodeName}"`;

		client.debug(debugMessage, {
			label,
		});

		ws.send(
			JSON.stringify({
				d: data,
				op: opcode,
			}),
		);
	}
}

type HeartbeatInterval = ReturnType<typeof setInterval>;
type MessageData = string | ArrayBuffer;
