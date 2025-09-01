import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { TeamMemberRoleTypes, TeamMembershipStates } from "../enums.js";

/**
 * Represents a Discord team object.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeam {
	/** The icon of the team. */
	icon: string | null;
	/** The ID of the team. */
	id: Snowflake;
	/** The members of the team. */
	members: APITeamMember[];
	/** The name of the team. */
	name: string;
	/** The ID of the user who owns the team. */
	owner_user_id: Snowflake;
}

/**
 * Represents a Discord team member object.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface APITeamMember {
	/** The state of the membership. */
	membership_state: TeamMembershipStates;
	/** The role of the team member. */
	role: TeamMemberRoleTypes;
	/** The ID of the team. */
	team_id: Snowflake;
	/** The user of the team member. */
	user: APIUser;
}
