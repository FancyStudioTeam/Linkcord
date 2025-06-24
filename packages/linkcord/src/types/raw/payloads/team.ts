import type { Snowflake } from "../shared/discord.js";
import type { APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeam {
  icon: string | null;
  id: Snowflake;
  members: APITeamMember[];
  name: string;
  owner_user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface APITeamMember {
  membership_state: TeamMembershipState;
  role: TeamMemberRoleTypes;
  team_id: Snowflake;
  user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types
 */
export enum TeamMemberRoleTypes {
  Admin = "admin",
  Developer = "developer",
  ReadOnly = "read_only",
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export enum TeamMembershipState {
  Accepted = 2,
  Invited = 1,
}
