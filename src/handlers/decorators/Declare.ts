import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import type { DeclarableConstructor, DeclareOptions } from "./Declare.types.js";

export function Declare<Target extends DeclarableConstructor>(declareOptions: DeclareOptions<Target>) {
	return (target: DeclarableConstructor) => {
		return class extends target {
			constructor(...args: unknown[]) {
				super(...args);

				defineImmutableProperty(this, "declareOptions", declareOptions);
			}
		};
	};
}
