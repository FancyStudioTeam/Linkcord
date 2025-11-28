export abstract class BaseBuilder<BuilderData> {
	// biome-ignore lint/style/useReadonlyClassProperties: Subclasses reassign this property.
	protected data: Partial<BuilderData> = {};

	abstract toJSON(): BuilderData;
}
