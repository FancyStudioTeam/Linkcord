import type { Localizations } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure
 */
export interface APIApplicationRoleConnectionMetadata {
  description: string;
  description_localizations?: Localizations;
  key: string;
  name: string;
  name_localizations?: Localizations;
  type: ApplicationRoleConnectionMetadataTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
 */
export enum ApplicationRoleConnectionMetadataTypes {
  BooleanEqual = 7,
  BooleanNotEqual = 8,
  DatetimeGreaterThanOrEqual = 6,
  DatetimeLessThanOrEqual = 5,
  IntegerEqual = 3,
  IntegerGreaterThanOrEqual = 2,
  IntegerLessThanOrEqual = 1,
  IntegerNotEqual = 4,
}
