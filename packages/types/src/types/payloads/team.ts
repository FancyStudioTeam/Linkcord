import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * Represents a Discord team structure.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeam {
  /** The icon of the team. */
  icon: Nullable<string>;
  /** The id of the team. */
  id: Snowflake;
  /** The list of members of the team. */
  members: APITeamMember[];
  /** The name of the team. */
  name: string;
  /** The id of the user who owns the team. */
  owner_user_id: Snowflake;
}

/**
 * Represents a Discord team member structure.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface APITeamMember {
  /** The membership state of the team member. */
  membership_state: TeamMembershipState;
  /** The role of the team member. */
  role: TeamMemberRoleTypes;
  /** The id of the team to which the team member belongs. */
  team_id: Snowflake;
  /** The user of the team member. */
  user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types
 */
export enum TeamMemberRoleTypes {
  Admin = "admin",
  Developer = "developer",
  ReadOnly = "read_only",
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export enum TeamMembershipState {
  Accepted = 2,
  Invited = 1,
}
