import type { Localizations } from "#types/miscellaneous/discord.js";
import type { ApplicationRoleConnectionMetadataTypes } from "../enums.js";

/**
 * Represents a Discord application role connection metadata object.
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure
 */
export interface ApplicationRoleConnectionMetadata {
	/** The description of the metadata. */
	description: string;
	/** The localized description of the metadata. */
	descriptionLocalizations?: Localizations;
	/** The key of the metadata. */
	key: string;
	/** The name of the metadata. */
	name: string;
	/** The localized name of the metadata. */
	nameLocalizations?: Localizations;
	/** The type of the metadata. */
	type: ApplicationRoleConnectionMetadataTypes;
}
