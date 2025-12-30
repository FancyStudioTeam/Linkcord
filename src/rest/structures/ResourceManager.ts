import type { Client } from '#client/index.js';
import { ApplicationsResource } from '#rest/resources/ApplicationsResource.js';
import { ChannelsResource } from '#rest/resources/ChannelsResource.js';
import { GatewayResource } from '#rest/resources/GatewayResource.js';
import { GuildsResource } from '#rest/resources/GuildsResource.js';
import { InteractionsResource } from '#rest/resources/InteractionsResource.js';
import { VoiceResource } from '#rest/resources/VoiceResource.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import type { RESTManager } from './RESTManager.js';

export class ResourceManager {
	declare readonly applications: ApplicationsResource;
	declare readonly channels: ChannelsResource;
	declare readonly gateway: GatewayResource;
	declare readonly guilds: GuildsResource;
	declare readonly voice: VoiceResource;

	constructor(rest: RESTManager, client: Client) {
		defineReadonlyProperty(this, 'applications', new ApplicationsResource(rest, client));
		defineReadonlyProperty(this, 'channels', new ChannelsResource(rest, client));
		defineReadonlyProperty(this, 'gateway', new GatewayResource(rest, client));
		defineReadonlyProperty(this, 'guilds', new GuildsResource(rest, client));
		defineReadonlyProperty(this, 'interactions', new InteractionsResource(rest, client));
		defineReadonlyProperty(this, 'voice', new VoiceResource(rest, client));
	}
}
