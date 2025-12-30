import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { RawUser } from '#types/resources/Users/index.js';
import type { TeamMemberRoleType, TeamMembershipState } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface RawTeam {
	icon: string | null;
	id: Snowflake;
	members: RawTeamMember[];
	name: string;
	owner_user_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface RawTeamMember {
	membership_state: TeamMembershipState;
	role: TeamMemberRoleType;
	team_id: Snowflake;
	user: RawUser;
}
