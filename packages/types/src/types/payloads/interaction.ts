import type { Snowflake } from "#types/shared";
import type { APIGuildMember } from "./guild.js";
import type { APIAttachment } from "./message.js";
import type { APIRole } from "./permission.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
// TODO: Add "channels" and "messages" fields
export interface APIResolvedData {
  attachments?: Record<Snowflake, APIAttachment>;
  members?: Record<Snowflake, APIResolvedDataMember>;
  roles?: Record<Snowflake, APIRole>;
  users?: Record<Snowflake, APIUser>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIResolvedDataMember extends Omit<APIGuildMember, "deaf" | "mute" | "user"> {}

/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
export enum ComponentTypes {
  ActionRow = 1,
  Button = 2,
  ChannelSelect = 8,
  MentionableSelect = 7,
  RoleSelect = 6,
  StringSelect = 3,
  TextInput = 4,
  UserSelect = 5,
}
