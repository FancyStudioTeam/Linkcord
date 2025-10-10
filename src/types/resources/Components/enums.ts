/**
 * The styles of a button component.
 * @see https://discord.com/developers/docs/components/reference#button-button-styles
 */
export enum ButtonStyles {
	Danger = 4,
	Link = 5,
	Premium = 6,
	Primary = 1,
	Secondary = 2,
	Success = 3,
}

/**
 * The types of a component.
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export enum ComponentTypes {
	ActionRow = 1,
	Button = 2,
	ChannelSelect = 8,
	Container = 17,
	File = 13,
	FileUpload = 19,
	Label = 18,
	MediaGallery = 12,
	MentionableSelect = 7,
	RoleSelect = 6,
	Section = 9,
	Separator = 14,
	StringSelect = 3,
	TextDisplay = 10,
	TextInput = 4,
	Thumbnail = 11,
	UserSelect = 5,
}

/**
 * The types of a default value of a select menu component.
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export enum SelectMenuDefaultValueType {
	Channel = "channel",
	Role = "role",
	User = "user",
}

/**
 * The size of the spacing of a separator component.
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export enum SeparatorSpacingSizes {
	Large = 2,
	Small = 1,
}

/**
 * The styles of a text input component.
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-styles
 */
export enum TextInputStyle {
	Paragraph = 2,
	Short = 1,
}
