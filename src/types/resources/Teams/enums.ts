/**
 * @see https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types
 */
export enum TeamMemberRoleType {
	Admin = "admin",
	Developer = "developer",
	ReadOnly = "read_only",
}

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export enum TeamMembershipState {
	Accepted = 2,
	Invited = 1,
}
