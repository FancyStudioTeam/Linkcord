import type { Nullable, Snowflake } from "#types/shared";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeam {
  icon: Nullable<string>;
  id: Snowflake;
  members: APITeamMember[];
  name: string;
  owner_user_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface APITeamMember {
  membership_state: TeamMembershipState;
  role: TeamMemberRoleTypes;
  team_id: Snowflake;
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
