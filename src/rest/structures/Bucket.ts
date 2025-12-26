import { setTimeout } from 'node:timers/promises';
import { ONE_SECOND_MILLISECONDS } from '#utils/Constants.js';

export class Bucket {
	readonly #queue: RequestFunction[] = [];

	#isProcessing = false;
	#remaining = Infinity;
	#resetAfter = 0;

	get #isRateLimited(): boolean {
		return this.#remaining === 0;
	}

	get #millisecondsUntilReset(): number {
		return this.#resetAfter * ONE_SECOND_MILLISECONDS;
	}

	async #processQueue(): Promise<void> {
		const isProcessing = this.#isProcessing;

		if (isProcessing) return;

		this.#setIsProcessing(true);

		const queue = this.#queue;

		try {
			while (queue.length > 0) {
				const isRateLimited = this.#isRateLimited;

				if (isRateLimited) {
					const millisecondsToWait = this.#millisecondsUntilReset;

					await setTimeout(millisecondsToWait);
				}

				const request = queue.shift();

				if (!request) continue;

				await request();
			}
		} finally {
			this.#setIsProcessing(false);
		}
	}

	#setIsProcessing(isProcessing: boolean = true) {
		this.#isProcessing = isProcessing;
	}

	enqueue(requestFunction: RequestFunction): void {
		const queue = this.#queue;

		queue.push(requestFunction);
		void this.#processQueue();
	}

	update(headers: Headers): void {
		const remaining = headers.get('X-RateLimit-Remaining');
		const resetAfter = headers.get('X-RateLimit-Reset-After');

		this.#remaining = Number(remaining);
		this.#resetAfter = Number(resetAfter);
	}
}

type RequestFunction = () => Promise<void>;
