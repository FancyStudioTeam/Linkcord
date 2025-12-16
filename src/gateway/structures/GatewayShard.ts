import { platform } from "node:process";
import { type Client, ClientEvents } from "#client/index.js";
import { GatewayShardError } from "#gateway/errors/GatewayShardError.js";
import { getOpcodeName } from "#gateway/functions/getOpcodeName.js";
import { DispatchHooks } from "#gateway/hooks/index.js";
import { RESUMABLE_CLOSE_EVENT_CODES, SENDABLE_OPCODES } from "#gateway/utils/Constants.js";
import { type GatewayDispatchEvent, type GatewayEvent, GatewayOpcodes } from "#types/index.js";
import { LINKCORD_AGENT } from "#utils/Constants.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { GatewayManager } from "./GatewayManager.js";
import { GatewayShardStatus, type SendableOpcodes, type SendableOpcodesMap } from "./GatewayShard.types.js";

const GOING_AWAY_CLOSE_EVENT_CODE = 1001;
const GRACEFUL_CLOSE_EVENT_CODE = 1000;

export class GatewayShard {
	declare readonly client: Client;
	declare readonly manager: GatewayManager;

	protected resumeGatewayURL: string | null = null;
	protected sequence: number | null = null;
	protected sessionId: string | null = null;

	readonly id: number;

	#lastHeartbeatReceivedAt = 0;
	#lastHeartbeatSentAt = 0;
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

	#getWebSocket(): WebSocket {
		const ws = this.#ws;
		const { OPEN } = WebSocket;

		if (!ws || ws.readyState !== OPEN) {
			throw new GatewayShardError("WebSocket has not been opened or initialized yet", this.id);
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

	#initializeWebSocket(gatewayURL: string = GatewayManager.GATEWAY_URL_BASE): void {
		const urlObject = new URL(gatewayURL);

		const { searchParams } = urlObject;
		const { client } = this;

		const label = this.#label;
		const gatewayVersionString = String(GatewayManager.GATEWAY_VERSION);

		searchParams.append("encoding", "json");
		searchParams.append("v", gatewayVersionString);

		const gatewayURLString = urlObject.toString();
		const debugMessage = `Handshaking with the Discord gateway using URL "${gatewayURLString}"...`;

		client.debug(debugMessage, {
			label,
		});

		this.#ws = new WebSocket(gatewayURLString);
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
		events.emit(ClientEvents.ShardDisconnected, reason, code, isReconnectable, this);

		const gatewayURL = isReconnectable && resumeGatewayURL ? resumeGatewayURL : undefined;

		this.#initializeWebSocket(gatewayURL);
	}

	async #onMessage(messageEvent: MessageEvent): Promise<void> {
		const { data } = messageEvent;

		const dataString = data.toString();
		const message = JSON.parse(dataString) as GatewayEvent;

		const { op: opcode } = message;
		const { client, id } = this;
		const { events } = client;

		events.emit(ClientEvents.ShardPacket, message, this);

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
				const opcodeName = getOpcodeName(opcode);
				const warning = `Received an unhandled opcode (${opcode}: ${opcodeName}) from "Shard ${id}".`;

				events.emit(ClientEvents.Warn, warning);

				break;
			}
		}
	}

	async #onMessageDispatch(dispatch: GatewayDispatchEvent): Promise<void> {
		const { client } = this;
		const { d, t } = dispatch;

		const hook = DispatchHooks[t];

		if (hook) {
			await hook(client, this, d as never);
		}
	}

	#onMessageHeartbeatAck(): void {
		this.#lastHeartbeatReceivedAt = Date.now();
	}

	#onMessageHello(heartbeatInterval: number): void {
		const { client, sessionId } = this;
		const { events } = client;

		events.emit(ClientEvents.ShardHello, heartbeatInterval, this);

		if (sessionId) {
			this.#resume();
		} else {
			this.#identify();
			this.#heartbeat();
		}

		setInterval(this.#heartbeat.bind(this), heartbeatInterval);
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

	#updateSequence(sequence: number | null): void {
		if (sequence === null) return;

		const { client, id, sequence: currentSequence } = this;
		const { events } = client;

		const expectedCurrentSequence = (currentSequence ?? 0) + 1;

		if (expectedCurrentSequence < sequence || sequence !== expectedCurrentSequence) {
			const warning = `Some sequences were skipped or missed from "Shard ${id}". Expected "${expectedCurrentSequence}" but received "${sequence}".`;

			events.emit(ClientEvents.Warn, warning);
		}

		this.sequence = sequence;
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
		this.status = GatewayShardStatus.Connecting;
		this.#initializeWebSocket();
	}

	send<Opcode extends SendableOpcodes>(opcode: Opcode, payload: SendableOpcodesMap[Opcode]): void {
		const { id } = this;

		if (!SENDABLE_OPCODES.includes(opcode)) {
			const opcodeName = getOpcodeName(opcode);

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
}
