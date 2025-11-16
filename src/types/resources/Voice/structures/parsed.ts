/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface VoiceRegion {
	custom: boolean;
	deprecated: boolean;
	id: string;
	name: string;
	optimal: boolean;
}
