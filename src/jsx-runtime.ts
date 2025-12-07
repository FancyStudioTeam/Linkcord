import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";

const { isArray } = AssertionUtils;

export function Fragment(properties: FragmentProperties): unknown {
	const { children } = properties;

	if (isArray(children)) {
		return children.flat();
	}

	return children;
}

export function jsx(
	componentFunction: ComponentFunction,
	properties: Record<string, unknown>,
	...children: unknown[]
): unknown {
	const { children: propertiesChildren } = properties;

	return componentFunction({
		...properties,
		children: propertiesChildren ?? children,
	});
}

export const jsxs = jsx;

export interface FragmentProperties {
	children: unknown[];
}

type ComponentFunction = (...args: unknown[]) => unknown;
