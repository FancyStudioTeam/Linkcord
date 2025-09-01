/** Represents a base class for all builder classes. */
export abstract class BaseBuilder<BuilderData> {
	/** The object containing the data of the builder. */
	private declare data: Partial<BuilderData>;

	/** Loads the data from a JSON object or a builder instance. */
	abstract from(data: unknown): this;

	/** Converts the builder instance into a JSON object. */
	abstract toJSON(): BuilderData;
}
