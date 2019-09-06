import { UserData } from './Speedruncom';

export interface SendMessageArgsMap {
  twitchUpdateChannelInfo: { status: string; game: string };
  twitchGameSearch: string;
  srcomTwitchGameSearch: string;
  srcomUserSearch: string;
  twitchRefreshToken: void;
  ffzUpdateFeaturedChannels: string[];
}

export interface SendMessageReturnMap {
  twitchUpdateChannelInfo: void;
  twitchGameSearch: string;
  srcomTwitchGameSearch: string;
  srcomUserSearch: UserData;
  twitchRefreshToken: void;
  ffzUpdateFeaturedChannels: void;
}

export interface SendMessageAck {
  (error: Error | null, data?: any): void;
}

export type SendMessage = <
  K extends keyof SendMessageArgsMap
>(
  name: K,
  data?: SendMessageArgsMap[K],
) => Promise<SendMessageReturnMap[K]>;
