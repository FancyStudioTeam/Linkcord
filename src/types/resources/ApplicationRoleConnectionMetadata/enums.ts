/**
 * The types of the metadata of an application role connection.
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
 */
export enum ApplicationRoleConnectionMetadataTypes {
	BooleanEqual = 7,
	BooleanNotEqual = 8,
	DateTimeLessThatOrEqual = 5,
	DateTimeGreatherThanOrEqual = 6,
	IntegerEqual = 3,
	IntegerGreaterThanOrEqual = 2,
	IntegerLessThanOrEqual = 1,
	IntegerNotEqual = 4,
}
