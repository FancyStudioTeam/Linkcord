import type { UserContextCommandInstance } from "../commands/types.js";

export const Declare =
  <Target extends AnyDeclarableInstance>(declareOptions: DeclareOptions<Target>) =>
  (target: AnyDeclarableInstance) =>
    class extends target {
      readonly declareOptions = declareOptions;
    };

export interface UserContextCommandOptions {
  name: string;
}

type DeclareOptions<Target extends AnyDeclarableInstance> = Target extends UserContextCommandInstance
  ? UserContextCommandOptions
  : never;

type AnyDeclarableInstance = UserContextCommandInstance;
