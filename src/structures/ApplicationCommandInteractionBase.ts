import type { Client } from '#client/index.js';
import { deserializeApplicationCommandInteractionData } from '#transformers/Interactions/Deserializer.js';
import {
	type ApplicationCommandInteractionData,
	type ApplicationCommandType,
	InteractionCallbackType,
	InteractionType,
	MessageFlags,
	type RawApplicationCommandInteraction,
} from '#types/index.js';
import { BitField } from '#utils/index.js';
import { InteractionBase } from './InteractionBase.js';

/**
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export abstract class ApplicationCommandInteractionBase extends InteractionBase {
	/** The data of the interaction. */
	readonly data: ApplicationCommandInteractionData;
	/** The type of the interaction. */
	readonly type: InteractionType.ApplicationCommand = InteractionType.ApplicationCommand;

	constructor(client: Client, rawApplicationCommandInteraction: RawApplicationCommandInteraction) {
		super(client, rawApplicationCommandInteraction);

		const { data: _data } = rawApplicationCommandInteraction;
		const data = this.#getInteractionData(rawApplicationCommandInteraction);

		this.data = data;
	}

	#getInteractionData(rawApplicationCommandInteraction: RawApplicationCommandInteraction): ApplicationCommandInteractionData {
		const { data } = rawApplicationCommandInteraction;

		if (!data) {
			throw new TypeError('Received an interaction without data');
		}

		return deserializeApplicationCommandInteractionData(data);
	}

	/**
	 * The name of the application command.
	 */
	get commandName(): string {
		const { data } = this;
		const { name } = data;

		return name;
	}

	/**
	 * The type of the application command.
	 */
	get commandType(): ApplicationCommandType {
		const { data } = this;
		const { type } = data;

		return type;
	}

	/**
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
	 */
	async defer(ephemeral?: boolean): Promise<void> {
		const flags = new BitField();

		if (ephemeral) {
			flags.add(MessageFlags.Ephemeral);
		}

		return await super.createInteractionResponse({
			data: {
				flags,
			},
			type: InteractionCallbackType.DeferredChannelMessageWithSource,
		});
	}
}
