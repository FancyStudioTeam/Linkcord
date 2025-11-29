/**
 * @see https://discord.com/developers/docs/components/reference#button-button-styles
 */
export enum ButtonStyle {
	Danger = 4,
	Link = 5,
	Premium = 6,
	Primary = 1,
	Secondary = 2,
	Success = 3,
}

/**
 * @see https://discord.com/developers/docs/components/reference#component-object-component-types
 */
export enum ComponentType {
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
 * @see https://discord.com/developers/docs/components/reference#user-select-select-default-value-structure
 */
export enum SelectMenuDefaultValueType {
	Channel = "channel",
	Role = "role",
	User = "user",
}

/**
 * @see https://discord.com/developers/docs/components/reference#separator-separator-structure
 */
export enum SeparatorSpacingSize {
	Large = 2,
	Small = 1,
}

/**
 * @see https://discord.com/developers/docs/components/reference#text-input-text-input-styles
 */
export enum TextInputStyle {
	Paragraph = 2,
	Short = 1,
}
