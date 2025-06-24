import { ApplicationCommandTypes } from "@fancystudioteam/linkcord-types";
import type { UserContextCommandOptions } from "../../decorators/Declare.js";

export abstract class UserContextCommand {
  readonly declareOptions: UserContextCommandOptions | null = null;
  readonly type = ApplicationCommandTypes.User;

  /**
   * TODO: Implement `toJSON` method.
   */
}
