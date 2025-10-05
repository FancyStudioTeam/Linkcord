/**
 * Represents a base class for all builder structures.
 *
 * @typeParam BuilderData - The type of the data of the builder.
 * @group Builders/Structures
 */
export abstract class BaseBuilder<BuilderData> {
	/** The object containing the data of the builder. */
	// biome-ignore lint/style/useReadonlyClassProperties: The "data" property is being assigned in some builders.
	protected data: Partial<BuilderData> = {};

	/** Converts the builder instance into a JSON object. */
	abstract toJSON(): BuilderData;
}
