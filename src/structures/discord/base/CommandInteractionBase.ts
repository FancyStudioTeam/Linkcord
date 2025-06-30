import {
    type APIApplicationCommandInteraction,
    type ApplicationCommandTypes,
    InteractionTypes,
    type Snowflake,
} from "#types/index.js";
import { InteractionBase } from "./InteractionBase.js";

/**
 * @internal
 */
export class CommandInteractionBase<
    ApplicationCommandType extends ApplicationCommandTypes,
> extends InteractionBase<InteractionTypes.ApplicationCommand> {
    commandName: string;
    commandType: ApplicationCommandType;

    constructor(
        id: Snowflake,
        data: APIApplicationCommandInteraction,
        type: ApplicationCommandType,
    ) {
        super(id, data, InteractionTypes.ApplicationCommand);

        if (!data.data) {
            throw new TypeError(
                "Field 'data' is missing from interaction data but should be always present for application command interactions.",
            );
        }

        this.commandName = data.data.name;
        this.commandType = type;
    }
}
