/**
 * Represents a Discord voice region object.
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface VoiceRegion {
	/** Whether the voice region is custom. */
	custom: boolean;
	/** Whether the voice region is deprecated. */
	deprecated: boolean;
	/** The ID of the voice region. */
	id: string;
	/** The name of the voice region. */
	name: string;
	/** Whether the voice region is optimal. */
	optimal: boolean;
}
