/**
 * biome-ignore-all lint/style/noMagicNumbers: Magic numbers in test files may
 * be ignored.
 */

import { ClientEvents } from '#client/structures/index.js';
import { EventManager } from './EventManager.js';

describe('Class: EventManager', () => {
	let eventManager: EventManager;

	beforeEach(() => {
		eventManager = new EventManager();
	});

	describe('Method: addEventListener', () => {
		it('Should have count 2 after adding two event listeners', () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);

			const debugEventListenerCount = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListenerCount).toBe(2);
		});
	});

	describe('Method: emit', () => {
		it('Should emit all event listeners with specified data', () => {
			const debugListenerFunction = vi.fn(({ message }: { message: string }) => message);

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction, {
				once: true,
			});

			eventManager.emit(ClientEvents.Debug, {
				message: 'First Call',
			});
			eventManager.emit(ClientEvents.Debug, {
				message: 'Second Call',
			});

			expect(debugListenerFunction).toHaveBeenCalledTimes(3);

			expect(debugListenerFunction).toHaveBeenNthCalledWith(1, {
				message: 'First Call',
			});
			expect(debugListenerFunction).toHaveBeenNthCalledWith(2, {
				message: 'First Call',
			});
			expect(debugListenerFunction).toHaveBeenNthCalledWith(3, {
				message: 'Second Call',
			});
		});
	});

	describe('Method: removeEventListener', () => {
		it('Should remove an event listener with an specified callback', () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, debugListenerFunction);

			eventManager.removeEventListener(ClientEvents.Debug, debugListenerFunction);

			const debugEventListeners = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListeners).toBe(1);
		});
	});

	describe('Method: removeEventListeners', () => {
		it('Should remove all event listeners', () => {
			const debugListenerFunction = () => undefined;

			eventManager.addEventListener(ClientEvents.Debug, () => debugListenerFunction);
			eventManager.addEventListener(ClientEvents.Debug, () => debugListenerFunction);

			eventManager.removeEventListeners(ClientEvents.Debug);

			const debugEventListeners = eventManager.getEventListenerCount(ClientEvents.Debug);

			expect(debugEventListeners).toBe(0);
		});
	});
});
