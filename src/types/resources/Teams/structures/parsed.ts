import type { User } from "#structures/index.js";
import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { TeamMemberRoleTypes, TeamMembershipStates } from "../enums.js";

/**
 * Represents a team member.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface TeamMember {
	/** The state of the membership. */
	membershipState: TeamMembershipStates;
	/** The role of the team member. */
	role: TeamMemberRoleTypes;
	/** The ID of the team. */
	teamId: Snowflake;
	/** The user of the team member. */
	user: User;
}
