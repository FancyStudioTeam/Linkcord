import type { Client } from '#client/index.js';
import { ApplicationsAPI } from '#rest/api/ApplicationsAPI.js';
import { ChannelsAPI } from '#rest/api/ChannelsAPI.js';
import { GatewayAPI } from '#rest/api/GatewayAPI.js';
import { VoiceAPI } from '#rest/api/VoiceAPI.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import type { RESTManager } from './RESTManager.js';

export class APIManager {
	declare readonly applications: ApplicationsAPI;
	declare readonly channels: ChannelsAPI;
	declare readonly gateway: GatewayAPI;
	declare readonly voice: VoiceAPI;

	constructor(rest: RESTManager, client: Client) {
		defineReadonlyProperty(this, 'applications', new ApplicationsAPI(rest, client));
		defineReadonlyProperty(this, 'channels', new ChannelsAPI(rest, client));
		defineReadonlyProperty(this, 'gateway', new GatewayAPI(rest, client));
		defineReadonlyProperty(this, 'voice', new VoiceAPI(rest, client));
	}
}
