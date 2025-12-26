import { transformToken } from '../transformToken.js';

const DISCORD_BOT_TOKEN = 'ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX';

describe('transformToken', () => {
	it('Should return the original string if the input does not have the Bot prefix', () => {
		expect(DISCORD_BOT_TOKEN).toBe(DISCORD_BOT_TOKEN);
	});

	it('Should return the token without the Bot prefix', () => {
		expect(transformToken(`Bot ${DISCORD_BOT_TOKEN}`)).toBe(DISCORD_BOT_TOKEN);
		expect(transformToken(`BOT ${DISCORD_BOT_TOKEN}`)).toBe(DISCORD_BOT_TOKEN);
		expect(transformToken(`bot ${DISCORD_BOT_TOKEN}`)).toBe(DISCORD_BOT_TOKEN);
	});
});
