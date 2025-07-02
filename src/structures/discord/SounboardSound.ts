import type { APIGuildSoundboardSound, Snowflake } from "#types/index.js";
import { Base } from "./base/Base.js";
import { User } from "./User.js";

/**
 * @public
 */
export class SoundboardSound extends Base {
	available: boolean;
	emojiId: Snowflake | null;
	emojiName: string | null;
	guildId: Snowflake;
	name: string;
	soundId: Snowflake;
	user: User | null;
	volume: number;

	constructor(id: Snowflake, data: APIGuildSoundboardSound) {
		super(id);

		const { available, emoji_id, emoji_name, guild_id, name, sound_id, user, volume } = data;

		this.available = available;
		this.emojiId = emoji_id;
		this.emojiName = emoji_name;
		this.guildId = guild_id;
		this.name = name;
		this.soundId = sound_id;
		this.user = user ? new User(user.id, user) : null;
		this.volume = volume;
		this.patch(data);
	}

	/**
	 * @internal
	 */
	private patch(data: SoundboardSoundPatchData): void {
		const { available, emoji_id, emoji_name, guild_id, name, sound_id, user, volume } = data;

		if (available) {
			this.available = available;
		}

		if (emoji_id) {
			this.emojiId = emoji_id;
		}

		if (emoji_name) {
			this.emojiName = emoji_name;
		}

		if (guild_id) {
			this.guildId = guild_id;
		}

		if (name) {
			this.name = name;
		}

		if (sound_id) {
			this.soundId = sound_id;
		}

		if (user) {
			this.user = user ? new User(user.id, user) : null;
		}

		if (volume) {
			this.volume = volume;
		}
	}
}

/**
 * @internal
 */
type SoundboardSoundPatchData = Partial<APIGuildSoundboardSound>;
