export interface ValidationErrorIssue {
	issues: ValidationErrorIssue[] | null;
	message: string;
	path: PropertyKey[];
}
