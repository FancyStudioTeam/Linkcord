import type { Localizations } from '#types/index.js';

export interface StringOptionData<Required extends boolean> {
	description: string;
	descriptionLocalizations?: Localizations;
	required?: Required;
}
