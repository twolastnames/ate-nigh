export enum Stage {
  IDLE,
  FETCHING,
  SUCCESS,
  ERROR,
}

export type GetResponseInformation = {
  code?: number;
  stage: Stage;
  error?: string;
};

export type GetOptions = {
  holdCall?: () => boolean;
};

export type GetResponse<PAYLOAD> = GetResponseInformation & {
  data?: PAYLOAD;
};

export type PostResponse<BODY> = GetResponseInformation & {
  post: (body: BODY) => void;
  id?: string;
};
