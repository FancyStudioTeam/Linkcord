import type { CreateUserContextApplicationCommandOptions } from "#types/parsed/Applications.js";
import type { UserContextCommandInstance } from "../commands/types.js";

/**
 * @public
 */
export const Declare =
	<Target extends DeclarableInstance>(declareOptions: DeclareOptions<Target>) =>
	(target: DeclarableInstance) =>
		class extends target {
			readonly declareOptions = declareOptions;
		};

/**
 * @public
 */
type DeclarableInstance = UserContextCommandInstance;

/**
 * @public
 */
type DeclareOptions<Target extends DeclarableInstance> = Target extends UserContextCommandInstance
	? UserContextCommandOptions
	: never;

/**
 * @public
 */
export type UserContextCommandOptions = Omit<CreateUserContextApplicationCommandOptions, "type">;
