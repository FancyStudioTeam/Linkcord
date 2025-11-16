import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { TeamMemberRoleType, TeamMembershipState } from "../enums.js";

/**
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
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface APITeamMember {
	membership_state: TeamMembershipState;
	role: TeamMemberRoleType;
	team_id: Snowflake;
	user: APIUser;
}
