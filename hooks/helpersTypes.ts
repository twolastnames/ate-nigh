export enum Stage {
  FETCHING,
  SUCCESS,
  ERROR,
}

export type GetResponseInformation = {
  code?: number;
  stage: Stage;
  error?: string;
};

export type GetResponse<PAYLOAD> = GetResponseInformation & {
  data?: PAYLOAD;
};
