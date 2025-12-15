import { setTimeout as wait } from "node:timers/promises";
import { ONE_SECOND_MILLISECONDS } from "#utils/Constants.js";

export class Bucket {
	readonly #queue: RequestFunction[] = [];

	#remaining = Infinity;
	#resetAfter = Infinity;
	#running = false;

	get #resetAt(): number {
		return Date.now() + this.#resetAfter * ONE_SECOND_MILLISECONDS;
	}

	#decreaseRemaining(): void {
		this.#remaining--;
	}

	async #run(): Promise<void> {
		const running = this.#running;
		const queue = this.#queue;

		if (running) return;

		this.#setIsRunning();

		while (queue.length > 0) {
			const now = Date.now();

			const remaining = this.#remaining;
			const resetAt = this.#resetAt;

			if (remaining <= 0 && resetAt > now) {
				await wait(resetAt - now);
			}

			const func = queue.shift();

			this.#decreaseRemaining();

			if (!func) continue;

			await func();
		}

		this.#setIsRunning(false);
	}

	#setIsRunning(running = true): void {
		this.#running = running;
	}

	async enqueue(requestFunction: RequestFunction): Promise<void> {
		const queue = this.#queue;

		queue.push(requestFunction);

		await this.#run();
	}

	update(headers: Headers): void {
		const remaining = headers.get("X-RateLimit-Remaining");
		const resetAfter = headers.get("X-RateLimit-Reset-After");

		if (remaining) {
			this.#remaining = Number(remaining);
		}

		if (resetAfter) {
			this.#resetAfter = Number(resetAfter);
		}
	}
}

type RequestFunction = () => Promise<void>;
