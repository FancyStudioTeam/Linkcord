import type { Client } from "#client/index.js";
import type { APIGuildSoundboardSound, JSONSoundboardSound, Snowflake } from "#types/index.js";
import { Base } from "./Base.js";
import { User } from "./User.js";

/**
 * Represents a Discord guild soundboard sound.
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-example-guild-soundboard-sound
 * @public
 */
export class SoundboardSound extends Base {
	/**
	 * Whether the soundboard sound is available to use.
	 */
	available!: boolean;
	/**
	 * The emoji of the soundboard sound.
	 */
	emojiId!: Snowflake | null;
	/**
	 * The emoji name of the soundboard sound.
	 */
	emojiName!: string | null;
	/**
	 * The ID of the guild at which the soundboard sound belongs.
	 */
	readonly guildId: Snowflake;
	/**
	 * The name of the soundboard sound.
	 */
	name: string;
	/**
	 * The ID of the soundboard sound.
	 */
	readonly soundId: Snowflake;
	/**
	 * The user who created the soundboard sound, if any.
	 */
	user!: User | null;
	/**
	 * The volume of the soundboard sound.
	 */
	volume: number;

	/**
	 * Creates a new {@link SoundboardSound | `SoundboardSound`} instance.
	 * @param client - The client that instantiated the soundboard sound.
	 * @param data - The
	 * {@link APIGuildSoundboardSound | `APIGuildSoundboardSound`} object.
	 */
	constructor(client: Client, data: APIGuildSoundboardSound) {
		super(client);

		const { guild_id, name, sound_id, volume } = data;

		this.guildId = guild_id;
		this.name = name;
		this.soundId = sound_id;
		this.volume = volume;
		this._patch(data);
	}

	/**
	 * Patches the {@link SoundboardSound | `SoundboardSound`} instance with
	 * the given data.
	 * @param data - The data to use when patching the soundboard sound.
	 * @internal
	 */
	protected _patch(data: SoundboardSoundPatchData = {}): void {
		const { available, emoji_id, emoji_name, name, user, volume } = data;

		if (available) {
			this.available = available;
		} else {
			this.available ??= false;
		}

		if (emoji_id) {
			this.emojiId = emoji_id;
		} else {
			this.emojiId ??= null;
		}

		if (emoji_name) {
			this.emojiName = emoji_name;
		} else {
			this.emojiName ??= null;
		}

		if (name) {
			this.name = name;
		}

		if (user) {
			const { client } = this;

			this.user = new User(client, user);
		} else {
			this.user ??= null;
		}

		if (volume) {
			this.volume = volume;
		}
	}

	/**
	 * Deletes the soundboard sound from the guild.
	 * @param reason - The reason for deleting the soundboard sound.
	 * @returns The deleted {@link SoundboardSound | `SoundboardSound`}.
	 */
	delete(_reason?: string): Promise<SoundboardSound> {
		return Promise.resolve(this);
	}

	/**
	 * Updates the soundboard sound.
	 * @param options - The options to use when updating the soundboard sound.
	 * @returns The updated {@link SoundboardSound | `SoundboardSound`}
	 * instance.
	 */
	edit(_options: unknown): Promise<SoundboardSound> {
		return Promise.resolve(this);
	}

	/**
	 * Sends the soundboard sound to the user voice channel.
	 * @param channelId - The ID of the voice channel where the soundboard
	 * sound will be played.
	 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
	 */
	async send(channelId: Snowflake): Promise<void> {
		const { guildId, soundId } = this;

		return await super._api.postChannelSoundboardSound(channelId, {
			soundId,
			sourceGuildId: guildId,
		});
	}

	/**
	 * Converts the {@link SoundboardSound | `SoundboardSound`} instance to a
	 * JSON object.
	 * @returns The {@link JSONSoundboardSound | `JSONSoundboardSound`}
	 * object.
	 */
	toJSON(): JSONSoundboardSound {
		const { available, emojiId, emojiName, guildId, name, soundId, user, volume } = this;

		return Object.freeze({
			available,
			emojiId,
			emojiName,
			guildId,
			name,
			soundId,
			user,
			volume,
		});
	}
}

/**
 * The available data to patch from a
 * {@link SoundboardSound | `SoundboardSound`} instance.
 * @internal
 */
type SoundboardSoundPatchData = Partial<APIGuildSoundboardSound>;
