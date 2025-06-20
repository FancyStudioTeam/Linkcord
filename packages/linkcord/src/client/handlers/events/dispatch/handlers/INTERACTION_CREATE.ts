import {
  ApplicationCommandTypes,
  type GatewayDispatchInteractionCreatePayload,
  InteractionTypes,
} from "@fancystudioteam/linkcord-types";
import { ChatInputCommandInteraction } from "../../../../../structures/discord/ChatInputCommandInteraction.js";
import type { DispatchHandler } from "../dispatchHandlers.js";

/**
 * @internal
 */
export const INTERACTION_CREATE: DispatchHandler<GatewayDispatchInteractionCreatePayload> = (
  client,
  shard,
  interaction,
) => {
  const { type, data } = interaction;

  if (type === InteractionTypes.ApplicationCommand && data?.type === ApplicationCommandTypes.ChatInput) {
    const chatInputCommandInteraction = new ChatInputCommandInteraction(interaction.id, interaction);

    /**
     * biome-ignore lint/complexity/useLiteralKeys: Accessing private
     * properties.
     */
    client["emit"]("interactionCreate", {
      interaction: chatInputCommandInteraction,
      shard,
    });
  }
};
