import { Bucket } from "./Bucket.js";

export class BucketManager {
	readonly #buckets = new Map<string, Bucket>();
	readonly #routeBuckets = new Map<string, string>();

	#upsertBucket(bucketId: string) {
		const buckets = this.#buckets;
		const existingBucket = buckets.get(bucketId);

		if (existingBucket) {
			return existingBucket;
		}

		const bucket = new Bucket();

		buckets.set(bucketId, bucket);

		return bucket;
	}

	getBucket(normalizedRoute: string, bucketId?: string): Bucket {
		const routeBuckets = this.#routeBuckets;

		if (bucketId) {
			routeBuckets.set(normalizedRoute, bucketId);
		}

		const id = bucketId ?? routeBuckets.get(normalizedRoute) ?? normalizedRoute;
		const bucket = this.#upsertBucket(id);

		return bucket;
	}
}
