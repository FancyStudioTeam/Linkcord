import { Bucket } from "./Bucket.js";

export class BucketManager {
	readonly #buckets = new Map<string, Bucket>();
	readonly #routeBuckets = new Map<string, string>();

	getBucket(normalizedRoute: string, bucketId?: string): Bucket {
		const buckets = this.#buckets;
		const routeBuckets = this.#routeBuckets;

		if (bucketId) {
			routeBuckets.set(normalizedRoute, bucketId);
		}

		const id = bucketId ?? routeBuckets.get(normalizedRoute) ?? normalizedRoute;
		const existingBucket = buckets.get(id);

		if (!existingBucket) {
			const bucket = new Bucket();

			buckets.set(id, bucket);

			return bucket;
		}

		return existingBucket;
	}
}
