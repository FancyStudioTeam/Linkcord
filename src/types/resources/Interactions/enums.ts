/**
 * The types of callback of an interaction.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export enum InteractionCallbackTypes {
	ApplicationCommandAutocompleteResult = 8,
	ChannelMessageWithSource = 4,
	DeferredChannelMessageWithSource = 5,
	DeferredUpdateMessage = 6,
	LaunchActivity = 12,
	Modal = 9,
	Pong = 1,
	UpdateMessage = 7,
}

/**
 * The types of an interaction.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
export enum InteractionTypes {
	ApplicationCommand = 2,
	ApplicationCommandAutocomplete = 4,
	MessageComponent = 3,
	ModalSubmit = 5,
	Ping = 1,
}
