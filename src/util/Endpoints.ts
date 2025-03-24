const CHANNELS = {
  channelsMessages: (channelId: string) => `/channels/${channelId}/messages`,
};

const MISCELLANEOUS = {
  gatewayBot: () => "/gateway/bot",
};

export const Endpoints = {
  ...CHANNELS,
  ...MISCELLANEOUS,
};
