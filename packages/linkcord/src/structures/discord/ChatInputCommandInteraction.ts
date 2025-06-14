import {
  type APIApplicationCommandInteraction,
  ApplicationCommandTypes,
  type Snowflake,
} from "@fancystudioteam/linkcord-types";
import { CommandInteractionBase } from "./base/CommandInteractionBase.js";

/**
 * @public
 */
export class ChatInputCommandInteraction extends CommandInteractionBase<ApplicationCommandTypes.ChatInput> {
  constructor(id: Snowflake, data: APIApplicationCommandInteraction) {
    super(id, data, ApplicationCommandTypes.ChatInput);
  }
}
