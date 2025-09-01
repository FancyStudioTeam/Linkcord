/** Represents the properties of a `Fragment` JSX component. */
export interface FragmentProperties {
	children: unknown[];
}

/** Represents the properties of a JSX component. */
export type ComponentProperties<Properties, Children> = Properties & {
	children?: Children;
};
