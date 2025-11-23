import type { FragmentProperties } from "./types/jsx-runtime.js";

export function Fragment(properties: FragmentProperties): unknown {
	const { children } = properties;

	return Array.isArray(children) ? children.flat() : children;
}

export function jsx(
	// biome-ignore lint/complexity/noBannedTypes: Expect any function.
	componentFunction: Function,
	properties: Record<string, unknown>,
	...children: unknown[]
): unknown {
	return componentFunction({
		...properties,
		children: properties.children ?? children,
	});
}

export const jsxs = jsx;
