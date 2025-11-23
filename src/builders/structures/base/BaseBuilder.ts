export abstract class BaseBuilder<BuilderData> {
	// biome-ignore lint/style/useReadonlyClassProperties: (x)
	protected data: Partial<BuilderData> = {};

	abstract toJSON(): BuilderData;
}
