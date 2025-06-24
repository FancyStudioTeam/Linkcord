import type { UserContextCommandOptions } from "#handlers/decorators/Declare.js";
import { ApplicationCommandTypes } from "#types/index.js";

export abstract class UserContextCommand {
  readonly declareOptions: UserContextCommandOptions | null = null;
  readonly type = ApplicationCommandTypes.User;

  /**
   * TODO: Implement `toJSON` method.
   */
}
