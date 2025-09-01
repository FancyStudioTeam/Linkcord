import type { FragmentProperties } from "./types/jsx-runtime.js";

/**
 * Creates a `Fragment` JSX component.
 * @param properties - The properties of the `Fragment` JSX component.
 */
export function Fragment(properties: FragmentProperties): unknown {
	const { children } = properties;

	return Array.isArray(children) ? children.flat() : children;
}

/**
 * Creates a JSX component with one child.
 * @param componentFunction - The function to execute when creating the JSX component.
 * @param properties - The properties of the JSX component.
 * @param children - The children of the JSX component.
 */
export function jsx(
	// biome-ignore lint/complexity/noBannedTypes: Allow any function.
	componentFunction: Function,
	properties: Record<string, unknown>,
	...children: unknown[]
): unknown {
	return componentFunction({
		...properties,
		children: properties.children ?? children,
	});
}

/** Creates a JSX component with multiple children. */
export const jsxs = jsx;
