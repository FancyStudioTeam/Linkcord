import type { User } from '#structures/index.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { TeamMemberRoleType, TeamMembershipState } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface Team {
	icon: string | null;
	id: Snowflake;
	members: TeamMember[];
	name: string;
	ownerUserId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface TeamMember {
	membershipState: TeamMembershipState;
	role: TeamMemberRoleType;
	teamId: Snowflake;
	user: User;
}
