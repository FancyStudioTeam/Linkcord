import type { DeclarableInstance, DeclareOptions } from "#handlers/types/index.js";

/**
 * Declares the options for a command or component.
 * @param declareOptions - The options to declare.
 * @returns The decorated class.
 * @public
 */
export function Declare<Target extends DeclarableInstance>(declareOptions: DeclareOptions<Target>) {
	return (target: DeclarableInstance) =>
		class extends target {
			constructor(...args: unknown[]) {
				super(...args);

				Object.defineProperty(this, "__declare__", {
					configurable: false,
					enumerable: false,
					value: declareOptions,
					writable: false,
				});
			}
		};
}
