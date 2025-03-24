export const REST_VERSION = 10;
export const BASE_URL = `https://discord.com/api/v${REST_VERSION}`;

const BASE = {
  api: BASE_URL,
};

const CHANNELS = {
  channelsMessages: (channelId: string) => `/channels/${channelId}/messages`,
};

const MISCELLANEOUS = {
  gatewayBot: () => "/gateway/bot",
};

export const Endpoints = {
  ...BASE,
  ...CHANNELS,
  ...MISCELLANEOUS,
};
