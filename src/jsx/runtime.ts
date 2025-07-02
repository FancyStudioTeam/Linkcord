/**
 * @public
 */
export const Fragment = ({ children }: FragmentProperties) =>
	Array.isArray(children) ? children.flat() : children;

/**
 * @public
 */
export const jsx = (
	/**
	 * biome-ignore lint/complexity/noBannedTypes: (x)
	 */
	componentFunction: Function,
	properties: Record<string, unknown>,
	...children: unknown[]
): unknown =>
	componentFunction({
		...properties,
		children: properties.children ?? children,
	});

/**
 * @public
 */
export const jsxs = jsx;

/**
 * @public
 */
export interface FragmentProperties {
	children: unknown[];
}

/**
 * @public
 */
export type ComponentProperties<Properties, Children> = Partial<
	Properties & {
		children?: Children;
	}
>;
