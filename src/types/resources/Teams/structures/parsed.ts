import type { User } from "#structures/index.js";
import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { TeamMemberRoleTypes, TeamMembershipStates } from "../enums.js";

/**
 * Represents a Discord team object.
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface Team {
	/** The icon of the team. */
	icon: string | null;
	/** The ID of the team. */
	id: Snowflake;
	/** The members of the team. */
	members: TeamMember[];
	/** The name of the team. */
	name: string;
	/** The ID of the user who owns the team. */
	ownerUserId: Snowflake;
}

/**
 * Represents a Discord team member object.
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
