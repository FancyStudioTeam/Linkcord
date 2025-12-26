import type { RESTMethod } from '#rest/structures/RESTManager.types.js';

const ROUTE_REACTIONS_REGEX = /\/reactions\/[^/]+/g;
const ROUTE_REACTIONS_USER_REGEX = /\/reactions\/:id\/[^/]+/g;
const ROUTE_REGEX = /\/([a-z-]+)\/(?:[0-9]{17,20})/g;
const ROUTE_TOP_LEVEL_RESOURCES_PATH = [
	'channels',
	'guilds',
	'webhooks',
] as const;
const ROUTE_WEBHOOKS_REGEX = /^\/webhooks\/(\d+)\/[A-Za-z0-9-_]{64,}/;

export function normalizeRoute<Method extends RESTMethod>(method: Method, endpoint: string): `${Method} ${string}` {
	if (!endpoint.startsWith('/')) {
		endpoint = `/${endpoint}`;
	}

	const routeCallback = (match: string, path: TopLevelResourcePath) =>
		ROUTE_TOP_LEVEL_RESOURCES_PATH.includes(path) ? match : `/${path}/:id`;

	let route = endpoint.replace(ROUTE_REGEX, routeCallback);

	route = route.replace(ROUTE_REACTIONS_REGEX, '/reactions/:id');
	route = route.replace(ROUTE_REACTIONS_USER_REGEX, '/reactions/:id/:user_id');
	route = route.replace(ROUTE_WEBHOOKS_REGEX, '/webhooks/$1/:token');

	return `${method} ${route}` as const;
}

type TopLevelResourcePath = (typeof ROUTE_TOP_LEVEL_RESOURCES_PATH)[number];
