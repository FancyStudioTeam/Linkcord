import type { ContainerComponent } from '#types/index.js';
import type { Container } from './Container.js';
import type { AllowedSeparator } from './Separator.types.js';
import type { AllowedTextDisplay } from './TextDisplay.types.js';

export type AllowedContainer = Container | ContainerComponent;
export type AllowedContainerComponent = AllowedSeparator | AllowedTextDisplay;
