import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-example-default-soundboard-sound
 */
export interface APIDefaultSoundboardSound {
	available: boolean;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
	name: string;
	sound_id: string;
	volume: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-example-guild-soundboard-sound
 */
export interface APIGuildSoundboardSound extends Omit<APIDefaultSoundboardSound, "sound_id"> {
	guild_id: Snowflake;
	sound_id: Snowflake;
	user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object-soundboard-sound-structure
 */
export type APISoundboardSound = APIDefaultSoundboardSound | APIGuildSoundboardSound;
