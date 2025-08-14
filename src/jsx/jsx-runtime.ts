import type { FragmentProperties } from "./types/jsx-runtime.js";

/**
 * Represents a `Fragment` component.
 * @group JSX/Utils
 * @public
 */
export function Fragment({ children }: FragmentProperties): unknown {
	return Array.isArray(children) ? children.flat() : children;
}

/**
 * Creates a JSX component with one child.
 * @param componentFunction - The function to execute when creating the
 * 	component.
 * @param properties - The properties of the component.
 * @param children - The children of the component.
 * @group JSX/Utils
 * @public
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

/**
 * Creates a JSX component with multiple children.
 * @group JSX/Utils
 * @public
 */
export const jsxs = jsx;
