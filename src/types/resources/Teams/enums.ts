/**
 * The types of a team member role.
 * @see https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types
 */
export enum TeamMemberRoleTypes {
	Admin = "admin",
	Developer = "developer",
	ReadOnly = "read_only",
}

/**
 * The states of a team member.
 * @see https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export enum TeamMembershipStates {
	Accepted = 2,
	Invited = 1,
}
