/**
 * Represents an embed field.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface APIEmbedField {
	/** Whether the field should be displayed inline. */
	inline?: boolean;
	/** The name of the field. */
	name: string;
	/** The value of the field. */
	value: string;
}
