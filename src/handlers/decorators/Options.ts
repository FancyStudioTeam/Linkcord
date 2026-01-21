import type { ChatInputCommandHandlerConstructor, OptionData } from '#handlers/commands/index.js';
import type { ApplicationCommandOption } from '#types/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';

export function Options<Target extends ChatInputCommandHandlerConstructor>(options: Record<string, OptionData>) {
	return (target: Target) => {
		// @ts-expect-error
		return class extends target {
			constructor(...args: unknown[]) {
				super(...args);

				defineReadonlyProperty(this, 'options', transformOptionsDataToApplicationCommandOptions(options));
			}
		};
	};
}

function transformOptionsDataToApplicationCommandOptions(options: Record<string, OptionData>): ApplicationCommandOption[] {
	const applicationCommandOptions: ApplicationCommandOption[] = [];

	for (const [key, value] of Object.entries(options)) {
		applicationCommandOptions.push({
			name: key,
			...value,
		});
	}

	return applicationCommandOptions;
}
